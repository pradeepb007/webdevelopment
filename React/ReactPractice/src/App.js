// frontend/src/App.js
import React from "react";
import ExampleComponent from "./components/ExampleComponent";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <ExampleComponent />
      </ErrorBoundary>
    </div>
  );
}

export default App;
