import Id from '../../src/Context/Shared/Domain/ValueObject/Id';
import Title from '../../src/Context/Shared/Domain/ValueObject/Title';
import FaqCreateRequest from '../../src/Context/Support/Faq/Application/Create/FaqCreateRequest';
import FaqCreateResponse from '../../src/Context/Support/Faq/Application/Create/FaqCreateResponse';
import FaqCreateService from '../../src/Context/Support/Faq/Application/Create/FaqCreateService';
import Faq from '../../src/Context/Support/Faq/Domain/Model/Faq';
import FaqRepository from '../../src/Context/Support/Faq/Domain/Persistence/FaqRepository';
import Solution from '../../src/Context/Support/Faq/Domain/ValueObject/Solution';

class SupportMother {
    public static FAQ_TITLE: string = 'a'.repeat(Title.MINIMUM_LENGTH);
    public static FAQ_SOLUTION: string = 'a'.repeat(Solution.MINIMUM_LENGTH);
    public static FAQ_CREATED_AT: Date = new Date();
    public static FAQ_ID: string = '5322fbf7-fe25-45d1-82a1-3c62fcc0ffb1';

    public static FaqCreateService(
        repository: FaqRepository
    ): FaqCreateService {
        return new FaqCreateService(repository);
    }

    public static FaqCreateResponse(): FaqCreateResponse {
        return new FaqCreateResponse(SupportMother.FAQ_ID);
    }
    public static FaqCreateRequest(): FaqCreateRequest {
        return new FaqCreateRequest(
            SupportMother.Id().value,
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
