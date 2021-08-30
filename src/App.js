import "./App.scss";
import NAVBAR from "./components/Navbar";
import Feed from "./pages/Feed";

function App() {
  return (
    <div>
      <header>
        <NAVBAR />
      </header>
      <Feed />
    </div>
  );
}

export default App;
