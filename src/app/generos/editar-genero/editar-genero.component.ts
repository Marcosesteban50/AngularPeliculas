import { Component, Input, numberAttribute } from '@angular/core';
import { transform } from 'typescript';
import { GeneroCreacionDTO, GeneroDTO } from '../genero';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';

@Component({
  selector: 'app-editar-genero',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGeneroComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css'
})
export class EditarGeneroComponent {



  @Input({transform: numberAttribute})
id!: number


//Inventamos un genero en ausencia de genero de base de datos
genero:GeneroDTO = {id:1,nombre:'Accion'}


guardarCambios(genero : GeneroCreacionDTO){
  console.log('editando el genero',genero);
}

}
