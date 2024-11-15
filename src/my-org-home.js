import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";
import "regenerator-runtime/runtime";


const App = () => (
  <Router>
    <Routes>

      <Route path="/home" element={<Root />} />
    </Routes>
  </Router>
);


const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
});

export const { bootstrap, mount, unmount } = lifecycles;
