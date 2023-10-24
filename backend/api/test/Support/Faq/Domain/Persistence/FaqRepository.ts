import Faq from '../../../../../src/Context/Support/Faq/Domain/Model/Faq';

interface FaqRepository {
    create(faq: Faq): void;
}

export default FaqRepository;
