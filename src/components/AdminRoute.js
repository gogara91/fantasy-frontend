import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

export const AdminRoute = ({component: Component, ...rest}) => {

    const userLevel = useSelector(state => state.AuthStore.user.user_level);

    return(
        <Route
            {...rest}
            render={props => {
                if(!userLevel) {
                    return (<Redirect to='/' />)
                }
                if(userLevel !== 9) {
                    return (<Redirect to='/' />)
                }
                return <Component {...props} />
            }}

        />
    )
}