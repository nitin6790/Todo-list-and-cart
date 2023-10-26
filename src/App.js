import './App.css';
import ProductShow from './components/ProductShow.js';
import { BrowserRouter as BR,Route,Routes,Link } from 'react-router-dom';
import Hello from './Hello';
import MapDemo from './components/MapDemo';
import Timer from './components/TimerUseEffect';
import MyForm from './components/MyForm';
import ButtonApp from './components/ButtonApp';
import TodoList from './components/TodoList';
import DynamicContent from './components/DynamicContent';
import Counter from './components/Counter';
import ButtonCart from './components/ButtonCart';
function App() {
const subject =[
  {
    id : 1, name : 'MSWD'
  },
  {
    id : 2, name : 'NPS'
  },
  {
    id : 3, name : 'AOOP'
  }
]
const todosData = [
  { title: 'Hello', completed: true },
  { title: 'Button App', completed: true },
  { title: 'Product List', completed: true },
  { title: 'Map Demo', completed: true },
  { title: 'Todo List', completed: false },
  { title: 'My Form', completed: true },
  { title: 'Timer Use Effect', completed: false },
  // Add more todo items as needed
];
  return (
      <div >
      <BR>
      <button ><Link to ={'/hello'} >Hello</Link></button>
      <button><Link to ='./product'>product</Link></button>
      <button><Link to ='./MapDemo'>Mapdemo</Link></button>
      <button><Link to ='./TodoList'>TodoList</Link></button>
      <button><Link to ='./MyForm'>MyForm</Link></button>
      <button><Link to ='./TimerUseEffect'>Timer</Link></button>
      <button><Link to ='./DynamicContent'>Dynamic Content</Link></button>
      <button><Link to ='./Counter'>Counter</Link></button>
      <button><Link to ='./ButtonCart'>ButtonCart</Link></button>
      <Routes>
        <Route path='/Hello' element={<Hello name='nitin sai' age='17'/>} >hello</Route>
        <Route path='/product' element={<ProductShow/>}>Product List</Route>
        <Route path='/MapDemo' element={<MapDemo subject={subject}/>}>Mapdemo</Route>
        <Route path='/MyForm' element={<MyForm/>}>MYForm</Route>
        <Route path='/TodoList' element={<TodoList todos={todosData}/>}>MYForm</Route>
        <Route path='/TimerUseEffect' element={<Timer/>}>Timer</Route>
        <Route path='/DynamicContent' element={<DynamicContent name="John Doe" age={30} />}>Timer</Route>
        <Route path='/Counter' element={<Counter />}>Counter</Route>
        <Route path='/ButtonCart' element={<ButtonCart />}>Counter</Route>
        
      </Routes>
      </BR>   
      
       
      </div>

      
  );
}
export default App;
