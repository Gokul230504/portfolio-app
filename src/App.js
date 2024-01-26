import './App.css';
import TestComponent from './components/functional_components/testComponent';
import TestComponent2 from './components/functional_components/testComponent2';
import TestClassComp from './components/class_components/Tesrclasscmpnt';
import EducationComponent from './components/class_components/education';
import ProJects from './components/functional_components/pro';
import NavigationBar from './components/functional_components/propscomp';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Skills from './components/functional_components/Skills';
import ImageComp from './components/functional_components/image';
function App() {
  return (
    <div className="App">
      <header>
       <TestComponent/>
       <BrowserRouter>
       <NavigationBar/>
       <Routes>
        <Route path="/About Me"element={<TestComponent2/>}></Route>
        <Route path="/Education"element={<EducationComponent/>}></Route>
        <Route path="/Projects"element={<ProJects/>}></Route>
        <Route path="/Skill"element={<Skills/>}></Route>
        </Routes>
        </BrowserRouter>
       </header>
      <body className="App-header">
        <TestComponent2/><ImageComp/><EducationComponent/><ProJects/><TestClassComp/>
        </body>  
    </div>
  );
}

export default App;
