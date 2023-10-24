import FaqRepository from '../../../../../../test/Support/Faq/Domain/Persistence/FaqRepository';
import Id from '../../../../Shared/Domain/ValueObject/Id';
import Title from '../../../../Shared/Domain/ValueObject/Title';
import Faq from '../../Domain/Model/Faq';
import Solution from '../../Domain/ValueObject/Solution';
import FaqCreateRequest from './FaqCreateRequest';
class FaqCreateService {
    constructor(private readonly repository: FaqRepository) {}

    execute(request: FaqCreateRequest): void {
        const faq: Faq = Faq.toCreate(
            new Id(request.id),
            new Title(request.title),
            new Solution(request.solution)
        );

        this.repository.create(faq);
    }
}

export default FaqCreateService;
