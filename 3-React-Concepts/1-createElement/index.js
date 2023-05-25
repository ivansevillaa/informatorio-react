const app = document.getElementById('app')

function Artist(props) {
  return React.createElement('div', { className: 'container' }, [
    React.createElement('h2', null, props.name),
    React.createElement('p', { className: 'song' }, props.song),
  ])
}

function App() {
  return React.createElement(
    'main',
    null,
    [
      React.createElement('h1', { className: 'title' }, 'Music App'),
      React.createElement(Artist, { name: 'Justin Bieber', song: 'Sorry' }),
      React.createElement(Artist, { name: 'Dua Lipa', song: 'Levitating' }),
      React.createElement(Artist, { name: 'Dillom', song: 'Alguna' }),
    ]
  )
}

const root = ReactDOM.createRoot(app)

// app.appendChild(title)
root.render(React.createElement(App))
