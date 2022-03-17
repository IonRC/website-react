import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import BootstrapCarousel from "./components/carousel/bootstrapCarousel";
import ContainerWhyUs from "./components/container-why-us/container-why-us";
import CardComponentStructure from "./components/card-info-company"

function App() {
    return (
        <div>
            <BootstrapCarousel/>
            <ContainerWhyUs/>
            <CardComponentStructure/>
        </div>
    );
}

export default App;