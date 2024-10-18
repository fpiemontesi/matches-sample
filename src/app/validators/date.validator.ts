import { FormControl, ValidationErrors } from "@angular/forms";

export class DateValidator {
    static greaterThanToday(control: FormControl): ValidationErrors | null {
        const today = new Date();
        const controlDate = new Date(control.value);

        if (controlDate > today) {
            return {
                greaterThanToday: true
            };
        }

        return null;
    }
}