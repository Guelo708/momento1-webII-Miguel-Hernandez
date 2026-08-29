import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ListaUsuarios from "./components/ListaUsuarios";


function App() {
  return (
    <>
      <Navbar />
     <h2 style={{ textAlign: "center", marginTop: "20px" }}>Momento 1 web II</h2>
       <ListaUsuarios />
      <Footer />
    </>
  );
}

export default App;
