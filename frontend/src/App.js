import './App.css';
import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import HomePage from './pages/Homepage';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import AdminPage from './pages/AdminPage';
import EditImage from './pages/EditImage';
import BlogsComponent from './components/BlogsComponent';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact}/>
        <Route path='/blogcreate' component={BlogsComponent}/>
        <Route path='/login' component={Login}/>
        <Route exact path='/admin' component={AdminPage}/>
        <Route exact path='/admin/image/:id/edit' component={EditImage}/>
      </Switch>
    </BrowserRouter>
    </Provider>
    
  );
}

export default App;
