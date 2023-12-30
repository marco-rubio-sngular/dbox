import * as crypto from 'crypto';
import BadRequestException from '../../src/Context/Shared/Domain/Exception/BadRequestException';
import InternalException from '../../src/Context/Shared/Domain/Exception/InternalException';
import NotFoundException from '../../src/Context/Shared/Domain/Exception/NotFoundException';
import FileName from '../../src/Context/Shared/Domain/ValueObject/FileName';
import Id from '../../src/Context/Shared/Domain/ValueObject/Id';
import LimitedString from '../../src/Context/Shared/Domain/ValueObject/LimitedString';
import Tags from '../../src/Context/Shared/Domain/ValueObject/Tags';
import Title from '../../src/Context/Shared/Domain/ValueObject/Title';
import TitleBase64 from '../../src/Context/Shared/Domain/ValueObject/TitleBase64';

export class SharedMother {
    public static TITLE_BASE64_VALUE: string =
        'dGl0bGUgZm9yIHRlc3RpbmcgYmFzZTY0IHZhbHVl';

    public static LONG_TEXT_BASE64_VALUE: string =
        'IyBNYXJrZG93biBDaGVhdCBTaGVldAoKVGhhbmtzIGZvciB2aXNpdGluZyBbVGhlIE1hcmtkb3duIEd1aWRlXShodHRwczovL3d3dy5tYXJrZG93bmd1aWRlLm9yZykhCgpUaGlzIE1hcmtkb3duIGNoZWF0IHNoZWV0IHByb3ZpZGVzIGEgcXVpY2sgb3ZlcnZpZXcgb2YgYWxsIHRoZSBNYXJrZG93biBzeW50YXggZWxlbWVudHMuIEl0IGNhbuKAmXQgY292ZXIgZXZlcnkgZWRnZSBjYXNlLCBzbyBpZiB5b3UgbmVlZCBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGFueSBvZiB0aGVzZSBlbGVtZW50cywgcmVmZXIgdG8gdGhlIHJlZmVyZW5jZSBndWlkZXMgZm9yIFtiYXNpYyBzeW50YXhdKGh0dHBzOi8vd3d3Lm1hcmtkb3duZ3VpZGUub3JnL2Jhc2ljLXN5bnRheC8pIGFuZCBbZXh0ZW5kZWQgc3ludGF4XShodHRwczovL3d3dy5tYXJrZG93bmd1aWRlLm9yZy9leHRlbmRlZC1zeW50YXgvKS4KCiMjIEJhc2ljIFN5bnRheAoKVGhlc2UgYXJlIHRoZSBlbGVtZW50cyBvdXRsaW5lZCBpbiBKb2huIEdydWJlcuKAmXMgb3JpZ2luYWwgZGVzaWduIGRvY3VtZW50LiBBbGwgTWFya2Rvd24gYXBwbGljYXRpb25zIHN1cHBvcnQgdGhlc2UgZWxlbWVudHMuCgojIyMgSGVhZGluZwoKIyBIMQojIyBIMgojIyMgSDMKCiMjIyBCb2xkCgoqKmJvbGQgdGV4dCoqCgojIyMgSXRhbGljCgoqaXRhbGljaXplZCB0ZXh0KgoKIyMjIEJsb2NrcXVvdGUKCj4gYmxvY2txdW90ZQoKIyMjIE9yZGVyZWQgTGlzdAoKMS4gRmlyc3QgaXRlbQoyLiBTZWNvbmQgaXRlbQozLiBUaGlyZCBpdGVtCgojIyMgVW5vcmRlcmVkIExpc3QKCi0gRmlyc3QgaXRlbQotIFNlY29uZCBpdGVtCi0gVGhpcmQgaXRlbQoKIyMjIENvZGUKCmBjb2RlYAoKIyMjIEhvcml6b250YWwgUnVsZQoKLS0tCgojIyMgTGluawoKW01hcmtkb3duIEd1aWRlXShodHRwczovL3d3dy5tYXJrZG93bmd1aWRlLm9yZykKCiMjIyBJbWFnZQoKIVthbHQgdGV4dF0oaHR0cHM6Ly93d3cubWFya2Rvd25ndWlkZS5vcmcvYXNzZXRzL2ltYWdlcy90dXgucG5nKQoKIyMgRXh0ZW5kZWQgU3ludGF4CgpUaGVzZSBlbGVtZW50cyBleHRlbmQgdGhlIGJhc2ljIHN5bnRheCBieSBhZGRpbmcgYWRkaXRpb25hbCBmZWF0dXJlcy4gTm90IGFsbCBNYXJrZG93biBhcHBsaWNhdGlvbnMgc3VwcG9ydCB0aGVzZSBlbGVtZW50cy4KCiMjIyBUYWJsZQoKfCBTeW50YXggfCBEZXNjcmlwdGlvbiB8CnwgLS0tLS0tLS0tLS0gfCAtLS0tLS0tLS0tLSB8CnwgSGVhZGVyIHwgVGl0bGUgfAp8IFBhcmFncmFwaCB8IFRleHQgfAoKIyMjIEZlbmNlZCBDb2RlIEJsb2NrCgpgYGAKewogICJmaXJzdE5hbWUiOiAiSm9obiIsCiAgImxhc3ROYW1lIjogIlNtaXRoIiwKICAiYWdlIjogMjUKfQpgYGAKCiMjIyBGb290bm90ZQoKSGVyZSdzIGEgc2VudGVuY2Ugd2l0aCBhIGZvb3Rub3RlLiBbXjFdCgpbXjFdOiBUaGlzIGlzIHRoZSBmb290bm90ZS4KCiMjIyBIZWFkaW5nIElECgojIyMgTXkgR3JlYXQgSGVhZGluZyB7I2N1c3RvbS1pZH0KCiMjIyBEZWZpbml0aW9uIExpc3QKCnRlcm0KOiBkZWZpbml0aW9uCgojIyMgU3RyaWtldGhyb3VnaAoKfn5UaGUgd29ybGQgaXMgZmxhdC5+fgoKIyMjIFRhc2sgTGlzdAoKLSBbeF0gV3JpdGUgdGhlIHByZXNzIHJlbGVhc2UKLSBbIF0gVXBkYXRlIHRoZSB3ZWJzaXRlCi0gWyBdIENvbnRhY3QgdGhlIG1lZGlhCgojIyMgRW1vamkKClRoYXQgaXMgc28gZnVubnkhIDpqb3k6CgooU2VlIGFsc28gW0NvcHlpbmcgYW5kIFBhc3RpbmcgRW1vamldKGh0dHBzOi8vd3d3Lm1hcmtkb3duZ3VpZGUub3JnL2V4dGVuZGVkLXN5bnRheC8jY29weWluZy1hbmQtcGFzdGluZy1lbW9qaSkpCgojIyMgSGlnaGxpZ2h0CgpJIG5lZWQgdG8gaGlnaGxpZ2h0IHRoZXNlID09dmVyeSBpbXBvcnRhbnQgd29yZHM9PS4KCiMjIyBTdWJzY3JpcHQKCkh+Mn5PCgojIyMgU3VwZXJzY3JpcHQKClheMl4=';

