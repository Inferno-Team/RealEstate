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
exports.UserTypePermissions = void 0;
const typeorm_1 = require("typeorm");
const Permissions_1 = require("./Permissions");
const UserType_1 = require("./UserType");
let UserTypePermissions = class UserTypePermissions extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserTypePermissions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserTypePermissions.prototype, "user_type_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserTypePermissions.prototype, "permission_id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Permissions_1.Permission, permission => permission.type_permissions),
    (0, typeorm_1.JoinColumn)({ name: "permission_id" }),
    __metadata("design:type", Permissions_1.Permission)
], UserTypePermissions.prototype, "permission", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserType_1.UserType, permission => permission.permissions),
    (0, typeorm_1.JoinColumn)({ name: "user_type_id" }),
    __metadata("design:type", UserType_1.UserType)
], UserTypePermissions.prototype, "type", void 0);
UserTypePermissions = __decorate([
    (0, typeorm_1.Entity)()
], UserTypePermissions);
exports.UserTypePermissions = UserTypePermissions;
