// src/mocks/handlers.js
import { rest } from 'msw';

export const handlers = [
  rest.get('https://example.com/user', (req, res, ctx) => {
    return res(
      ctx.json({
        id: 'c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d',
        firstName: 'John',
        lastName: 'Maverick',
      })
    );
  }),
];
