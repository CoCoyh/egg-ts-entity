'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const { __decorate } = require('tslib');
const { PrimaryGeneratedColumn, __metadata } = require('typeorm');

class BaseEntity {
}

__decorate([
  PrimaryGeneratedColumn({ type: 'biginit' }),
  __metadata("design:type", Number)
], BaseEntity.prototype, 'id', void 0);
__decorate([
  Index(),
  CreateDateColumn(),
  __metadata("design:type", Date)
], BaseEntity.prototype, 'createTime', void 0);
__decorate([
  UpdateDateColumn(),
  __metadata("design:type", Date)
], BaseEntity.prototype, 'updateTime', void 0);

exports.BaseEntity = BaseEntity;
