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
exports.RealStateRoom = void 0;
const typeorm_1 = require("typeorm");
const RealEstate_1 = require("./RealEstate");
const RealStateRoomImage_1 = require("./RealStateRoomImage");
let RealStateRoom = class RealStateRoom extends typeorm_1.BaseEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], RealStateRoom.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], RealStateRoom.prototype, "real_state_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], RealStateRoom.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => RealEstate_1.RealState, state => state.rooms),
    (0, typeorm_1.JoinColumn)({ name: "real_state_id" }),
    __metadata("design:type", RealEstate_1.RealState)
], RealStateRoom.prototype, "realState", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => RealStateRoomImage_1.RealStateRoomImage, images => images.room),
    __metadata("design:type", Array)
], RealStateRoom.prototype, "images", void 0);
RealStateRoom = __decorate([
    (0, typeorm_1.Entity)()
], RealStateRoom);
exports.RealStateRoom = RealStateRoom;
