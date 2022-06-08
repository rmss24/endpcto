import './App.css';
import './mobile.css';
import Navbar from './asset/navbar/navrbar';
import Home from './asset/home/home';
import Subjs from './asset/subj/subj';
import Certifications from './asset/certifications/certifications';
import SimpleAccordion from './asset/accondition/Accordion';
import Carousels from './asset/O_works/otherworks';
import AnimatedCursor from 'react-animated-cursor';
import CollapsibleTable from './asset/table/table';
import Chart from './asset/table/table';
import Map from './asset/table/map/map';
function App() {
  return (
    <div className="App">
      <AnimatedCursor
      innerSize={10}
      outerSize={8}
      />
      <Navbar/>
      <Home/>
      <Subjs/>
      <Certifications/>
      <SimpleAccordion/>
      <Carousels/>
        <div className='table'>
          <Chart/>
        </div>
      <Map/>

    </div>
  );
}

export default App;
