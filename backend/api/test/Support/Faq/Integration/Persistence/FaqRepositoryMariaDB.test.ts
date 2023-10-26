import mariadb from 'mariadb';
import InternalException from '../../../../../src/Context/Shared/Domain/Exception/InternalException';
import FaqCreateRequest from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateRequest';
import FaqCreateService from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateService';
import Faq from '../../../../../src/Context/Support/Faq/Domain/Model/Faq';
import FaqRepository from '../../../../../src/Context/Support/Faq/Domain/Persistence/FaqRepository';
import SupportMother from '../../../SupportMother';

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
        let conn: mariadb.PoolConnection | null = null;
        try {
            conn = await pool.getConnection();
            await conn.query(
                'INSERT INTO faqs(id,title.solution) value (?, ?, ?)',
                [faq.id.value, faq.title.value, faq.solution.value]
            );
            conn.end();
        } catch (err) {
            throw new InternalException(
                'unable to create faq, reason:' + (err as Error).message
            );
        }

        if (conn) conn.end();
    }
}

const respository: FaqRepositoryMariaDB = new FaqRepositoryMariaDB();
const request: FaqCreateRequest = SupportMother.FaqCreateRequest();
const sut: FaqCreateService = SupportMother.FaqCreateService(respository);

describe('FaqCreateService', () => {
    it('shoud create a faq', () => {
        expect(async () => {
            await sut.execute(request);
        }).toThrow(InternalException);
    });
});
