import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';

function App() {

  const [facts,setFacts] = useState([]);

  //Axios needs .data for it to work.
  const getFacts = () => {
    Axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response=>setFacts(response.data.results))
      .catch(err=>console.log(err))
  }

  //.results is specific to pokemon url.
  // const getFacts = () => {
  //   fetch("https://pokeapi.co/api/v2/pokemon")
  //     .then(response => response.json())
  //     .then(response => {
  //       setFacts(response.results);
  //     })
  //     .catch(err => console.log(err))
  // }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <button className="btn btn-primary btn-lg" onClick={getFacts}> Fetch Pokemon </button>
        { 
        facts.map((pokemon,index) => {
            return <p key={index}>{pokemon.name}</p>
        })
        }
      </header>
    </div>
  );
}

export default App;
