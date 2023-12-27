import mariadb from 'mariadb';
import InternalException from '../../../../../Shared/Domain/Exception/InternalException';
import NotFoundException from '../../../../../Shared/Domain/Exception/NotFoundException';
import Description from '../../../../../Shared/Domain/ValueObject/Description';
import Id from '../../../../../Shared/Domain/ValueObject/Id';
import Title from '../../../../../Shared/Domain/ValueObject/Title';
import Module from '../../Domain/Model/Module';
import ModuleFile from '../../Domain/Model/ModuleFile';
import ModuleRepository from '../../Domain/Persistence/ModuleRepository';

const pool = mariadb.createPool({
    host: 'mariadb',
    port: 3306,
    database: 'dbox',
    user: 'dbox',
    password: 'dbox',
    connectionLimit: 5,
});

class ModuleRepositoryMariaDB implements ModuleRepository {
    async create(module: Module): Promise<void> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            await conn.query(
                'INSERT INTO modules(id,title,description,createdAt) value (?, ?, ?, ?)',
                [
                    module.id.value,
                    module.title.value,
                    module.description.value,
                    module.createdAt,
                ]
            );
        } catch (err) {
            throw new InternalException(
                'unable to create module ' + module.id.value
            );
        } finally {
            await this.disconnect(conn);
        }
    }
    async createFile(moduleFile: ModuleFile): Promise<void> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            await conn.query(
                'INSERT INTO modules_files(id,moduleId,title,description,createdAt) value (?, ?, ?, ?, ?)',
                [
                    moduleFile.id.value,
                    moduleFile.moduleId.value,
                    moduleFile.title.value,
                    moduleFile.description.value,
                    moduleFile.createdAt,
                ]
            );
        } catch (err) {
            throw new InternalException(
                'unable to create file ' +
                    moduleFile.id.value +
                    ' for module ' +
                    moduleFile.moduleId.value
            );
        } finally {
            await this.disconnect(conn);
        }
    }

    async delete(id: Id): Promise<void> {
        const conn: mariadb.PoolConnection = await this.connect();

        try {
            const result = await conn.query(
                'DELETE FROM modules WHERE id=? LIMIT 1',
                [id.value]
            );
            if (result.affectedRows !== 1) {
                throw new Error();
            }
        } catch (err) {
            throw new NotFoundException('unable to delete module ' + id.value);
        } finally {
            this.disconnect(conn);
        }
    }

    async deleteFile(id: Id): Promise<void> {
        const conn: mariadb.PoolConnection = await this.connect();

        try {
            const result = await conn.query(
                'DELETE FROM modules_files WHERE id=? LIMIT 1',
                [id.value]
            );
            if (result.affectedRows !== 1) {
                throw new Error();
            }
        } catch (err) {
            throw new NotFoundException(
                'unable to delete module file ' + id.value
            );
        } finally {
            this.disconnect(conn);
        }
    }

    async get(id: Id): Promise<Module> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            const result = await conn.query(
                'SELECT * FROM modules WHERE id=? LIMIT 1',
                [id.value]
            );

            return Module.create(
                new Id(result[0].id),
                new Title(result[0].title),
                new Description(result[0].description),
                new Date(result[0].createdAt)
            );
        } catch (err) {
            throw new NotFoundException('unable to get module ' + id.value);
        } finally {
            this.disconnect(conn);
        }
    }

    async getFile(id: Id): Promise<ModuleFile> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            const result = await conn.query(
                'SELECT * FROM modules_files WHERE id=? LIMIT 1',
                [id.value]
            );
            return ModuleFile.create(
                new Id(result.id),
                new Id(result.moduleId),
                new Title(result.title),
                new Description(result.description),
                new Date(result.createdAt)
            );
        } catch (err) {
            throw new NotFoundException(
                'unable to get module file ' + id.value
            );
        } finally {
            this.disconnect(conn);
        }
    }

    async list(pattern?: string): Promise<Module[]> {
        const conn: mariadb.PoolConnection = await this.connect();
        const result: Module[] = [];
        try {
            const likeSql: string =
                typeof pattern === 'string' && pattern.trim() !== ''
                    ? `%${pattern?.trim()}%`
                    : '';
            const where: string =
                likeSql !== ''
                    ? ' WHERE LOWER(title) LIKE ? OR LOWER(description) LIKE ? '
                    : '';
            const values: string[] = likeSql !== '' ? [likeSql, likeSql] : [];
            const sql: string =
                'SELECT id,title,description,createdAt FROM modules ' + where;

            const collection = await conn.query(sql, values);
            collection.forEach(
                (item: {
                    id: string;
                    title: string;
                    description: string;
                    createdAt: string | number | Date;
                }) => {
                    result.push(
                        Module.create(
                            new Id(item.id),
                            new Title(item.title),
                            new Description(item.description),
                            new Date(item.createdAt)
                        )
                    );
                }
            );
        } catch (error) {
            throw new InternalException(
                'unable to list modules ' + (error as Error).message
            );
        } finally {
            await this.disconnect(conn);
        }

        return result;
    }

    async listFiles(moduleId: Id, pattern?: string): Promise<ModuleFile[]> {
        const conn: mariadb.PoolConnection = await this.connect();
        const result: ModuleFile[] = [];
        try {
            const likeSql: string =
                typeof pattern === 'string' && pattern.trim() !== ''
                    ? `%${pattern?.trim()}%`
                    : '';
            const where: string = ' WHERE moduleId=? ';
            likeSql !== ''
                ? '  AND LOWER(title) LIKE ? OR LOWER(description) LIKE ? '
                : '';
            const values: string[] =
                likeSql !== ''
                    ? [moduleId.value, likeSql, likeSql]
                    : [moduleId.value];
            const sql: string =
                'SELECT id,moduleId,title,description,createdAt FROM modules_files ' +
                where;

            const collection = await conn.query(sql, values);
            collection.forEach(
                (item: {
                    id: string;
                    moduleId: string;
                    title: string;
                    description: string;
                    createdAt: string | number | Date;
                }) => {
                    result.push(
                        ModuleFile.create(
                            new Id(item.id),
                            new Id(item.moduleId),
                            new Title(item.title),
                            new Description(item.description),
                            new Date(item.createdAt)
                        )
                    );
                }
            );
        } catch (error) {
            throw new InternalException(
                'unable to list modules files ' + (error as Error).message
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

export default ModuleRepositoryMariaDB;
