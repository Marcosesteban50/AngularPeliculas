import { Component, OnInit } from '@angular/core';
import { BotonesComponent } from "../compartidos/componentes/botones/botones.component";
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [BotonesComponent, ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent  implements OnInit{

 
  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasEnCines =

        [

          {
            titulo: 'Spider-man',
            fechaLanzamiento: new Date(),
            precio: 1400.99,
            poster: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
          },
          {
            titulo: 'Moana',
            fechaLanzamiento: new Date("2024-05-03"),
            precio: 1200.99,
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/220px-Moana_Teaser_Poster.jpg'
          },

          {
            titulo: 'Inside Out 2',
            fechaLanzamiento: new Date(),
            precio: 2500.99,
            poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg'
          }];


          
      this.peliculasProximosEstrenos = [{


        titulo: 'Inside Out 2',
        fechaLanzamiento: new Date(),
        precio: 2500.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg'
      },
      {
        titulo: 'Spider-man',
        fechaLanzamiento: new Date(),
        precio: 1400.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'
      },

      {
        titulo: 'Moana',
        fechaLanzamiento: new Date("2024-05-03"),
        precio: 1200.99,
        poster: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/26/Moana_Teaser_Poster.jpg/220px-Moana_Teaser_Poster.jpg'
      }];




    }, 200);
  }


  peliculasEnCines!: any[];
  peliculasProximosEstrenos!: any[];

  EnCines = 'EnCines';
  ProximosEstrenos = 'ProximosEstrenos';

}
