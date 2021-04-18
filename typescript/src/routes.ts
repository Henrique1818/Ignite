import { Request, Response } from 'express';
import CreateCouserSvc from './CreateCourseService';

export function createCourse(request: Request, response: Response ) {
    CreateCouserSvc.execute({
        name: 'Node + Typescript',
        educator: 'Henrique',
        duration: 12
    });

    CreateCouserSvc.execute({
        name: 'Trilha ReactJS',
        educator: 'Ana',
    });

    return response.send();
}