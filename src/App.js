import logo from './logo.svg';
import './App.css';
import Main from './Main/Main';
import { Route, Switch } from 'react-router';
import MapFunction from './Pages/MapFunction';
import PropsMap from './Pages/PropsMap';
import Hooks from './Pages/Hooks';
import Tabs from './Pages/Tabs';
function App() {
  return (
    <div className="App">
   <Switch>
     <Route exact path="/">
       <Main />
     </Route>
     <Route exact path="/map-function">
       <MapFunction  />
     </Route>
     <Route exact path="/props-map">
       <PropsMap  />
     </Route>
     <Route exact path="/hooks">
       <Hooks />
     </Route>
     <Route exact path="/tabs">
       <Tabs />
     </Route>
   </Switch>
    </div>
  );
}

export default App;
