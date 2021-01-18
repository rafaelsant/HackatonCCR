import { Directive, Input } from '@angular/core';
import {AbstractControl, NG_VALIDATORS, ValidationErrors, Validator} from '@angular/forms';

@Directive({
    selector:'[appConfirmEqualsValidator]',
    providers:[{
        provide: NG_VALIDATORS,
        useExisting: ConfirmEqualsValidatorDirective,
        multi: true
    }]
})
export class ConfirmEqualsValidatorDirective implements Validator{
    @Input() appConfirmEqualValidator:string;
    validate(control: AbstractControl): any | null {
        const controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if(controlToCompare && controlToCompare.value !== control.value){
            return{ 'notEqual':true};
        }
        return null;
    }
}