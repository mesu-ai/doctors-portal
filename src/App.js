
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Header from './components/header/Header';
import Notfind from './pages/notfind/Notfind';
import Appointment from './pages/appointment/Appointment';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Header></Header>
      <Switch>

        <Route exact path='/'><Home></Home></Route>
        <Route path='/home'><Home></Home></Route>
        <Route path='/appointment'><Appointment></Appointment></Route>

        <Route path='*'><Notfind></Notfind></Route>

      </Switch>
      </BrowserRouter>
     

    </div>
  );
}

export default App;
