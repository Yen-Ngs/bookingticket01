import logo from './logo.svg';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './pages/Home/Home';
import Contact from './pages//Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import Header from './Components/Header'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      {/* //Route mac dinh de duoi cung cua ung dung */}
      <Route exact path="/" component={Home}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
