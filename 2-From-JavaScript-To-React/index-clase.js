const API_URL = 'https://rickandmortyapi.com/api/character';

const app = document.getElementById('root')

const request = fetch(API_URL);
request
  .then((res) => res.json())
  .then((characters) => {
    characters.results.forEach((character) => {
      const container = document.createElement('div')
      container.classList.add('container')

      const name = document.createElement('h2')
      name.textContent = character.name
      name.classList.add('title')

      const image = document.createElement('img')
      image.src = character.image

      const specie = document.createElement('p')
      specie.textContent = `Especie: ${character.species}`

      app.appendChild(container)
      container.appendChild(name)
      container.appendChild(specie)
      container.appendChild(image)
    })
  })
