import '../app.css';
import React from 'react';
import './playerData.css';
import { Input} from 'antd';
const { Search } = Input;
import data from '../data.json'

const Playerdata = ({players}) =>{
    const [value,setValue] = React.useState('')
    const onChange = event =>{
        console.log("Value",event.target.value);
    setValue(event.target.value)
}

const filteredData = !value.length ? data.playerList : data.playerList.filter(playerName => { return playerName.PFName.toLowerCase().includes(value)||playerName.TName.toLowerCase().includes(value)} )
console.log(filteredData);
    const playerElement = filteredData.map((data) => 
        <div key={data.Id} className="thumbnail">
            <br></br>
            <img className="image-item" src={`images/player-images/${data.Id}.jpg`}></img>
            <p className="image-item">Name:{data.PFName}</p>   
            <p className="image-item">Skill: {data.SkillDesc}</p>
            Value: $ {data.Value}
            <br></br>
            Upcoming Matches:
            {data.UpComingMatchesList.map((option,key) => 
            <div key={key}>
                <p> {option.CCode} VS {option.VsCCode}</p>
                <p>Match Date : {option.MDate}</p>
            </div>
            )}
        </div>
    );

// const filteredData = !value.length ? players : players.filter(playerName => playerName.PFName==value )
//     const playerElement = filteredData.map((data) => 
//         <div key={data.Id} className="thumbnail">
//             <br></br>
//             <img src={`images/player-images/${data.Id}.jpg`}></img>
//             <p className="image-item">Name:{data.PFName}</p>   
//             <p className="image-item">Skill: {data.SkillDesc}</p>
//             Value: $ {data.Value}
//             <br></br>
//             Upcoming Matches:
//             {data.UpComingMatchesList.map((option,key) => 
//             <div key={key}>
//                 <p> {option.CCode} VS {option.VsCCode}</p>
//                 <p>Match Date : {option.MDate.toLocaleString()}</p>
//             </div>
//             )}
//         </div>
//     );
    return (
        <div>
            <Search
      placeholder="Search for a Team or Player...."
      allowClear
      enterButton="Search"
      size="large"
      onChange={onChange}
      value={value}
    />
        <div className="thumbnail-container">    
        
            {playerElement}
        </div>
        </div>
    )
}

export default Playerdata; 