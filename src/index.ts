import { ExtenedApp } from './structures/App';

export const app = new ExtenedApp().express;

app.listen(8080);
