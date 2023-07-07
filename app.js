//Código para explicar como conseguimos la segunda imágen de manera aleatoria.

async function Aleatoria(Personaje) {
    const ArregloDeImagenes = [];
    for (let i = 1; i < 42; i++) {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${i}`);
      const data = await response.json();
      data.results.forEach(character => {
        const characterName = character.name.split(" ")[0];
        if (characterName === Personaje) {
          ArregloDeImagenes.push(character.image);
        }
      });
    }
    console.log(ArregloDeImagenes[Math.floor(Math.random() * ArregloDeImagenes.length)]);

    return ArregloDeImagenes;
  }
  
  var Prueba = Aleatoria('Rick');
  