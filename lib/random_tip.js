"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const no_tip_1 = __importDefault(require("./no_tip"));
const rand = max => Math.floor(Math.random() * max);
function RandomTip(tips, tags) {
    if (tags.length > 0) {
        tips = tips.filter(tip => tip.hasAnyTag(tags));
    }
    return tips.length > 0 ? tips[rand(tips.length)] : new no_tip_1.default(tags);
}
exports.default = RandomTip;
