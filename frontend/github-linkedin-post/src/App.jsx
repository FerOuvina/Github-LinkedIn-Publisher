import { Route } from "wouter";

import Home from "./components/Home.jsx";
import GettingStarted from "./components/GettingStarted.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/getting-started">
        <GettingStarted />
      </Route>
    </>
  );
}

export default App;
