// import dotenv from 'dotenv';
// dotenv.config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

import app from './app';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});