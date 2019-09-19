"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NoTip {
    constructor(tags) {
        this.tags = tags;
    }
    toMarkdown() {
        const tags = this.tags.map(tag => `"${tag}"`).join(", ");
        return `danger-plugin-mentor: No tip found for tags: ${tags}.`;
    }
    hasAnyTag(tags) {
        return false;
    }
}
exports.default = NoTip;
