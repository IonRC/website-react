import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ContainerWhyUs from "./components/container-why-us/container-why-us";
import CardComponentStructure from "./components/card-info-company"
import Apptest from "./components/Navbar/navbar";

function App() {
  return (
     <div>
         <Apptest />
         <ContainerWhyUs />
         <CardComponentStructure />
     </div>
  );
};

export default App;