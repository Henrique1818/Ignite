interface Couser {
    name: string;
    duration?: number;
    educator: string;
}

class CreateCouserSvc {
    execute({ name, duration = 8, educator }: Couser) {
        console.log(name, duration, educator);
    }
}

export default new CreateCouserSvc();