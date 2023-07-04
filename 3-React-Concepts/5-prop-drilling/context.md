```jsx
// Prop drilling
// -> Component composition
// -> Context
import React, { useState, createContext, useContext } from 'react';

const UserContext = createContext(null);

function App() {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={user}>
      <Header />
      {user ? (
        <Dashboard />
      ) : (
        <Login handleLogin={() => setUser({ name: 'Ivan' })} />
      )}
      <Footer />
    </UserContext.Provider>
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
      <h2>Login</h2>
      <p>Para ingresar. Necesitas iniciar sesion</p>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <DashboardNav />
      <DashboardContent />
    </div>
  );
}

function DashboardNav() {
  return <h3>DashboardNav</h3>;
}

function DashboardContent() {
  return (
    <div>
      <h3>Dashboard</h3>
      <WelcomeMessage />
    </div>
  );
}

function WelcomeMessage() {
  const user = useContext(UserContext);
  return (
    <div>
      <p>Bienvenido {user.name}!!!!</p>
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
```
