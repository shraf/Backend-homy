/* eslint-disable no-console */
import app from './app.js';

app.listen(app.get('port'), () => {
  console.log(`Server Running here 👉 http://localhost:${app.get('port')}`);
});
