import { useState } from 'react';
import Hero from './components/Hero';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {!isAuthenticated ? (
        <>
          <Hero onLoginClick={() => setShowLogin(true)} />
          {showLogin && (
            <Login
              onClose={() => setShowLogin(false)}
              onLogin={() => {
                setIsAuthenticated(true);
                setShowLogin(false);
              }}
            />
          )}
        </>
      ) : (
        <Dashboard onLogout={() => setIsAuthenticated(false)} />
      )}
    </div>
  );
}

export default App;
