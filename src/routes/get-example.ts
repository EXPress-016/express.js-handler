import { Route } from '../structures/Route';
export default new Route({
  path: '/',
  method: 'GET',
  run: [
    async (req, res) => {
      res.send('Hello World!');
    },
  ],
});
