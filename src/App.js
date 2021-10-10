
import { Route, Switch } from 'react-router';
import './App.css';
import './components/Navbar/Navbar'
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import AdoptList from './components/AdoptList/AdoptList'
import AnimalItem from './components/AnimalItem/AnimalItem';
import NewAllert from './components/NewAllert/NewAllert.jsx'
import Login from './components/login/Login'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/login' component={Login}/>
        <Route exact path="/" component={Home}/>
        <Route path="/adopt" component={AdoptList} exact />
        <Route exact path="/adopt/:id" component={AnimalItem}/>
        {/* <Route path="/foster-homes" component={FosterHomes} />
        <Route exact path="/foster-homes/:animalId" component={AnimalFoster} /> */} 
          {/* <Route path="/all-allerts" component={AllertList} /> */}
           <Route path="/new-allert" component={NewAllert} />
        {/* <Route path="/register" component={Register} />
        <Route path="/login" component={Login}/>  */}
      </Switch>
    </div>
  );
}

export default App;
