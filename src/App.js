import './App.css';
import Navbars from './components/NavBar/NavBar';
import Router from './app/Router';
import { collection, getDocs } from 'firebase/storage';
import { db } from './app/FirebaseConfig'
import { useEffect } from 'react';
import { async } from '@firebase/util';
import { useState} from 'react';

function App() {
  const [plushName, setPlushName] = useState();
  

  return (
    <div className="App">
     <Router/>
    </div>
  );
}

export default App;
