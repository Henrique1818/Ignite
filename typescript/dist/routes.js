"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    CreateCourseService_1.default.execute({
        name: 'Node + Typescript',
        educator: 'Henrique',
        duration: 12
    });
    CreateCourseService_1.default.execute({
        name: 'Trilha ReactJS',
        educator: 'Ana',
    });
    return response.send();
}
exports.createCourse = createCourse;