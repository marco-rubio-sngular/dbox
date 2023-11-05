import BadRequestException from '../../../../Shared/Domain/Exception/BadRequestException';

class Email {
    constructor(public readonly value: string) {
        this.validateOrThrowException();
    }

    private validateOrThrowException(): void {
        const regexp = new RegExp(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
        const isValid = regexp.test(this.value);
        if (isValid) return;

        throw new BadRequestException('El email no es válido, tolai');
    }
}

export default Email;
