import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server ts is running at http://localhost:${port}`);
});