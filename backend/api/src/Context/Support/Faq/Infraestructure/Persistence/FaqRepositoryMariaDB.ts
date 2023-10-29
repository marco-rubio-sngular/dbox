import mariadb from 'mariadb';
import InternalException from '../../../../Shared/Domain/Exception/InternalException';
import NotFoundException from '../../../../Shared/Domain/Exception/NotFoundException';
import Id from '../../../../Shared/Domain/ValueObject/Id';
import Title from '../../../../Shared/Domain/ValueObject/Title';
import Faq from '../../Domain/Model/Faq';
import FaqRepository from '../../Domain/Persistence/FaqRepository';
import Solution from '../../Domain/ValueObject/Solution';

const pool = mariadb.createPool({
    host: 'mariadb',
    port: 3306,
    database: 'dbox',
    user: 'dbox',
    password: 'dbox',
    connectionLimit: 5,
});

class FaqRepositoryMariaDB implements FaqRepository {
    async create(faq: Faq): Promise<void> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            await conn.query(
                'INSERT INTO faqs(id,title,solution,createdAt) value (?, ?, ?, ?)',
                [
                    faq.id.value,
                    faq.title.value,
                    faq.solution.value,
                    faq.createdAt,
                ]
            );
        } catch (err) {
            console.log(err);

            throw new InternalException('unable to create faq ' + faq.id.value);
        } finally {
            this.disconnect(conn);
        }
    }

    async delete(id: Id): Promise<void> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            await conn.query('DELETE FROM faqs WHERE id=? LIMIT 1', [id.value]);
        } catch (err) {
            throw new NotFoundException('unable to delete faq ' + id.value);
        } finally {
            this.disconnect(conn);
        }
    }

    async get(id: Id): Promise<Faq> {
        const conn: mariadb.PoolConnection = await this.connect();
        try {
            const result = await conn.query(
                'SELECT * FROM faqs WHERE id=? LIMIT 1',
                [id.value]
            );
            return Faq.create(
                new Id(result.id),
                new Title(result.title),
                new Solution(result.solution),
                new Date(result.createdAt)
            );
        } catch (err) {
            throw new NotFoundException('unable to get faq ' + id.value);
        } finally {
            this.disconnect(conn);
        }
    }

    async list(pattern?: string): Promise<Faq[]> {
        const conn: mariadb.PoolConnection = await this.connect();

        let result: Faq[] = [];
        try {
            return result;
        } catch (_) {
            return result;
        } finally {
            this.disconnect(conn);
        }
    }

    private async connect(): Promise<mariadb.PoolConnection> {
        return await pool.getConnection();
    }

    private async disconnect(
        connection: mariadb.PoolConnection
    ): Promise<void> {
        connection.end();
    }
}

export default FaqRepositoryMariaDB;
