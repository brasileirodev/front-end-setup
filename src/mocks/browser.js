// src/mocks/browser.js
import { setupWorker } from 'msw';
import { handlers } from './handlers/exemplo/index';

export const worker = setupWorker(...handlers);
