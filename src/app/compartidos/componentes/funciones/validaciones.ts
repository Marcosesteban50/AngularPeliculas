import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";






export function fechaNoValida(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const fechaEscogidaPorUsuario = new Date(control.value);
        const hoy = new Date();


        //1
        if (fechaEscogidaPorUsuario > hoy) {
            return {
                futuro: {
                    mensaje: 'La fecha no puede ser del futuro'
                }
            }
        }

       


        return null;

    }



}






//VALIDACION PARA PRIMERA LETRA MAYUSCULA 

//Fn = function

export function primeraLetraMayuscula(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {


        const valor = <string>control.value;
        const primeraLetra = valor[0];


        if (!valor) {
            return null;
        }

        if (valor.length === 0) {
            return null;
        }

        //a !== A
        if (primeraLetra !== primeraLetra.toUpperCase()) {
            return {
                primeraLetraMayuscula: {
                    mensaje: 'La primera letra debe ser mayuscula'
                }
            }

        }


        return null;
    }
}