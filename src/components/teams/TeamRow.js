import React, { Component } from 'react'
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPen} from "@fortawesome/free-solid-svg-icons";

class TeamRow extends Component {
    
   render() {
       let {id, city, conference, division, full_name, name} = this.props.team;
       return (
               <tr>
                   <td><Link to={'/teams/' + id}>{full_name}</Link></td>
                   <td>{city}</td>
                   <td>{conference}</td>
                   <td>{division}</td>
                   <td>{name}</td>
                   <td className="text-center">
                       <Link
                           to={`/teams/${id}/edit`}
                            className="btn btn-sm btn-outline-primary"
                       >
                           <FontAwesomeIcon icon={faPen}/>
                       </Link>
                   </td>
               </tr>
       )
   }
}

TeamRow.propTypes = {
    url: PropTypes.string,
    name: PropTypes.string,
};

export default TeamRow;

