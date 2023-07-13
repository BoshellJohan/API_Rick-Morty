/*************************************************************************/
function fetchCharacterData(page)                                               //Funcion para obtener los datos de los personajes
{
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)       //Se hace un fetch a la API de Rick and Morty
    .then(response => response.json())                                          //Se convierte la respuesta a JSON          
    .then(data => data.results);                                                //Se obtienen los resultados de la respuesta
}


/*************************************************************************/
function createCharacterRow(character)                                          //Funcion para crear una fila de la tabla                 
{
  const row = document.createElement('tr');                                     //Se crea un elemento tr

  const nameCell = document.createElement('td');                                //Se crea un elemento td              
  nameCell.textContent = character.name;                                        //Se le asigna el nombre del personaje al elemento td
  row.appendChild(nameCell);                                                    //Se agrega el elemento td a la fila

  const characterName = character.name.split(" ")[0];                           //Se obtiene el nombre del personaje
  const characterSecondName = character.name.split(" ")[1];                     //Se obtiene el apellido del personaje
  
  if (
    characterName === "Rick" || characterName === "Morty" || characterName === "Summer" ||
    characterName === "Beth" || characterName === "Jerry" || characterSecondName === 'Rick' ||
    characterSecondName === 'Morty' || characterSecondName === 'Summer' || characterSecondName === 'Beth' ||
    characterSecondName === 'Jerry'
  ) {                                                                           //Se verifica si el nombre del personaje es Rick o Morty
    const characteristicsCell = document.createElement('td');                   //Se crea un elemento td      
    characteristicsCell.textContent = `${character.status}, ${character.gender}, ${character.species}, ${character.origin.name}`; //Se le asigna las caracteristicas del personaje al elemento td
    row.appendChild(characteristicsCell);                                       //Se agrega el elemento td a la fila

    const image1Cell = document.createElement('td');                            //Se crea un elemento td                  
    const image1 = document.createElement('img');                               //Se crea un elemento img              
    image1.src = character.image;                                               //Se le asigna la imagen del personaje al elemento img
    image1.alt = character.name;                                                //Se le asigna el nombre del personaje al elemento img
    image1Cell.appendChild(image1);                                             //Se agrega el elemento img al elemento td
    row.appendChild(image1Cell);                                                //Se agrega el elemento td a la fila


                                                                                //Verificaciones para añadir la segunda imágen
    if ((characterName === 'Rick' || characterSecondName === 'Rick') && character.name !== 'Morty Rick')
    {                                                                           //Se verifica si el nombre del personaje es Rick
      const image2Cell = document.createElement('td');                          //Se crea un elemento td
      const image2 = document.createElement('img');                             //Se crea un elemento img          
      Aleatoria('Rick', image1.src).then(url => {                               //Se llama a la funcion Aleatoria para obtener una imagen aleatoria de Rick
        image2.src = url;                                                       //Se le asigna la imagen aleatoria de Rick al elemento img
      });                                                                       //Se agrega el elemento img al elemento td
      image2.alt = character.name;                                              //Se le asigna el nombre del personaje al elemento img  
      image2Cell.appendChild(image2);                                           //Se agrega el elemento img al elemento td
      row.appendChild(image2Cell);                                              //Se agrega el elemento td a la fila
    }


    if (characterName === 'Morty' || characterSecondName === 'Morty')           //Se verifica si el nombre del personaje es Morty
    {
      const image2Cell = document.createElement('td');                          //Se crea un elemento td              
      const image2 = document.createElement('img');                             //Se crea un elemento img
      Aleatoria('Morty', image1.src).then(url => {                              //Se llama a la funcion Aleatoria para obtener una imagen aleatoria de Morty
        image2.src = url;                                                       //Se le asigna la imagen aleatoria de Morty al elemento img
      });
      image2.alt = character.name;                                              //Se le asigna el nombre del personaje al elemento img
      image2Cell.appendChild(image2);                                           //Se agrega el elemento img al elemento td      
      row.appendChild(image2Cell);                                              //Se agrega el elemento td a la fila    
    }

    if (characterName === 'Beth' || characterSecondName === 'Beth') 
    {
      const image2Cell = document.createElement('td');
      const image2 = document.createElement('img');
      Aleatoria('Beth', image1.src).then(url => {
        image2.src = url;
      });
      image2.alt = character.name;
      image2Cell.appendChild(image2);
      row.appendChild(image2Cell);
    }

    if (characterName === 'Jerry' || characterSecondName === 'Jerry') 
    {
      const image2Cell = document.createElement('td');
      const image2 = document.createElement('img');
      Aleatoria('Jerry', image1.src).then(url => {
        image2.src = url;
      });
      image2.alt = character.name;
      image2Cell.appendChild(image2);
      row.appendChild(image2Cell);
    }

    if (characterName === 'Summer' || characterSecondName === 'Summer') 
    {
      const image2Cell = document.createElement('td');
      const image2 = document.createElement('img');
      Aleatoria('Summer', image1.src).then(url => {
        image2.src = url;
      });
      image2.alt = character.name;
      image2Cell.appendChild(image2);
      row.appendChild(image2Cell);
    }
    return row;                                                                 //Se retorna la fila                             
  }
  return null;                                                                  //Se retorna null               
}

