import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

export const GuestRoute = ({component: Component, ...rest}) => {
    const isAuthenticated = useSelector(state => state.authStore.isAuthenticated);
    return(
        <Route
            {...rest}
            render={props => {
                return isAuthenticated ? (<Redirect to='/' />) : (<Component {...props} />)
            }}

        />
    )
}