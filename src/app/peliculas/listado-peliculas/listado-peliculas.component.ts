import { CurrencyPipe, DatePipe } from '@angular/common';
import { Component, Input, input, OnInit } from '@angular/core';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-listado-peliculas',
  standalone: true,
  imports: [DatePipe, CurrencyPipe, ListadoGenericoComponent, MatButtonModule,MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent {





  @Input({ required: true })

  peliculas!: any[]


  @Input({ required: true })

  tipo!: string

}



//   //--------Funcion de agregar nueva pelicula-----
//   // agregarPelicula() {
//   //   const nuevaPelicula = {
//   //   titulo: 'Nueva Pelicula',
//   //   fechaLanzamiento: new Date('2024-10-15'),
//   //   precio: 500
//   // };

//   //Haciendo el push de la nueva pelicula
//   this.peliculas.push(nuevaPelicula);


//   //Alertas para saber donde se hiso el push
//     if (this.tipo === 'EnCines') {
//       alert('Agregaste una pelicula en Cines');
//     } else if (this.tipo === 'ProximosEstrenos') {
//       alert('Agregaste una pelicula en Estrenos');

//     }


//   }

//   //--------Funcion de remover una pelicula-----
// removerPelicula(pelicula : any){
//   const indice  = this.peliculas.findIndex((peliculaActual : any) => peliculaActual.titulo === pelicula.titulo);
//   //Eliminar 1 elemento del arreglo segun su indice
//   this.peliculas.splice(indice,1);


//   if (this.tipo === 'EnCines') {
//     alert('Eliminaste una pelicula en Cines');
//   } else if (this.tipo === 'ProximosEstrenos') {
//     alert('Eliminaste una pelicula en Estrenos');

//   }
// }


//   // duplicarNumero(x: number) : number{
//   //   return x * 2;
//   // }
// }
