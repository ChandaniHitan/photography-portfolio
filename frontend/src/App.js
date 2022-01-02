import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from './pages/homepage';
import Portfolio from './pages/portfolio';
import About from './pages/about';
import Services from './pages/services';
import Contact from './pages/contact';
import {Provider} from 'react-redux';
import store from './store';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';
import EditImage from './pages/EditImage/EditImage';
//import NavbarComponent from './components/NavbarComponent';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact}/>
        <Route path='/services' component={Services}/>
        <Route path='/login' component={Login}/>
        <Route exact path='/admin' component={AdminPage}/>
        <Route exact path='/admin/image/:id/edit' component={EditImage}/>
      </Switch>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
