// Leer nodos
// const app = document.getElementById('#app')
const app = document.querySelector('#app')

// Crear nodos
const container = document.createElement('div')
const titleElement = document.createElement('h1')
const titleText = document.createTextNode('Hello world!!')
titleElement.classList.add('title')
const paragraphElement = document.createElement('p')
paragraphElement.textContent = 'Estoy aprendiendo a manipular el DOM 😝'
const paragraphElement2 = document.createElement('p')
const paragraphText2 = document.createTextNode('Usando insertBefore')

// Agregar nodos
app.appendChild(container)
titleElement.appendChild(titleText)
container.appendChild(titleElement)
container.appendChild(paragraphElement)

paragraphElement2.appendChild(paragraphText2)
// container.appendChild(paragraphElement2)
container.insertBefore(paragraphElement2, paragraphElement)

// container.insertAdjacentElement('afterbegin', paragraphElement2)
// container.insertAdjacentElement('afterend', paragraphElement2)
// container.insertAdjacentElement('beforebegin', paragraphElement2)
// container.insertAdjacentElement('beforeend', paragraphElement2)

// Eliminar nodos
// container.removeChild(paragraphElement)
// container.replaceChild(paragraphElement2, paragraphElement)

// Eventos
const button = document.createElement('button')
function onButtonClick() {
  console.log('Me hiciste click')
  // titleElement.classList.remove('title')
  titleElement.classList.toggle('title')
}
button.textContent = 'Haceme click'
button.addEventListener('click', onButtonClick)
container.appendChild(button)

const p = document.createElement('p')
const buttonSumar = document.createElement('button')
p.textContent = 0
buttonSumar.textContent = '+'
container.appendChild(p)
container.appendChild(buttonSumar)
function onButtonSumarClick() {
  p.textContent = Number(p.textContent) + 1
}
buttonSumar.addEventListener('click', onButtonSumarClick)


const input = document.createElement('input')
function onInput(event) {
  console.log(event)
}
container.appendChild(input);
input.addEventListener('input', onInput)
