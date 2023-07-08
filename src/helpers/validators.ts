import { EMAIL_REGEX, URL_REGEX } from '../constants/regex'

export const emptyValidator = (value?: string) => ({ key: 'empty', isValid: value !== '', error: 'El campo no puede estar vacio' })
export const urlValidator = (value?: string) => ({ key: 'url', isValid: value && value.match(URL_REGEX), error: 'El valor no parece ser una url valida' })
export const emailValidator = (value?: string) => ({ key: 'email', isValid: value && value.match(EMAIL_REGEX), error: 'El valor no parece ser un email valido' })


const getValidator = (key: string) => {
    switch (key) {
        case 'empty':
            return emptyValidator;
        case 'url':
            return urlValidator;
        case 'email':
            return emailValidator;
    }
}

export type Validator = 'empty' | 'url' | 'email';

type ValidatorResult = { key: string; isValid: boolean; error: string; }

const getValidatorId = (inputName: string, validatorKey: string) => inputName.concat('-', validatorKey, '-validator');

function removeAllValidators(inputName: string, validatorList: ValidatorResult[]) {
    validatorList.forEach(validatorResult => {
        const validator = document.getElementById(getValidatorId(inputName, validatorResult.key));
        if(validator) validator.remove();
    })
}

export function createValidator(inputElement: HTMLInputElement, validatorList: Validator[]) {
    const inputName = inputElement.name;
    const validatorResults = []

    function validate(){
        const { value } = inputElement;
        validatorList.forEach(val => {
            const validator = getValidator(val);
            const validatorResult = validator(value);
            validatorResults.push(validatorResult);
            const validatorElement = document.getElementById(getValidatorId(inputName, validatorResult.key));


            if (!validatorResult.isValid && !validatorElement) {
                const validatorEl = document.createElement('small');
                validatorEl.classList.add('has-text-danger');
                validatorEl.id = getValidatorId(inputName, validatorResult.key);
                validatorEl.innerHTML = `- ${validatorResult.error}<br />`;
                inputElement.after(validatorEl);
            }
        })

        const isValidGlobal = validatorResults.every(result => result.isValid)
        if (isValidGlobal) {
            removeAllValidators(inputName, validatorResults);
        }

        return isValidGlobal;
    }
    
    return validate()
}