    public static TITLE_VALUE: string = 'a'.repeat(
        LimitedString.MINIMUM_LENGTH
    );
    public static ID_VALUE: string = crypto.randomUUID();
    public static TAGS_VALUE: string = 'linux,arquitectura';

    public static Tags(value?: string): Tags {
        return new Tags(value !== undefined ? value : SharedMother.TAGS_VALUE);
    }

    public static Id(value?: string): Id {
        return new Id(value !== undefined ? value : SharedMother.ID_VALUE);
    }

    public static Title(value?: string): Title {
        return new Title(
            value !== undefined ? value : SharedMother.TITLE_VALUE
        );
    }

    public static TitleBase64(value?: string): TitleBase64 {
        return new TitleBase64(
            value !== undefined ? value : SharedMother.TITLE_BASE64_VALUE
        );
    }
    public static FileName(value?: string): FileName {
        return new FileName(
            value !== undefined ? value : (__filename as string)
        );
    }

    public static LimitedString(value?: string): LimitedString {
        return new LimitedString(
            value !== undefined ? value : SharedMother.TITLE_VALUE
        );
    }
    public static BadRequestException(): BadRequestException {
        return new BadRequestException();
    }
    public static NotFoundException(): NotFoundException {
        return new NotFoundException();
    }
    public static InternalException(): InternalException {
        return new InternalException();
    }
}
