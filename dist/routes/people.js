"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const airtable_1 = __importDefault(require("airtable"));
const API_KEY = process.env.AIRTABLE_KTK_PAT_KEY;
const BASE_ID = process.env.AIRTABLE_KTK_DATA_BASE_ID;
const TABLE_NAME = process.env.AIRTABLE_KTK_TABLE_ID_PEOPLE;
const base = new airtable_1.default({ apiKey: API_KEY }).base(BASE_ID || '');
const table = base(TABLE_NAME || '');
const router = express_1.default.Router();
// Hello World
// router.get('/', (req: Request, res: Response) => {
//   res.send('Hello, World!');
// });
// GET /people
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const people = yield table.select().firstPage();
    res.json(people);
}));
// Test to see how to manage the route
router.post('/test', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    console.log('xx ===>', { body });
    res.json({ body });
}));
// POST /people
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const people = yield table.create(req.body);
    res.json(people);
}));
// PUT /people/:id
router.put('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const people = yield table.update(req.params.id, req.body);
    res.json(people);
}));
// DELETE /people/:id
router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const people = yield table.destroy(req.params.id);
    res.json(people);
}));
exports.default = router;
