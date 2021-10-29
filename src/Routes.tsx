import React from 'react';
import { Route } from 'react-router-dom';
import { SignIn, SignUp } from './components/Auth';
import { App } from './App/App';

export const Routes = () => {
  return (
    <>
      <Route path={ ['/', '/login'] } exact>
        <SignIn/>
      </Route>

      <Route path={ '/registration' } exact>
        <SignUp/>
      </Route>

      <Route path={ '/im' } exact>
        <App children={ 'Hekko' }/>
      </Route>
    </>
  );
};
