"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import dotenv from 'dotenv';
// dotenv.config();
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT || 3000;
app_1.default.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
