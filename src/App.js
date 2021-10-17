import route from "./routes";
import Header from "./components/Header";

const App = () => {
    return (
      <div className="App">
        <Header />
        {route}
      </div>
    );
}

export default App;
