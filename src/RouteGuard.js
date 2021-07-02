import React from 'react';
import { Route, Redirect } from "react-router-dom";

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
      <Route {...rest} render={({ location }) => {
        return auth === true
          ? children
          : <Redirect to={{
              pathname: '/login',
              state: { from: location }
            }} />
      }} />
    )
  }

  export default RouteGuard;