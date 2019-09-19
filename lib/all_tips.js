"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const url_1 = require("url");
const tip_1 = require("./tip");
/* tslint:disable:max-line-length */
/* tslint:disable:trailing-comma */
function AllTips() {
    return [
        new tip_1.MentorTip("Always make an effort to use good variable names. This produces self-documenting code and will help your collegues or future you understand the code at a glance. ", new url_1.URL("http://wiki.c2.com/?GoodVariableNames"), ["clean-code"]),
        new tip_1.MentorTip("Keeping a well balanced portfolio of tests will help you get quick feedback from your automated test-suite. Often times such a balance is described as the test-pyramid.", new url_1.URL("https://martinfowler.com/bliki/TestPyramid.html"), ["continuous-integration", "testing"]),
        new tip_1.MentorTip("Releasing more often can get you and your team producing higher quality software.", new url_1.URL("https://continuousdelivery.com"), ["continuous-delivery", "agile"]),
        new tip_1.MentorTip("*Kanban* originated in manufacturing in the 1940s. Today it is also used by agile software teams for transparency and faster output. Many tools exist to implement Kanban in your project.", new url_1.URL("https://www.atlassian.com/agile/kanban"), ["agile"]),
        new tip_1.MentorTip("Have you tried TDD? Test-Driven Development is the practice of iteratively writing automated tests before implementing production code. It's a super fun tool that can help you produce high quality code by giving you instant design feedback.", new url_1.URL("https://en.wikipedia.org/wiki/Test-driven_development"), ["testing", "agile"]),
        new tip_1.MentorTip("Did you know that you can often replace a for loop by a map/filter function?", new url_1.URL("https://en.wikipedia.org/wiki/Functional_programming"), ["clean-code"]),
        new tip_1.MentorTip("Having a consistent code style in your project should not be underestimated, as by making code more readable for all project contributors, it can save everyone’s time and even help you avoid some errors.", new url_1.URL("https://blog.jetbrains.com/webstorm/2015/08/maintaining-consistent-code-style/"), ["java"]),
        new tip_1.MentorTip("Be nice. We are all trying to do our best work.", new url_1.URL("https://www.npmjs.com/package/danger-plugin-mentor"), ["non-technical"]),
        new tip_1.MentorTip("Cyclomatic complexity is a software metric, used to indicate the complexity of a program. It is a quantitative measure of the number of linearly independent paths through a program's source code. It was developed by Thomas J. McCabe, Sr. in 1976.", new url_1.URL("https://en.wikipedia.org/wiki/Cyclomatic_complexity"), ["clean-code"]),
        new tip_1.MentorTip("The Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle and Dependency Inversion Principle are cornerstones for understandable and maintainable object oriented software.", new url_1.URL("https://sites.google.com/site/unclebobconsultingllc/getting-a-solid-start"), ["clean-code"]),
        new tip_1.MentorTip("A guard statement with an early return can avoid deep nesting and aid understanding of methods.", new url_1.URL("http://wiki.c2.com/?GuardClause"), ["clean-code"]),
        new tip_1.MentorTip("An often used concept to convey the benefits of encapsulation in object-oriented programming is Tell-Dont-Ask. It helps remind ourselves that rather than asking an object for its data and then acting opon it, we should instead tell the object what to do.", new url_1.URL("https://martinfowler.com/bliki/TellDontAsk.html"), ["clean-code"]),
        new tip_1.MentorTip("Microservices - also known as the microservice architecture - is an architectural style that structures an application as a collection of services that are highly maintainable, loosely coupled, independently deployable and more.", new url_1.URL("https://microservices.io"), ["software-architecture"]),
        new tip_1.MentorTip("In software engineering, a monolithic application describes a software application which is designed without modularity. Modularity is desirable, in general, as it supports reuse of parts of the application logic and also facilitates maintenance by allowing repair or replacement of parts of the application without requiring wholesale replacement.", new url_1.URL("https://en.wikipedia.org/wiki/Monolithic_application"), ["software-architecture"]),
        new tip_1.MentorTip("Mutation Testing is a type of software testing where certain statements in the source code are mutated (changed) and checked if the test cases are able to find the errors. It is a type of White Box Testing which is mainly used for Unit Testing.", new url_1.URL("https://www.guru99.com/mutation-testing.html"), ["testing"]),
        new tip_1.MentorTip("A parser generator is an application which generates a parser. Sometimes also called a 'compiler compiler'.", new url_1.URL("https://wiki.tcl-lang.org/page/parser+generator"), ["computer-science"]),
    ];
}
exports.default = AllTips;
