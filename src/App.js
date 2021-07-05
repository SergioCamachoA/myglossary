import "./styles/NewGloss.css"
import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./pages/Error";
import { SingleCategorie } from "./pages/SingleCategorie";
import { MainPage } from "./pages/MainPage";
import { Concept } from "./pages/Concept";
// import { StartPage } from "./components/StartPage"
// import { Recent } from "./pages/Recent";
// import { MostViewed } from "./pages/MostViewed";
// import { ArrayConcepts } from "./components/ArrayConcepts";


function App() {
  // const mainArray = JSON.parse(localStorage.getItem('mainList'))
  // if (mainArray === null) ArrayConcepts()
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage />
          {/* <StartPage /> */}
        </Route>
        <Route path="/category/:name" children={<SingleCategorie />}></Route>
        {/* <Route path="/most-recent" children={<Recent />}></Route> */}
        {/* <Route path="/most-viewed" children={<MostViewed />}></Route> */}
        <Route path='/:concept' children={<Concept />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

