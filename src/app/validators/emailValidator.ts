import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';

@Injectable()
export class EmailValidator {

    debouncer: any;

    constructor(public authProvider: AuthService) {

    }

    checkEmail(control: FormControl): any {
        clearTimeout(this.debouncer);
        return new Promise(resolve => {
            this.debouncer = setTimeout(() => {
                this.authProvider.validateEmail(control.value).subscribe((res) => {
                    console.log('inside EmailValidator', res);
                    if (!res) {
                        resolve(null);
                    }
                    resolve({ emailExists: true });
                }, (err) => {
                    console.log(err);
                });

            }, 1000);
        });
    }

}
