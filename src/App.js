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
import HookUseCallBack from './pages/Hooks/HookUseCallBack';
import HookUseDemo from './pages/Hooks/HookUseDemo';
import UseRef from './pages/Hooks/UseRef';
import ParentComponent from './pages/HOC/ParentComponent';
import { HomeTemplate } from './templates/HomeTemplate';
import { AdminTemplate } from './templates/AdminTemplate';
import Checkout from './pages/Checkout/Checkout';

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* <Header /> */}
        <Loading />
        <Switch>
          {/* <Route path="/home" component={Home} /> */}
          <HomeTemplate exact path="/home" Component={Home}/>
          <HomeTemplate path="/contact" Component={Contact} />
          <HomeTemplate path="/login" Component={Login} />
          <HomeTemplate path="/register" Component={Register} />
          <HomeTemplate path="/LifeCycle" render={(propsRoute) => {
            return <div>
              <h3>Component Lifecycle</h3>
              <Lifecycle{...propsRoute} />
            </div>
          }} />
          <HomeTemplate exact path="/usestateDemo" Component={UseStateHook} />
          <HomeTemplate exact path="/usememo" Component={HookUseDemo} />
          <HomeTemplate exact path="/useref" Component={UseRef} />
          <HomeTemplate exact path="/carchoosing" Component={BaiTapChonXe} />
          <HomeTemplate exact path="/useeffecthome" Component={UseEffectHome} />
          <HomeTemplate exact path="/reduxhookhome" Component={ReduxHookHome} />
          <HomeTemplate exact path="/hookusecallback" Component={HookUseCallBack} />
          <HomeTemplate exact path="/details/:id" Component={Details} />
          <HomeTemplate exact path="/demoprops" Component={ParentComponent} />
          <HomeTemplate exact path="/checkout/:id" Component={Checkout} />

          {/* //Route mac dinh de duoi cung cua ung dung */}
          <Route exact path="/" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
