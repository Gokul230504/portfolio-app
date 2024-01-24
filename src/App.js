import logo from './logo.svg';
import './App.css';
import TestComponent from './components/functional_components/testComponent';
import TestComponent2 from './components/functional_components/testComponent2';
import TestClassComp from './components/class_components/Tesrclasscmpnt';
import FooterContent from './components/class_components/FooterComponent';
import EducationComponent from './components/class_components/education';
import ProJects from './components/functional_components/pro';
function App() {
  return (
    <div className="App">
       <TestComponent/>
      <header className="App-header">
        <TestComponent2/><EducationComponent/><ProJects/><TestClassComp/>
         
      </header>
      <footer>
        <FooterContent/>
      </footer>
    </div>
  );
}

export default App;
