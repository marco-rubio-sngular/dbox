import NotFoundException from '../../../../../src/Context/Shared/Domain/Exception/NotFoundException';
import Id from '../../../../../src/Context/Shared/Domain/ValueObject/Id';
import FaqCreateRequest from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateRequest';
import FaqCreateService from '../../../../../src/Context/Support/Faq/Application/Create/FaqCreateService';
import Faq from '../../../../../src/Context/Support/Faq/Domain/Model/Faq';
import FaqRepository from '../../../../../src/Context/Support/Faq/Domain/Persistence/FaqRepository';
import FaqRepositoryMariaDB from '../../../../../src/Context/Support/Faq/Infraestructure/Persistence/FaqRepositoryMariaDB';
import SupportMother from '../../../SupportMother';

const faqs: FaqRepository = new FaqRepositoryMariaDB();
const creator: FaqCreateService = SupportMother.FaqCreateService(faqs);
const createRequest: FaqCreateRequest = SupportMother.FaqCreateRequest();

describe('FaqCreateService', () => {
    it('shoud create a faq', () => {
        expect(async () => {
            await creator.execute(createRequest);

            await faqs.delete(new Id(createRequest.id));
        }).not.toThrow();
    });

    it('shoud get an existing faq', () => {
        expect(async () => {
            await creator.execute(createRequest);

            const faq: Faq = await faqs.get(new Id(createRequest.id));

            expect(SupportMother.FAQ_ID).toStrictEqual(faq.id.value);

            await faqs.delete(new Id(createRequest.id));
        });
    });

    it('shoud delete an existing faq', () => {
        async () => {
            await creator.execute(createRequest);
            await faqs.delete(new Id(createRequest.id));

            try {
                await faqs.get(new Id(createRequest.id));
            } catch (error) {
                expect(error).toBeInstanceOf(NotFoundException);
            }
        };
    });

    it('shoud list faqs without pattern', () => {
        expect(async () => {
            await creator.execute(createRequest);

            const faq: Faq = await faqs.get(new Id(createRequest.id));

            expect(SupportMother.FAQ_ID).toStrictEqual(faq.id.value);

            await faqs.delete(new Id(createRequest.id));
        });
    });
});
