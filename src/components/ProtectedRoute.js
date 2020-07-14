import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {useSelector} from "react-redux";

export const ProtectedRoute = ({component: Component, ...rest}) => {
    const isAuthenticated = useSelector(state => state.AuthStore.isAuthenticated);
    const isAdmin = useSelector(state => state.AuthStore.isAdmin);
    return(
        <Route
            {...rest}
            render={props => {
                if(!isAuthenticated) {
                    return (<Redirect to='/login' />)
                }
                if(isAdmin) {
                    return (<Redirect to='/dashboard' />)
                }
                return (<Component {...props} />)
            }}
        >

        </Route>
    )
}