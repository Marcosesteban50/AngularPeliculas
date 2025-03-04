import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { FormularioActoresComponent } from "../formulario-actores/formulario-actores.component";
import { ActorCreacionDTO } from '../actores';

@Component({
  selector: 'app-crear-actor',
  standalone: true,
  imports: [MatButtonModule, FormularioActoresComponent],
  templateUrl: './crear-actor.component.html',
  styleUrl: './crear-actor.component.css'
})
export class CrearActorComponent {

router = inject(Router);

guardarCambios(actor:ActorCreacionDTO){

  console.log('creando el actor',actor);
  this.router.navigate(['/actores']);




}





}
