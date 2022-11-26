import { Route } from '../structures/Route';

export default new Route({
  path: '/',
  method: 'POST',
  run: [
    (req, res) => {
      res.send('Hello World!');
    },
  ],
});
