import FaqRepository from '../../Domain/Persistence/FaqRepository';
import FaqListRequest from './FaqListRequest';

class FaqListService {
    constructor(private readonly repository: FaqRepository) {}

    async execute(request: FaqListRequest): Promise<void> {
        await this.repository.list(request.pattern);
    }
}

export default FaqListService;
