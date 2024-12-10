import { CurrencyPipe, DatePipe, LowerCasePipe, NgFor, NgIf, NgOptimizedImage, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from './peliculas/listado-peliculas/listado-peliculas.component';
import { MenuComponent } from "./compartidos/componentes/menu/menu.component";
import { BotonesComponent } from "./compartidos/componentes/botones/botones.component";
import { RatingComponent } from "./compartidos/componentes/rating/rating.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ListadoPeliculasComponent, MenuComponent, BotonesComponent, RatingComponent,RouterOutlet],
  //IMPORTACIONES DE PRUEBA PARA LA CLASE DEL APP.COMPONENT.TS
  //DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe,
  // NgFor,NgOptimizedImage,NgIf
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent  {
 
  //implements OnInit  <-- Aqui arriba va esto pero lo quite para el ejemplo del maestro
  //va al lado de app component


  //------------------VARIABLES--------------------------


  peliculasEnCines!: any[];
  peliculasProximosEstrenos!: any[];

  EnCines = 'EnCines';
  ProximosEstrenos = 'ProximosEstrenos';


  procesarVoto(vote : number){
    alert(`Calificacion otorgada: ${vote}`)
  }














  //   ngOnInit(): void {


  // setTimeout(() => {
  //   this.peliculas = 

  //   [

  //     {
  //       titulo : 'Spider-man',
  //       fechaLanzamiento : new Date(),
  //       precio : 1400.99,
  //       poster: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
  //     },

  //     {
  //       titulo : 'Moana',
  //       fechaLanzamiento : new Date("2024-05-03"),
  //       precio : 1200.99,
  //       poster:'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/220px-Moana_Teaser_Poster.jpg'
  //     },

  //     {
  //       titulo : 'Inside Out 2',
  //       fechaLanzamiento : new Date(),
  //       precio : 2500.99,
  //       poster:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg'
  //     },
  //     {
  //       titulo : 'Spider-man',
  //       fechaLanzamiento : new Date(),
  //       precio : 1400.99,
  //       poster: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
  //     },

  //     {
  //       titulo : 'Moana',
  //       fechaLanzamiento : new Date("2024-05-03"),
  //       precio : 1200.99,
  //       poster:'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/220px-Moana_Teaser_Poster.jpg'
  //     },

  //     {
  //       titulo : 'Inside Out 2',
  //       fechaLanzamiento : new Date(),
  //       precio : 2500.99,
  //       poster:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg'
  //     },

  //       ];


  // }, 2000);

  //   }
  //   title = 'angular-peliculas';
  //   nombre = 'marcos';
  //   apellido = 'feliz';
  //   edad = 99;



  //   peliculas! : any[]





  //       duplicarNumero(x: number) : number{
  //         return x * 2;
  //       }

}



//Ejemplo de arreglo de peliculas harcodeado


//   peliculas = [

// {
//   titulo : 'Spider-man',
//   fechaLanzamiento : new Date(),
//   precio : 1400.99,
//   poster: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
// },

// {
//   titulo : 'Moana',
//   fechaLanzamiento : new Date("2024-05-03"),
//   precio : 1200.99,
//   poster:'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/220px-Moana_Teaser_Poster.jpg'
// },

// {
//   titulo : 'Inside Out 2',
//   fechaLanzamiento : new Date(),
//   precio : 2500.99,
//   poster:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg'
// },
// {
//   titulo : 'Spider-man',
//   fechaLanzamiento : new Date(),
//   precio : 1400.99,
//   poster: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
// },

// {
//   titulo : 'Moana',
//   fechaLanzamiento : new Date("2024-05-03"),
//   precio : 1200.99,
//   poster:'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/220px-Moana_Teaser_Poster.jpg'
// },

// {
//   titulo : 'Inside Out 2',
//   fechaLanzamiento : new Date(),
//   precio : 2500.99,
//   poster:'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg'
// },

//   ];


// pelicula = {
//   titulo : 'Spider-man',
//   fechaLanzamiento : new Date(),
//   precio : 1400.99
// };


