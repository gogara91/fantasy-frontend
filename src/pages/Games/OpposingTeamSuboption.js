import React, {useState} from 'react';

export const OpposingTeamSuboption = (props) => {
   return (
       <div className="row">
           <div className="col-md-12 form-group">
               <label>{props.title} </label>
               <select
                   defaultValue="default"
                   className="form-control"
                   onChange={(e) => props.changeSelectedPlayer(e)}
               >
                   <option disabled={true} value='default'>Select player...</option>
                   {props.opposingPlayers.map(({player}) => {
                       return <option
                           key={player.id}
                           value={player.id}
                       >
                           {player.first_name} {player.last_name}
                       </option>
                   })
                   }
               </select>
           </div>
       </div>
   )
}