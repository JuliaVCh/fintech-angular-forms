import { AbstractControl } from '@angular/forms';

export class CustomValidators {
  static checkPassword(field: AbstractControl) {
    if (!field.value) {
      return null;
    }

    const firstChar = field.value[0].toLowerCase();

    return firstChar !== 'z'
      ? null
      : {password: 'Пароль не должен начинаться с буквы Z'};
  }
}
