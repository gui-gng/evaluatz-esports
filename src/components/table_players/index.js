import React, { useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';



import players_raw from './lol_players.json';

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    setPlayers(players_raw.data.map(p => {
      let name = p.name.replaceAll('</a>', '');
      name = name.substring(name.lastIndexOf('>')+1, name.length );

      let team = p.team.substring(p.team.lastIndexOf('>')+1, p.team.length );
      return {
        row: p.DT_RowId,
        name,
        team,
        role: p.role
      }
      
    }))
  });

  if (!players) {
    return <div>Loading...</div>;
  } else {
    return (

<table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Team</th>
      <th scope="col">Role</th>
    </tr>
  </thead>
  <tbody>
  {players.map(p => (
    <tr>
    <th scope="row">{p.row}</th>
    <td>{p.name}</td>
    <td>{p.team}</td>
    <td>{p.role}</td>
  </tr>
      ))}
    
   
  </tbody>
</table>


    );
  }
}


export default App;
