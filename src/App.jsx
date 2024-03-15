import { useEffect, useState } from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Landing from './pages/Landing'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Navbar user={user} handleLogout={handleLogout} />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/LogIn">
          <LogIn setUser={setUser} />
        </Route>
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
