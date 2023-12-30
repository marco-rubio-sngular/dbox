import FaqCreateRequest from '../../../src/Context/Support/Faq/Application/Create/FaqCreateRequest';
import FaqCreateResponse from '../../../src/Context/Support/Faq/Application/Create/FaqCreateResponse';
import FaqCreateService from '../../../src/Context/Support/Faq/Application/Create/FaqCreateService';
import FaqDeleteRequest from '../../../src/Context/Support/Faq/Application/Delete/FaqDeleteRequest';
import FaqDeleteService from '../../../src/Context/Support/Faq/Application/Delete/FaqDeleteService';
import FaqListRequest from '../../../src/Context/Support/Faq/Application/List/FaqListRequest';
import FaqListResponse from '../../../src/Context/Support/Faq/Application/List/FaqListResponse';
import FaqListService from '../../../src/Context/Support/Faq/Application/List/FaqListService';
import Faq from '../../../src/Context/Support/Faq/Domain/Model/Faq';
import FaqRepository from '../../../src/Context/Support/Faq/Domain/Persistence/FaqRepository';
import Solution from '../../../src/Context/Support/Faq/Domain/ValueObject/Solution';
import { SharedMother } from '../../Shared/SharedMother';

class FaqMother {
    public static FAQ_CREATED_AT: Date = new Date();
    public static FAQ_PATTERN: string = 'aaa';

    public static FaqListService(repository: FaqRepository): FaqListService {
        return new FaqListService(repository);
    }

    public static FaqDeleteService(
        repository: FaqRepository
    ): FaqDeleteService {
        return new FaqDeleteService(repository);
    }

    public static FaqCreateService(
        repository: FaqRepository
    ): FaqCreateService {
        return new FaqCreateService(repository);
    }

    public static FaqDeleteRequest(): FaqDeleteRequest {
        return new FaqDeleteRequest(SharedMother.ID_VALUE);
    }

    public static FaqCreateResponse(): FaqCreateResponse {
        return new FaqCreateResponse(SharedMother.ID_VALUE);
    }

    public static FaqListRequest(): FaqListRequest {
        return new FaqListRequest(FaqMother.FAQ_PATTERN);
    }

    public static FaqListResponse(): FaqListResponse {
        return new FaqListResponse([]);
    }

    public static FaqCreateRequest(id?: string): FaqCreateRequest {
        return new FaqCreateRequest(
            id !== undefined ? id : SharedMother.Id().value,
            SharedMother.TitleBase64().value,
            FaqMother.Solution().value
        );
    }

    public static FaqToCreate(): Faq {
        return Faq.create(
            SharedMother.Id(),
            SharedMother.TitleBase64(),
            FaqMother.Solution()
        );
    }

    public static FaqToRead(
        id?: string,
        title?: string,
        solution?: string
    ): Faq {
        return Faq.create(
            SharedMother.Id(id),
            SharedMother.TitleBase64(title),
            FaqMother.Solution(solution),
            FaqMother.FAQ_CREATED_AT
        );
    }

    public static Solution(value?: string): Solution {
        return new Solution(
            value !== undefined ? value : SharedMother.LONG_TEXT_BASE64_VALUE
        );
    }
}

export default FaqMother;
