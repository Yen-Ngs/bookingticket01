import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import Contact from './pages//Contact/Contact';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register'
import Header from './Components/Header'
import Loading from './Components/Loading/Loading'
import Lifecycle from './pages/LifeCycle/Lifecycle';
import UseStateHook from './pages/Hooks/UseStateHook';
import BaiTapChonXe from './pages/Hooks/BaiTapChonXe';
import UseEffectHome from './pages/Hooks/UseEffectHome';
import {ReduxHookHome} from './pages/Hooks/ReduxHookHome';
import Details from './pages/Details/Details';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <Header />
        <Loading />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/LifeCycle" render={(propsRoute) => {
            return <div>
              <h3>Component Lifecycle</h3>
              <Lifecycle{...propsRoute} />
            </div>
          }} />
          <Route exact path="/usestateDemo" component={UseStateHook} />
          <Route exact path="/carchoosing" component={BaiTapChonXe} />
          <Route exact path="/useeffecthome" component={UseEffectHome} />
          <Route exact path="/reduxhookhome" component={ReduxHookHome} />
          <Route exact path="/details/:id" component={Details} />

          {/* //Route mac dinh de duoi cung cua ung dung */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
