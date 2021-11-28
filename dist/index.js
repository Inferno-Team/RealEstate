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
const express_graphql_1 = require("express-graphql");
const cors_1 = __importDefault(require("cors"));
const mysql_config_1 = require("./mysql_config");
const Schema_1 = require("./Schema");
const jsonwebtoken_1 = require("jsonwebtoken");
const const_1 = require("./const");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    yield (0, mysql_config_1.mysqlConnection)();
    const app = (0, express_1.default)();
    app.use((req, res, next) => {
        var _a;
        const token = (_a = req.header('authorization')) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
        if (token === undefined || token === null) {
            next();
            return;
        }
        const data = (0, jsonwebtoken_1.verify)(token, const_1.USER_ACCESS_TOKEN);
        req.userId = data.id;
        next();
    });
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use('/graphql', (0, express_graphql_1.graphqlHTTP)({
        schema: Schema_1.schema,
        graphiql: true
    }));
    app.listen(3001, () => {
        console.log("Server is running.");
    });
});
main().catch((err) => {
    console.log(err);
});
