import express, { Request, Response } from 'express';
import Airtable from 'airtable';

const API_KEY = process.env.AIRTABLE_KTK_PAT_KEY;
const BASE_ID = process.env.AIRTABLE_KTK_DATA_BASE_ID;
const TABLE_NAME = process.env.AIRTABLE_KTK_TABLE_ID_PEOPLE;


const base = new Airtable({ apiKey: API_KEY}).base(BASE_ID || '');
const table = base(TABLE_NAME || '');

const router = express.Router();

// Hello World

// router.get('/', (req: Request, res: Response) => {
//   res.send('Hello, World!');
// });


// GET /people
router.get('/', async (req: Request, res: Response) => {

  const people = await table.select().firstPage();
  res.json(people);
});

// Test to see how to manage the route
router.post('/', async (req: Request, res: Response) => {
  const body = req.body
  console.log('xx ===>', { body })
  res.json({ body });
});

// // POST /people
// router.post('/', async (req: Request, res: Response) => {
//   const people = await table.create(req.body);
//   res.json(people);
// });

// PUT /people/:id
router.put('/:id', async (req: Request, res: Response) => {
  const people = await table.update(req.params.id, req.body);
  res.json(people);
});

// DELETE /people/:id
router.delete('/:id', async (req: Request, res: Response) => {
  const people = await table.destroy(req.params.id);
  res.json(people);
});

export default router;