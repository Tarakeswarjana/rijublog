
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import Feed from './pages/Feed';
import Home from './pages/Home';
import Upload from './pages/Upload'
import { createContext} from 'react';
import { useState ,useEffect} from 'react';


const BioData=createContext()
function App() {
 const[uploaddata,setuploaddata]= useState({});
 const [record, setrecord] = useState([]);
 

  return (<>
  {console.log(record)}
  <Navbar/>

  <BioData.Provider value={{fromvalue:uploaddata,setuploaddata:setuploaddata,setrecord:setrecord ,record:record}}>
     
      

    <BrowserRouter>
    <Routes>
      <Route index element= {<Home/>}/>
    <Route path='/' element={<Home/>} />
      <Route path='feed' element={<Feed/>}/>
      <Route path='upload' element={<Upload />}/>
    </Routes>
    </BrowserRouter>
    </BioData.Provider>
    <Footer/>
    </>
  );
}

export default App;
export {BioData};