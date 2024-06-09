import logo from './logo.svg';
import './App.css';
import AddStudent from './Components/AddStudent';
import SearchStudent from './Components/SearchStudent';
import ViewAll from './Components/ViewAll';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<AddStudent/>}/>
    <Route path="/search" element={<SearchStudent/>}/>
    <Route path="/view" element={<ViewAll/>}/>
   </Routes>
   </BrowserRouter>

  );
}

export default App;
