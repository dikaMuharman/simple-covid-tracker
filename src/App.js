import React from "react";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";

export default function App() {
  return (
    <>
      <Route path="/" exact component={Home} />
      <Route path="/detail/:id" exact component={Detail} />
    </>
  );
}
