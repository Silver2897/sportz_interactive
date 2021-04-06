import './app.css';
import React, {useEffect} from 'react';
import {fetchDataFromAPI} from '../src/services/api.service';
import Playerdata from './components/playerData';
const customStyles = {
  content : {
        height: window.innerHeight,
        textAlign :'center',
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }

};

const Playerpage = () =>{
    const [players, setPlayers] = React.useState([]);
    
    // useEffect(async()=>{
    //   if(!players.length){
    //     const {playerList} = await fetchDataFromAPI();
    //     await setPlayers(playerList)
    //   }
    // },[players])
    
    return(
      <div className="gallery">
        {/* {!players.length ? <p>Loading...</p> : null}   */}
        <Playerdata players={players}/>
      </div>
    ) 
}

export default Playerpage; 