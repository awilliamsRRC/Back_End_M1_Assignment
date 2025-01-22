"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
//Import app object 
const app_1 = __importDefault(require("./app"));
/* Creates constant type called PORT as either string or number.
Assign PORT as environment variable to could be set or if undefined port 3000*/
const PORT = process.env.PORT || 3000;
// The application will listen to server(PORT) and output if running.
const server = app_1.default.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
exports.server = server;
