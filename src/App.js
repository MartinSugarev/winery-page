import './App.css';
import About from './components/about'
import Contacts from './components/contacts'
import Homepage from './components/homepage'
import Wines from './components/wines'
import { Route, Switch } from 'react-router-dom'
import { ContextImagesFunc } from './components/context'

function App() {
  return (
    <>
      <div className="page-bckground">
           <div className="mainpage-layout">
             <ContextImagesFunc>
              <Switch>
                  <Route exact path="/" component={Homepage} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/contacts" component={Contacts} />
                  <Route exact path="/wines" component={Wines}/>
              </Switch>         
            </ContextImagesFunc> 
           </div>
      </div>
    </>
  );
}

export default App;
