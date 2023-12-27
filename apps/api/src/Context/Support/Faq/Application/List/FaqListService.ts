import FaqRepository from '../../Domain/Persistence/FaqRepository';
import FaqListRequest from './FaqListRequest';
import FaqListResponse from './FaqListResponse';

class FaqListService {
    constructor(private readonly repository: FaqRepository) {}

    async execute(request: FaqListRequest): Promise<FaqListResponse> {
        const list = await this.repository.list(request.pattern);

        return new FaqListResponse(list);
    }
}

export default FaqListService;
