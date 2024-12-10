import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { toBase64 } from '../funciones/toBase64';

@Component({
  selector: 'app-input-img',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './input-img.component.html',
  styleUrl: './input-img.component.css'
})
export class InputImgComponent {

@Input({required:true})
titulo!: string;

@Input()
urlImagenActual?: string;


@Output()
archivoSeleccionado = new EventEmitter<File>();


//guardando representacion en base64 de la imagen

imagenBase64? : string;



//evento de cambio
cambio(event : Event){
  
  const input = event.target as HTMLInputElement;

  //Si fue selecionado un archivo
  if(input.files && input.files.length > 0){

    //Selecionando primer archivo
    const file: File = input.files[0];

    //Funcion que creamos 
    toBase64(file).then((valor: string) => this.imagenBase64 = valor)
    .catch(error => console.log(error));

    this.archivoSeleccionado.emit(file);
    this.urlImagenActual = undefined;
  }
}

}
