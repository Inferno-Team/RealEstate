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
exports.UserLovedRealStates = exports.User = void 0;
const typeorm_1 = require("typeorm");
const RealEstate_1 = require("./RealEstate");
const UserRate_1 = require("./UserRate");
const UserType_1 = require("./UserType");
let User = class User extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], User.prototype, "type_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "user_name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => UserRate_1.UserRate, rate => rate.user),
    __metadata("design:type", UserRate_1.UserRate)
], User.prototype, "rate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RealEstate_1.RealState, state => state.user),
    __metadata("design:type", Array)
], User.prototype, "states", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => UserType_1.UserType, type => type.user),
    (0, typeorm_1.JoinColumn)({ name: "type_id" }),
    __metadata("design:type", UserType_1.UserType)
], User.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => UserLovedRealStates, states => states.user),
    __metadata("design:type", Array)
], User.prototype, "loved_states", void 0);
User = __decorate([
    (0, typeorm_1.Entity)()
], User);
exports.User = User;
let UserLovedRealStates = class UserLovedRealStates extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserLovedRealStates.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserLovedRealStates.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserLovedRealStates.prototype, "real_state_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User, user => user.loved_states),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }),
    __metadata("design:type", User)
], UserLovedRealStates.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RealEstate_1.RealState, state => state.loved),
    (0, typeorm_1.JoinColumn)({ name: "real_state_id" }),
    __metadata("design:type", RealEstate_1.RealState)
], UserLovedRealStates.prototype, "state", void 0);
UserLovedRealStates = __decorate([
    (0, typeorm_1.Entity)()
], UserLovedRealStates);
exports.UserLovedRealStates = UserLovedRealStates;
