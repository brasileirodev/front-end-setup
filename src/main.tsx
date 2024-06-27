import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import { worker } from './mocks/browser';
import { AppRoutes } from './routes/app.routes';
import { BrowserRouter } from 'react-router-dom';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }
  await worker.start();
}

const rootElement = document.getElementById('root');

enableMocking().then(() => {
  if (rootElement) {
    ReactDOM.createRoot(rootElement).render(
      <BrowserRouter>
        <React.StrictMode>
          <Theme>
            <AppRoutes />
          </Theme>
        </React.StrictMode>
      </BrowserRouter>
    );
  } else {
    console.error('Root element not found');
  }
});
