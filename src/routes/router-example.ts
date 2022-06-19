import { Router } from '../structures/Router';

export default new Router({
  path: '/router',
  routes: [
    {
      path: '/',
      method: 'GET',
      run: async (req, res) => {
        res.send('Hello World!');
      },
    },
    {
      path: '/',
      method: 'POST',
      run: async (req, res) => {
        res.send('Hello World!');
      },
    },
  ],
});
