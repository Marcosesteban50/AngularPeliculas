import { Component, inject, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-editar-cine',
  standalone: true,
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {

  @Input({transform: numberAttribute})
id!: number;

router = inject(Router);


cine: CineDTO = {id:1,nombre:'Acropolis'}

guardarCambios(cine: CineCreacionDTO){
  console.log('editar cine',cine);
  this.router.navigate(['/cines']);


}
}
