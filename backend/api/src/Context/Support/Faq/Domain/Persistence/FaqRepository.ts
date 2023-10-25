import Faq from '../Model/Faq';

interface FaqRepository {
    create(faq: Faq): Promise<void>;
}

export default FaqRepository;
