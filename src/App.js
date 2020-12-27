import "./App.css";
import Home from "./screens/Home";
import Navigation from "./navigation/Navigation";
import TabRouter from "./navigation/Router";

function App() {
  return (
    <div className="App">
      <TabRouter />
      <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
        <Navigation />
      </div>
    </div>
  );
}

export default App;
