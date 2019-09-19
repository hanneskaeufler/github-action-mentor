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
const GITHUB_ACTIONS_USERNAME = "github-actions";
function mentor(api, event) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield hasAlreadyCommented(api, event)) {
            return;
        }
        yield postComment(api, event);
    });
}
exports.default = mentor;
function hasAlreadyCommented(api, event) {
    return __awaiter(this, void 0, void 0, function* () {
        const comments = yield api.issues.listComments(issueParams(event));
        console.log(comments);
        return comments.length > 0 && oneOfCommentsIsByMentor(comments);
    });
}
function postComment(api, event) {
    return __awaiter(this, void 0, void 0, function* () {
        yield api.issues.createComment(Object.assign({}, issueParams(event), { body: "Dude, a comment (by mentor)" }));
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
    return comment["user"]["login"] == GITHUB_ACTIONS_USERNAME && /by mentor/.test(comment["body"]);
}
