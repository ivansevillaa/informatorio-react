
```jsx
import React, { useState, createContext, useContext } from 'react';

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <Header />
      {user ? (
        <Dashboard>
          <DashboardNav />
          <DashboardContent>
            <WelcomeMessage user={user} />
          </DashboardContent>
        </Dashboard>
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
      <h2>Login</h2>
      <p>Para ingresar. Necesitas iniciar sesion</p>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}

function Dashboard({ children }) {
  return (
    <div>
      <h2>Dashboard</h2>
      {children}
    </div>
  );
}

function DashboardNav() {
  return <h3>DashboardNav</h3>;
}

function DashboardContent({ children }) {
  return (
    <div>
      <h3>Dashboard</h3>
      {children}
    </div>
  );
}

function WelcomeMessage({ user }) {
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
