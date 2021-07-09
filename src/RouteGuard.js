import React from 'react';
import { Route, Redirect } from "react-router-dom";
import HomePage from './components/HomePage';

// const RouteGuard = ({ component: Component, auth, ...rest }) => {
// console.log("auth:" + auth)
//     return(
//         <Route {...rest} render={(props) => (
//             auth === true
//                 ? <Component {...props} />
//                 : <Redirect to='/' />
//         )} />
//     )
// }





const  RouteGuard = ({ children, auth, ...rest }) => {
    return (
      <Route exact {...rest} render={({ location }) => {
        {if (auth === false) {alert("Please Login to the website to view the orders page")}}
        return auth === true
          ? <HomePage title="Icon click"/>
          : <Redirect to={{
              pathname: '/'
            }} />
      }} />
    )
  }

  export default RouteGuard;