import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { primeraLetraMayuscula } from '../../compartidos/componentes/funciones/validaciones';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { GeneroCreacionDTO, GeneroDTO } from '../genero';

@Component({
  selector: 'app-formulario-genero',
  standalone: true,
  imports: [MatButtonModule, RouterLink, MatFormFieldModule, ReactiveFormsModule, MatInputModule],

  templateUrl: './formulario-genero.component.html',
  styleUrl: './formulario-genero.component.css'
})
export class FormularioGeneroComponent implements OnInit{
  ngOnInit(): void {
   if(this.modelo !== undefined){

    //Patchvalue para pasarle valores a un formulario
    this.form.patchValue(this.modelo);
   }
  }



@Input()
modelo? : GeneroDTO;



  //Enviando dato al componente padre
  @Output()
  posteoFormulario = new EventEmitter<GeneroCreacionDTO>();





  private formbuilder = inject(FormBuilder);


  form = this.formbuilder.group({
    nombre: ['', { validators: [Validators.required, primeraLetraMayuscula()] }]

  });


  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;


    if (nombre.hasError('required')) {
      return "El campo nombre es requerido";
    }


    if (nombre.hasError('primeraLetraMayuscula')) {
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return "";
  }




  guardarCambios() {

    if (!this.form.valid) {
      return;
    }

const genero = this.form.value as GeneroCreacionDTO;

this.posteoFormulario.emit(genero);


  }
}