/*************************************************************************/
async function Aleatoria(Personaje, image)                                      //Funcion para obtener una imagen aleatoria de un personaje
{
  const ArregloDeImagenes = [];                                                 //Se crea un arreglo para almacenar las imagenes de los personajes
  for (let i = 1; i < 42; i++) {                                                //Se recorre las paginas de la API
    const characterData = await fetchCharacterData(i);                          //Se obtiene los datos de los personajes de la pagina i     
    characterData.forEach(character => {                                        //Se recorre los personajes de la pagina i       
      const characterName = character.name.split(" ")[0];                       //Se obtiene el nombre del personaje
      const characterSecondName = character.name.split(" ")[1];                 //Se obtiene el apellido del personaje
      if (character.image !== image){                                           //Se verifica que la imagen del personaje sea diferente a la imagen del personaje que se esta evaluando
      if (characterName === Personaje || characterSecondName === Personaje) {   //Se verifica si el nombre del personaje es igual al personaje que se esta evaluando
        ArregloDeImagenes.push(character.image);                                //Se agrega la imagen del personaje al arreglo de imagenes
      }                                                                         //Se verifica si el apellido del personaje es igual al personaje que se esta evaluando     
    }
    });
  }
  const randomIndex = Math.floor(Math.random() * ArregloDeImagenes.length);     //Se obtiene un numero aleatorio entre 0 y el tamaÃ±o del arreglo de imagenes
  const randomElement = ArregloDeImagenes[randomIndex];                         //Se obtiene la imagen del personaje en la posicion randomIndex
  return randomElement;                                                         //Se retorna la imagen del personaje en la posicion randomIndex
}

/*************************************************************************/

const tableBody = document.getElementById('table-body');                        //Se obtiene el elemento table-body            

async function populateTable() {                                                //Funcion para llenar la tabla                  
  let rowCount = 0;                                                             // Contador de filas agregadas
  let paginaAlAzar = Math.floor(Math.random() * 41)                             //Se obtiene un numero aleatorio entre 0 y 41

  for (let pagina = paginaAlAzar; pagina <= 42; pagina++) {                      //Se recorre las paginas de la API
    const characterData = await fetchCharacterData(pagina);                     //Se obtiene los datos de los personajes de la pagina i

    for (const character of characterData) {                                    //Se recorre los personajes de la pagina i                
      const row = createCharacterRow(character);                                //Se crea una fila con los datos del personaje
      if (row) {                                                                //Se verifica si la fila no es null                   
        tableBody.appendChild(row);                                             //Se agrega la fila a la tabla             
        rowCount++;                                                             // Incrementar el contador de filas agregadas 

        if (rowCount === 10) {                                                  //Se verifica si se han agregado 10 filas
          return                                                                // Detener el ciclo una vez que se hayan agregado 10 filas
        }
      }
    }
  }
}

populateTable();