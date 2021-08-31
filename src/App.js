import "./App.scss";
import FOOTER from "./components/Footer";
import NAVBAR from "./components/Navbar";
import Feed from "./pages/Feed";

function App() {
  return (
    <div>
      <header>
        <NAVBAR />
      </header>
      <div className="page-content">
        <Feed />
      </div>
      <FOOTER />
    </div>
  );
}

export default App;
