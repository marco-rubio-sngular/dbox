import * as crypto from 'crypto';
import Id from '../../src/Context/Shared/Domain/ValueObject/Id';
import Title from '../../src/Context/Shared/Domain/ValueObject/Title';
import FaqCreateRequest from '../../src/Context/Support/Faq/Application/Create/FaqCreateRequest';
import FaqCreateResponse from '../../src/Context/Support/Faq/Application/Create/FaqCreateResponse';
import FaqCreateService from '../../src/Context/Support/Faq/Application/Create/FaqCreateService';
import FaqDeleteRequest from '../../src/Context/Support/Faq/Application/Delete/FaqDeleteRequest';
import FaqDeleteResponse from '../../src/Context/Support/Faq/Application/Delete/FaqDeleteResponse';
import FaqDeleteService from '../../src/Context/Support/Faq/Application/Delete/FaqDeleteService';
import FaqListRequest from '../../src/Context/Support/Faq/Application/List/FaqListRequest';
import FaqListResponse from '../../src/Context/Support/Faq/Application/List/FaqListResponse';
import FaqListService from '../../src/Context/Support/Faq/Application/List/FaqListService';
import Faq from '../../src/Context/Support/Faq/Domain/Model/Faq';
import FaqRepository from '../../src/Context/Support/Faq/Domain/Persistence/FaqRepository';
import Solution from '../../src/Context/Support/Faq/Domain/ValueObject/Solution';

class SupportMother {
    public static FAQ_TITLE: string = 'a'.repeat(Title.MINIMUM_LENGTH);
    public static FAQ_SOLUTION: string = 'a'.repeat(Solution.MINIMUM_LENGTH);
    public static FAQ_CREATED_AT: Date = new Date();
    public static FAQ_ID: string = crypto.randomUUID();
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

    public static FaqDeleteResponse(): FaqDeleteResponse {
        return new FaqDeleteResponse(
            SupportMother.FAQ_ID,
            SupportMother.FAQ_TITLE,
            SupportMother.FAQ_SOLUTION,
            SupportMother.FAQ_CREATED_AT
        );
    }

    public static FaqDeleteRequest(): FaqDeleteRequest {
        return new FaqDeleteRequest(SupportMother.FAQ_ID);
    }

    public static FaqCreateResponse(): FaqCreateResponse {
        return new FaqCreateResponse(SupportMother.FAQ_ID);
    }

    public static FaqListRequest(): FaqListRequest {
        return new FaqListRequest(SupportMother.FAQ_PATTERN);
    }

    public static FaqListResponse(): FaqListResponse {
        return new FaqListResponse([]);
    }

    public static FaqCreateRequest(id?: string): FaqCreateRequest {
        return new FaqCreateRequest(
            id !== undefined ? id : SupportMother.Id().value,
            SupportMother.Title().value,
            SupportMother.Solution().value
        );
    }

    public static FaqToCreate(): Faq {
        return Faq.create(
            SupportMother.Id(),
            SupportMother.Title(),
            SupportMother.Solution()
        );
    }

    public static FaqToRead(
        id?: string,
        title?: string,
        solution?: string
    ): Faq {
        return Faq.create(
            SupportMother.Id(id),
            SupportMother.Title(title),
            SupportMother.Solution(solution),
            SupportMother.FAQ_CREATED_AT
        );
    }

    public static Solution(value?: string): Solution {
        return new Solution(
            value !== undefined ? value : SupportMother.FAQ_SOLUTION
        );
    }

    public static Title(value?: string): Title {
        return new Title(value !== undefined ? value : SupportMother.FAQ_TITLE);
    }

    public static Id(value?: string): Id {
        return new Id(value !== undefined ? value : SupportMother.FAQ_ID);
    }
}

export default SupportMother;
