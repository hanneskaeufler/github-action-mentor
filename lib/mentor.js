"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const MENTOR_COMMENT_IDENTIFICATION = /Posted by <a href="#">Mentor<\/a>/;
const SIGNATURE = '<p align="right">👩🏾‍🏫 Posted by <a href="#">Mentor</a></p>';
function mentor(api, event) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield hasAlreadyCommented(api, event)) {
            return;
        }
        yield postRandomTipComment(api, event);
    });
}
exports.default = mentor;
function hasAlreadyCommented(api, event) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield api.issues.listComments(issueParams(event));
        return response.data.length > 0 && oneOfCommentsIsByMentor(response.data);
    });
}
function postRandomTipComment(api, event) {
    return __awaiter(this, void 0, void 0, function* () {
        const tip = "Something clever.";
        yield api.issues.createComment(Object.assign({}, issueParams(event), { body: `${tip}
    ${SIGNATURE}` }));
    });
}
function issueParams(event) {
    return {
        owner: event["repository"]["owner"]["login"],
        repo: event["repository"]["name"],
        issue_number: event["number"],
    };
}
function oneOfCommentsIsByMentor(comments) {
    for (let i = 0; i < comments.length; i++) {
        const comment = comments[i];
        if (commentIsByMentor(comment)) {
            return true;
        }
    }
    return false;
}
function commentIsByMentor(comment) {
    return MENTOR_COMMENT_IDENTIFICATION.test(comment["body"]);
}
