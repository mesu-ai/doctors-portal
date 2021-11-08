
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Notfind from './pages/notfind/Notfind';
import Appointment from './pages/appointment/Appointment';
import Login from './pages/login/Login';
import Register from './pages/login/register/Register';
import AuthProvider from './contex/AuthProvider';
import PrivateRoute from './pages/login/privateRoute/PrivateRoute';
import Dashboard from './pages/dashboard/Dashboard';

function App() {
 
  return (
    <div className="App">
      <AuthProvider>

      <BrowserRouter>
      <Switch>

        <Route exact path='/'><Home></Home></Route>
        <Route path='/home'><Home></Home></Route>
        <PrivateRoute path='/appointment'><Appointment></Appointment></PrivateRoute>

        <PrivateRoute path='/dashboard'><Dashboard></Dashboard></PrivateRoute>
  
        <Route path='/login'><Login></Login></Route>
        <Route path='/register'><Register></Register></Route>

        <Route path='*'><Notfind></Notfind></Route>

      </Switch>
      </BrowserRouter>
      </AuthProvider>
     

    </div>
  );
}

export default App;
