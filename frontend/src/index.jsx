import React from 'react';
import { Router } from 'react-router-dom';
import { render } from 'react-dom';

import { configureFakeBackend, history } from './_helpers';
import { accountService } from './_services';
import { App } from './app';

import './styles.less';

// start fake backend if running with "npm run start:fake"
if (process.env.FAKE_BACKEND === true) {
  configureFakeBackend();
}

// attempt silent token refresh before startup
accountService.refreshToken().finally(startApp);

function startApp() {
  render(
    <Router history={history}>
      <App />
    </Router>,
    document.getElementById('app')
  );
}