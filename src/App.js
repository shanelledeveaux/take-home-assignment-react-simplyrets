import view from "./routes";
import Header from "./components/Header/Header";

const App = () => {
    return (
      <div className="App">
        <Header />
        {/* Whatever route the user is on will determine displayed here. See routes.js */}
        {view}
      </div>
    );
}

export default App;
