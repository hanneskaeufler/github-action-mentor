"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MentorTip {
    constructor(text, source, tags) {
        this.text = text;
        this.source = source;
        this.tags = tags;
    }
    toMarkdown() {
        return `${this.text} [Source](${this.source})`;
    }
    hasAnyTag(tags) {
        return this.tags.filter(tag => tags.indexOf(tag) !== -1).length > 0;
    }
}
exports.MentorTip = MentorTip;
