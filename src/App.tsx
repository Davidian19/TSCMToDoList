import './App.css'
import ToDoList from './Components/ToDoList';
import ChuckNorrisJoke from './Components/ChuckNorrisJoke';
import Header from './Components/Header';

function App() {  

  return (
    <>
      <Header/>
      <ToDoList/>
      <ChuckNorrisJoke/>
      <span>@Did from 🎔 David Ian</span>
    </>
  )
}

export default App

