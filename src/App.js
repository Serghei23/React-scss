import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Produs from './components/Produs';
import Contacts from './components/Contacts';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <>
   <Router>
     <Navbar />
     <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/produs' component={Produs}/>
      <Route exact path='/contacts' component={Contacts}/>
     </Switch>
     <Footer/>
   </Router>
   </>
  );
}
export default App;
