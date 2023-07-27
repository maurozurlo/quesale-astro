import { EMAIL_REGEX, LOOSER_URL_REGEX } from '../constants/regex';

export type ValidatorKey = 'empty' | 'url' | 'email' | 'numberHigherThan' | 'oneOptionSelected';

export interface ValidatorResult {
    key: ValidatorKey;
    isValid: boolean;
    error: string;
}

function createValidatorResult(
    key: ValidatorKey,
    isValid: boolean,
    error: string
): ValidatorResult {
    return { key, isValid, error };
}

function emptyValidator({ value }): ValidatorResult {
    return createValidatorResult(
        'empty',
        value !== '',
        'El campo no puede estar vacio'
    );
}

function urlValidator({ value }): ValidatorResult {
    return createValidatorResult(
        'url',
        value !== undefined && LOOSER_URL_REGEX.test(value),
        'El valor no parece ser una url valida'
    );
}

function emailValidator({ value }): ValidatorResult {
    return createValidatorResult(
        'email',
        value !== undefined && EMAIL_REGEX.test(value),
        'El valor no parece ser un email valido'
    );
}

function numberHigherThan({ value, params }): ValidatorResult {
    if (!params || params.length === 0) {
        throw new Error('NumberHigherThan validator requires parameters');
    }
    return createValidatorResult(
        'numberHigherThan',
        params.every((param: number) => Number(value) >= param),
        'Por favor selecciona un numero valido'
    );
}

function oneOptionSelected({ input }) {
    const categories = Array.from(
        input.querySelectorAll('[type="checkbox"]')
    ) as HTMLInputElement[];
    categories.map(({ name, checked }) => ({ name, checked }));

    return createValidatorResult(
        'oneOptionSelected',
        categories.some(({ checked }) => checked),
        'Por favor selecciona una opcion'
    );
}

export const validators: {
    [key in ValidatorKey]: ({ value, params, input }) => ValidatorResult;
} = {
    empty: emptyValidator,
    url: urlValidator,
    email: emailValidator,
    numberHigherThan: numberHigherThan,
    oneOptionSelected: oneOptionSelected
};