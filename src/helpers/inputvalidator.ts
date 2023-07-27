import { ValidatorKey, ValidatorResult, validators } from "./validators";



const getValidatorId = (inputName: string, validatorKey: ValidatorKey) =>
  `${inputName}-${validatorKey}-validator`;

export class InputValidator {
  private inputElement: HTMLInputElement;
  private validatorList: { key: ValidatorKey; params?: number[] }[];
  private validatorResults: ValidatorResult[] = [];

  constructor(
    inputElement: string,
    validatorList: { key: ValidatorKey; params?: number[] }[]
  ) {
    this.inputElement = document.querySelector(inputElement);
    this.validatorList = validatorList;
  }

  private removeAllValidators() {
    this.validatorResults.forEach((validatorResult) => {
      const validator = document.getElementById(
        getValidatorId(this.inputElement.name, validatorResult.key)
      );
      if (validator) validator.remove();
    });
  }

  private validate() {
    const { value } = this.inputElement;
    this.validatorResults = this.validatorList.map((validatorConfig) => {
      const { key, params } = validatorConfig;
      const validator = validators[key];
      return validator({value, params, input: this.inputElement});
    });

    this.validatorResults.forEach((validatorResult) => {
      const validatorElement = document.getElementById(
        getValidatorId(this.inputElement.name, validatorResult.key)
      );

      if (!validatorResult.isValid && !validatorElement) {
        const validatorEl = document.createElement('small');
        validatorEl.classList.add('has-text-danger');
        validatorEl.id = getValidatorId(
          this.inputElement.name,
          validatorResult.key
        );
        validatorEl.innerHTML = `- ${validatorResult.error}<br />`;
        this.inputElement.after(validatorEl);
      }
    });

    const isValidGlobal = this.validatorResults.every(
      (result) => result.isValid
    );
    if (isValidGlobal) {
      this.removeAllValidators();
    }

    return isValidGlobal;
  }

  checkValidity(): boolean {
    return this.validate();
  }
}

export function CheckFormValidity(validators: InputValidator[]) {
  return validators.every((validator) => validator.checkValidity());
}
