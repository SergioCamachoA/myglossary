import "./styles/NewGloss.css"
import React, { useState } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error from "./pages/Error";
import { SingleCategorie } from "./pages/SingleCategorie";
import { MainPage } from "./pages/MainPage";
import { Concept } from "./pages/Concept";
// import { StartPage } from "./components/StartPage"
// import { Recent } from "./pages/Recent";
// import { MostViewed } from "./pages/MostViewed";

function App() {
  const [conceptObject, setConceptObject] = useState({ topic: 'still testing' })
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <MainPage setConceptObject={setConceptObject} />
          {/* <StartPage /> */}
        </Route>
        <Route path="/category/:name" children={<SingleCategorie />}></Route>
        {/* <Route path="/most-recent" children={<Recent />}></Route> */}
        {/* <Route path="/most-viewed" children={<MostViewed />}></Route> */}
        <Route path='/:concept' children={<Concept conceptObject={conceptObject} />}></Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App

