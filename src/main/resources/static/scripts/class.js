class Person{
    name;
    constructor(name) {
        this.name = name;
    }

    introduce(){
        console.log(`Hi！I'm ${this.name}`);
    }
}

const person = new Person("Giles");
person.introduce();

class Animal{
    sleep(){
        console.log("zzzzzz");
    }
}

const spot = new Animal();
spot.sleep();


class Professor extends Person {
    teaches;

    constructor(name,teaches) {
        super(name);
        this.teaches = teaches;
    }

    introduce() {
        console.log(`my name is ${this.name}, and I will be your ${this.teaches} professor. `)
    }

    grade(paper){
        const grade = Math.floor(Math.random() *(5-1)+ 2);
        console.log(grade);
    }

}

const professor = new Professor("Walsh","Psychology");
professor.introduce();
professor.grade("my paper")
console.log(professor.teaches)


class Student extends Person {
    #year;

    constructor(name, year) {
        super(name);
        this.#year = year;
    }

    introduceSelf() {
        console.log(`Hi! I'm ${this.name}, and I'm in year ${this.#year}.`);
    }

    canStudyArchery() {
        return this.#year > 1;
    }
}

const student = new Student("Summers", 2);


class Example {
    somePublicMethod() {
        this.#somePrivateMethod();
    }

    #somePrivateMethod() {
        console.log("You called me?");
    }
}

const myExample = new Example();
myExample.somePublicMethod();

