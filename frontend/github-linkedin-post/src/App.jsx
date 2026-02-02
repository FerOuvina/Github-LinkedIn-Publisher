import { Route } from "wouter";

import Home from "./components/Home.jsx";
import GettingStarted from "./components/GettingStarted.jsx";

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
