```jsx
// Prop drilling
// -> Component composition
// -> Context
import React, { useState, createContext, useContext } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Header />
      {user ? (
        <Dashboard user={user} />
      ) : (
        <Login handleLogin={() => setUser({ name: 'Ivan' })} />
      )}
      <Footer />
    </>
  );
}

function Header() {
  return (
    <header>
      <h1>Header</h1>
    </header>
  );
}

function Login({ handleLogin }) {
  return (
    <>
      <h1>Login</h1>
      <p>Para ingresar. Necesitas iniciar sesion</p>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

function Dashboard({ user }) {
  return (
    <div>
      <h2>Dashboard</h2>
      <DashboardNav />
      <DashboardContent user={user} />
    </div>
  );
}

function DashboardNav() {
  return <h3>DashboardNav</h3>;
}

function DashboardContent({ user }) {
  return (
    <div>
      <h3>Dashboard</h3>
      <WelcomeMessage user={user} />
    </div>
  );
}

function WelcomeMessage({ user }) {
  return (
    <div>
      <h3>Bienvenido {user.name}!!!!</h3>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>Footer</p>
    </footer>
  );
}

export default App;
```jsx
