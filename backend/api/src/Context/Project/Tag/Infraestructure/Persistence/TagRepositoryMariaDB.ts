import mariadb from 'mariadb';
import InternalException from '../../../../Shared/Domain/Exception/InternalException';
import NotFoundException from '../../../../Shared/Domain/Exception/NotFoundException';
import Id from '../../../../Shared/Domain/ValueObject/Id';
import Title from '../../../../Shared/Domain/ValueObject/Title';
import Tag from '../../Domain/Model/Tag';
import TagRepository from '../../Domain/Persistence/TagRepository';
import TagValue from '../../Domain/ValueObject/TagValue';

const pool = mariadb.createPool({
    host: 'mariadb',
    port: 3306,
    database: 'dbox',
    user: 'dbox',
    password: 'dbox',
    connectionLimit: 5,
});

class TagRepositoryMariaDB implements TagRepository {
    async create(tag: Tag): Promise<void> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            await conn.query(
                'INSERT INTO tags(id,title,value,createdAt) value (?, ?, ?, ?)',
                [tag.id.value, tag.title.value, tag.value.value, tag.createdAt]
            );
        } catch (err) {
            console.log(err);

            throw new InternalException('unable to create tag ' + tag.id.value);
        } finally {
            await this.disconnect(conn);
        }
    }

    async delete(id: Id): Promise<void> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            await conn.query('DELETE FROM tags WHERE id=? LIMIT 1', [id.value]);
        } catch (err) {
            throw new NotFoundException('unable to delete tag ' + id.value);
        } finally {
            this.disconnect(conn);
        }
    }

    async get(id: Id): Promise<Tag> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            const result = await conn.query(
                'SELECT * FROM tags WHERE id=? LIMIT 1',
                [id.value]
            );
            return Tag.create(
                new Id(result.id),
                new Title(result.title),
                new TagValue(result.value),
                new Date(result.createdAt)
            );
        } catch (err) {
            throw new NotFoundException('unable to get tag ' + id.value);
        } finally {
            this.disconnect(conn);
        }
    }

    async list(pattern?: string): Promise<Tag[]> {
        const conn: mariadb.PoolConnection = await this.connect();
        const result: Tag[] = [];
        try {
            const likeSql: string =
                typeof pattern === 'string' && pattern.trim() !== ''
                    ? `%${pattern?.trim()}%`
                    : '';
            const where: string =
                likeSql !== ''
                    ? ' WHERE LOWER(title) LIKE ? OR LOWER(value) LIKE ? '
                    : '';
            const values: string[] = likeSql !== '' ? [likeSql, likeSql] : [];
            const sql: string =
                'SELECT id,title,value,createdAt FROM tags ' + where;

            const collection = await conn.query(sql, values);
            collection.forEach(
                (item: {
                    id: string;
                    title: string;
                    value: string;
                    createdAt: string | number | Date;
                }) => {
                    result.push(
                        Tag.create(
                            new Id(item.id),
                            new Title(item.title),
                            new TagValue(item.value),
                            new Date(item.createdAt)
                        )
                    );
                }
            );
        } catch (error) {
            throw new InternalException(
                'unable to list tags ' + (error as Error).message
            );
        } finally {
            await this.disconnect(conn);
        }

        return result;
    }

    private async connect(): Promise<mariadb.PoolConnection> {
        return await pool.getConnection();
    }

    private async disconnect(
        connection: mariadb.PoolConnection
    ): Promise<void> {
        await connection.end();
    }
}

export default TagRepositoryMariaDB;
