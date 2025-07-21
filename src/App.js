import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import {Footer} from './MyComponents/Footer';

function App() {
    let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to buy vegetables"
    },
    {
      sno: 2,
      title: "Go to the mall",
      desc: "You need to go to the mall to buy clothes"
    },
    {
      sno: 3,
      title: "Go to the bank",
      desc: "You need to go to the bank to deposit money"
    },
    {
      sno: 4,
      title: "Go to the gym",
      desc: "You need to go to the gym to exercise"
    },
    {
      sno: 5,
      title: "Go to the library",
      desc: "You need to go to the library to read books"
    }
  ];
  return (
    <>
      <Header title='My Todo List' searchBar={false}/>
      <Todos todos={todos}/>
      <Footer/>
    </>
  );
}

export default App;
