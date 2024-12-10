//Promise es como un valor que sera obtenido despues
//Como programacion asincrona
export function toBase64(file: File): Promise<string>{

  //resolve cuando es exitoso
  //reject cuando es un error
    return new Promise((resolve,reject) => {

        //Leyendo 
        const lector = new FileReader();

             lector.readAsDataURL(file);

             //Onload es cuando termina de leer el archivo
             lector.onload = () => resolve(lector.result as string);
             
             //en caso de error
              lector.onerror = (error) => reject(error);

    });

}