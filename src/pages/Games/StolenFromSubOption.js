import React from 'react';

export const StolenFromSubOption = (props) => {
   return (
       <div className="row">
           <div className="col-md-12 form-group">
               <label>Stolen from: </label>
               <select className="form-control">
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