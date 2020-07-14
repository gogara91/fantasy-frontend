import React, {useState} from 'react';
import PrimaryButton from "../pageBuilder/PrimaryButton";
import {handleLogout} from "../../redux/actions/authActions";
import {useDispatch} from "react-redux";
import {Redirect} from 'react-router-dom';
export default (props) => {
    const [logout, setLogout] = useState(false);
    const dispatch = useDispatch();
    const logoutClicked = () => {
        dispatch(handleLogout());
        setLogout(true);
    }

    return (
        <div className="col-md-10">
            {!logout ? <Redirect to={{pathname: '/login',}} /> : ''}
            <div className="bg-secondary text-right" style={{height: '52px'}}>
                <PrimaryButton
                    color="danger"
                    className="mt-2 mr-2"
                    onClick={() => logoutClicked()}
                >
                    Logout
                </PrimaryButton>
            </div>
            <div className="custom-row">{props.children}</div>
        </div>
    )
}