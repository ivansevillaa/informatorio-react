function Artist(props) {
  // return React.createElement('div', { className: 'container' }, [
  //   React.createElement('h2', null, props.name),
  //   React.createElement('p', { className: 'song' }, props.song),
  // ])
  return (
    <div className="container">
      <h2>{props.name}</h2>
      <p className="song">{props.song}</p>
    </div>
  )
}

function App() {
  // return React.createElement(
  //   'main',
  //   null,
  //   [
  //     React.createElement('h1', { className: 'title' }, 'Music App'),
  //     React.createElement(Artist, { name: 'Justin Bieber', song: 'Sorry' }),
  //     React.createElement(Artist, { name: 'Dua Lipa', song: 'Levitating' }),
  //     React.createElement(Artist, { name: 'Dillom', song: 'Alguna' }),
  //   ]
  // )
  return (
    <main>
      <h1 className="title">Music App</h1>
      <Artist name="Justin Bieber" song="Sorry" />
      <Artist name="Dua Lipa" song="Sorry" />
      <Artist name="Dillom" song="Sorry" />
    </main>
  )
}

const app = document.getElementById('app')
const root = ReactDOM.createRoot(app)
root.render(React.createElement(App))
