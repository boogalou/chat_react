import React, { FC } from 'react';
import { Route } from 'react-router-dom';

import { SignIn, SignUp } from './components/Auth';
import { App } from './App';


export const Routes: FC = () => {
  return (
    <>
      <Route path={ ['/', '/login'] } exact>
        <SignIn/>
      </Route>

      <Route path={ '/registration' } exact>
        <SignUp/>
      </Route>

      <Route path={ '/im' } exact>
        <App />
      </Route>
    </>
  );
};
