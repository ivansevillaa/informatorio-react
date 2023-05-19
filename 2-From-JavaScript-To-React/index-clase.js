const API_URL = 'https://rickandmortyapi.com/api/character';

const app = document.getElementById('app')

const request = fetch(API_URL);

function deleteCharacter(nodoHijo) {
  console.log(nodoHijo)
  nodoHijo.parentNode.removeChild(nodoHijo)
}

request
  .then((res) => res.json())
  .then((characters) => {
    characters.results.forEach((character) => {
      const container = document.createElement('div')
      container.classList.add('container')
      container.addEventListener('click', () => {
        container.classList.remove('container')
        console.log('soy el container')
      })

      const name = document.createElement('h2')
      name.textContent = character.name
      name.classList.add('title')

      const image = document.createElement('img')
      image.src = character.image
      image.addEventListener('click', (event) => {
        event.stopPropagation()
        console.log('soy la foto y quiero hacer algo aunque todavia no se me ocurre que')
      })

      const specie = document.createElement('p')
      specie.textContent = `Especie: ${character.species}`

      const button = document.createElement('button')
      button.textContent = 'Eliminar personaje'
      button.addEventListener('click', () => deleteCharacter(container))

      app.appendChild(container)
      container.appendChild(name)
      container.appendChild(specie)
      container.appendChild(image)
      container.appendChild(button)
      const tituloss = document.createElement('h2')
      tituloss.textContent = 'Titulosss'
      container.insertAdjacentElement('beforeend', tituloss)
    })
  })
