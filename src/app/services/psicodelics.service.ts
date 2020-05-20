import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PsicodelicsService {
    private psicodelics:Psicodelic[] = [
        {
          nombre: "DMT",
          bio: "La sustancia que está detrás de las alucinaciones es el DMT (N,N-dimetiltriptamina). Conocido popularmente como “molécula de Dios”, se trata uno de los compuestos psicoactivos más potentes que existen. Es capaz de producir experiencias que, en intensidad, superan las asociadas con las dosis estándar de la mayoría de los psicodélicos administrados por vía oral y, de hecho, de la mayoría de las otras categorías de drogas..",
          img: "./assets/img/dmt.png",
          aparicion: "1941-11-01",
          casa:"Natural"
        },
        {
          nombre: "Psilocibina",
          bio: "La psilocibina es un alcaloide profármaco del clásico compuesto alucinógeno: psilocina, responsable del efecto psicoactivo de ciertos hongos comestibles. Ambas sustancias son miembros de las clases de drogas del indol y la triptamina.",
          img: "./assets/img/psilocibina.png",
          aparicion: "1939-05-01",
          casa:"Sintetico"
        },
        {
          nombre: "Mescalina",
          bio: "Sustancia alucinógena obtenida a partir de las flores de algunas especies de cactus originarios de México, cuyo consumo provoca cambios en la percepción, en especial visión de colores irreales, y crea dependencia psíquica..",
          img: "./assets/img/mescalina.png",
          aparicion: "1964-01-01",
          casa: "Natural"
        },
        {
          nombre: "dietilamida de ácido lisérgico,​ LSD",
          bio: "La dietilamida de ácido lisérgico, ​ LSD-25 o simplemente LSD, también llamada lisérgida y comúnmente conocida como ácido, es una sustancia psicodélica semisintética que se obtiene de la ergolina y de la familia de las triptaminas y que produce efectos psicológicos..",
          img: "./assets/img/lsd.png",
          aparicion: "1962-05-01",
          casa:"Sintetico"
        },
        {
          nombre: "Salvia divinorum",
          bio: "Salvia divinorum o salvia de los adivinos, ​ es un planta herbácea perenne, de la familia de las lamiáceas, que es originaria de México donde se encuentra en Oaxaca en San José Tenango",
          img: "assets/img/saviadivi.png",
          aparicion: "1940-06-01",
          casa: "Natural"
        },
        {
          nombre: "Peyote",
          bio: "Lo primero que hay que entender es que el peyote no es una droga en el sentido en que el LSD o el MDMA lo son: no fue fabricada en un laboratorio con el objetivo de producir efectos alucinógenos en el organismo; en el mismo sentido, no se ha demostrado que su consumo provoque adicción ni daños en el organismo a largo plazo. Por el contrario, los huicholes (una de las pocas naciones indígenas mexicanas con autorización para consumirlo y transportarlo) lo equiparan a un dios a quien llaman Hikuri, el venado azul, de cuya carne extraen medicina para el cuerpo y el espíritu.",
          img: "./assets/img/mescalina.png",
          aparicion: "1962-08-01",
          casa: "Sintetico"
        },
        {
          nombre: "Ayahuasca",
          bio: "El DMT, la sustancia psicodélica o alucinógena que se encuentra en el té que se prepara, está en la naturaleza (además de en plantas, también está en mamíferos) y es un neuroreceptor que está relacionado con la fase REM del sueño, momento en el que se producen los sueños. Aunque en este caso, al ingerir la bebida la experiencia suele producirse despierto.",
          img: "./assets/img/ayahuasca.jpg",
          aparicion: "1974-11-01",
          casa: "Natural"
        }
      ]
    
      constructor() { }

      getPsicodelics (){
          return this.psicodelics;
      }

      getPsicodelic(id:number){
        return this.psicodelics[id];
      }
    
}


export interface Psicodelic{
    nombre:string,
    bio:string,
    img:string,
    aparicion:string,
    casa:string
  }
  