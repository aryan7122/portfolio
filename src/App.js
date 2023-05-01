import './App.css';
import Nav from './component/Nav/Nav'
import Header from './component/header/Header'
import Project from './component/project/Project'
import Contect from './component/footer/contect'


function App() {
  return (
    <div className="App">
      <Nav />
      <Header/>
      <Project />
      <Contect/>
    </div>
  );
}

export default App;
