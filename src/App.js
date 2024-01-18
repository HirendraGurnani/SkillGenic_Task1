import Sidebar from "./components/navbar";
import SearchBar from "./components/dashboard";

function App() {
  return (
    <div style={{backgroundColor: "#ecebeb", height: '140vh'}}>
      <Sidebar></Sidebar>
      <SearchBar></SearchBar>
    </div>
  );
}

export default App;
