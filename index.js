"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
// 实体类基类
class BaseEntity {
}
tslib_1.__decorate([
    typeorm_1.PrimaryGeneratedColumn({ type: 'bigint' }),
    tslib_1.__metadata("design:type", Number)
], BaseEntity.prototype, "id", void 0);
tslib_1.__decorate([
    typeorm_1.Index(),
    typeorm_1.CreateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], BaseEntity.prototype, "createTime", void 0);
tslib_1.__decorate([
    typeorm_1.UpdateDateColumn(),
    tslib_1.__metadata("design:type", Date)
], BaseEntity.prototype, "updateTime", void 0);
exports.BaseEntity = BaseEntity;