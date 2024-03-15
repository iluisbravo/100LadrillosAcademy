import './App.css'
import Navbar from './components/Navbar';
import Landing from './pages/Landing'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/LogIn" component={LogIn} />
        <Route path="/SignUp" component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App
