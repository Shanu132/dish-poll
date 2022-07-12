import './App.css';
import { Route, Routes } from 'react-router-dom';
import Loginpage from './components/Loginpage';
import Invalid from './components/Invalid';
import Fechfood from './components/Fechfood';
import Top from './components/Top';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Loginpage />}/>
        <Route path='fooditem' element={<Fechfood />}/>
        <Route path='topitem' element={<Top />}/>
        <Route path='*' element={<Invalid />}/>
      </Routes>
    </div>
  );
}

export default App;
