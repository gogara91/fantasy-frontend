import React, { Component } from 'react'

export default class Team extends Component {
    
   render() {
       let {id, abbreviation, city, conference, division, full_name, name} = this.props.team;
       return (
           <div className='row'>
               <div className='col-md-12'>
               {id} {abbreviation} {city} {conference} {division} {full_name} {name}
               </div>
           </div>
       )
   }
}
