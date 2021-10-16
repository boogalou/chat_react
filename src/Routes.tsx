import React from 'react';
import { Route } from 'react-router-dom';
import { SignIn, SignUp } from './components/Auth';

export const Routes = () => {
  return (
    <>
      <Route path={'/login'} exact>
       <SignIn />
      </Route>

      <Route path={'/registration'} exact>
        <SignUp />
      </Route>
    </>
  );
};
