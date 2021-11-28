"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RealState = void 0;
const typeorm_1 = require("typeorm");
const RealStateRoom_1 = require("./RealStateRoom");
const User_1 = require("./User");
const Video360_1 = require("./Video360");
let RealState = class RealState extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RealState.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RealState.prototype, "log", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RealState.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RealState.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RealState.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RealState.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RealState.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RealState.prototype, "buy_type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RealState.prototype, "budget", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, user => user.states),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", User_1.User)
], RealState.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RealStateRoom_1.RealStateRoom, room => room.realState),
    __metadata("design:type", Array)
], RealState.prototype, "rooms", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Video360_1.Video360, video360 => video360.realState),
    __metadata("design:type", Video360_1.Video360)
], RealState.prototype, "video", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => User_1.UserLovedRealStates, loved => loved.state),
    __metadata("design:type", Array)
], RealState.prototype, "loved", void 0);
RealState = __decorate([
    (0, typeorm_1.Entity)()
], RealState);
exports.RealState = RealState;
