import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                <header className="App-header">Hello World!</header>
              </div>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
