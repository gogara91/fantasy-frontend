import React, {useState} from 'react';
import {Modal} from "react-bootstrap";
import PlayerInfoNugget from "./PlayerInfoNugget";
import {Link} from "react-router-dom";

export default (props) => {
    const handleHide = () => props.hideModal();
    console.log(props.player);

    const {position, team, fantasy_cost} = props.player;
    return (
        <Modal show={props.showModal} onHide={handleHide}>
            <div className="player-info-modal-header">
                <Modal.Header closeButton>
                </Modal.Header>
                <div className="header-info text-dark text-center p-2 mb-3">
                    <div className="row">
                        <div className="col-md-3">
                            <PlayerInfoNugget
                                position={position ? position : ''}
                                teamAbbreviation={team ? team[0].abbreviation : ''}
                            />
                        </div>
                        <div className="col-md-3 border-left">
                            Credits <br/>
                            <span className="font-weight-bold text-danger">
                                {fantasy_cost}
                            </span>
                        </div>
                        <div className="col-md-3 border-left">
                            Avg points <br/>
                            <span className="font-weight-bold text-danger">
                                {0.00}
                            </span>
                        </div>
                        <div className="col-md-3 border-left">
                            Popularity <br/>
                            <span className="font-weight-bold text-danger">
                                {0.00}%
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="player-info-table-wrapper">
            <Modal.Body>
                    <table className="table player-info-table table-borderless">
                        <thead>
                        <tr>
                            <td>
                                <b>Matchday 28</b> - Round 1<br/>
                                vs <span className="team-nugget">RBM</span>
                            </td>
                            <td className="text-right">
                                Pts Matchday<br/>
                                <span className="matchday-points font-weight-bold text-danger">27</span>
                            </td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Offensive rebounds</td>
                            <td>{123}</td>
                        </tr>
                        <tr>
                            <td>Team loss</td>
                            <td>{123}</td>
                        </tr>
                        <tr>
                            <td>Points</td>
                            <td>{123}</td>
                        </tr>
                        <tr>
                            <td>Defensive rebounds</td>
                            <td>{123}</td>
                        </tr>
                        <tr>
                            <td>Blocks suffered</td>
                            <td>{123}</td>
                        </tr>
                        <tr>
                            <td>Assists</td>
                            <td>{123}</td>
                        </tr>
                        <tr>
                            <td>Blocks</td>
                            <td>{123}</td>
                        </tr>
                        <tr>
                            <td>Double double</td>
                            <td>{123}</td>
                        </tr>
                        <tr>
                            <td>Missed Shots</td>
                            <td>{123}</td>
                        </tr>
                        <tr>
                            <td>Missed free throws</td>
                            <td>{123}</td>
                        </tr>
                        </tbody>
                    </table>
            </Modal.Body>
                <Modal.Body>
                    <Link className="btn btn-primary d-block">
                        View statistics
                    </Link>
                </Modal.Body>
            </div>
        </Modal>
    )
}