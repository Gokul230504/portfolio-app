import './App.css';
import TestComponent from './components/functional_components/testComponent';
import TestComponent2 from './components/functional_components/testComponent2';
import TestClassComp from './components/class_components/Tesrclasscmpnt';
import EducationComponent from './components/class_components/education';
import ProJects from './components/functional_components/pro';
import NavigationBar from './components/functional_components/propscomp';
function App() {
  return (
    <div className="App">
      <header>
       <TestComponent/> <NavigationBar/>
       </header>
      <body className="App-header">
        <TestComponent2/><EducationComponent/><ProJects/><TestClassComp/>
        </body>  
    </div>
  );
}

export default App;
