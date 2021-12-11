class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }

}
class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = [students];
    }
    registerStudent(student) {
        this.students.find(s => {
            if (s.email !== student.email) {
                this.students.push(student);
                console.log(`Registering ${student.email} to the bootcamp.`)
            } else {
                console.log(`${student.email} is already registered.`);
            }
        });
        return this.students;
    }
} 

const student1 = new Student('bob', 'bob@gmail.com', 'East');
const student2 = new Student('mary', 'mary@gmail.com', 'West');
const bootcamp1 = new Bootcamp('Nucamp', 'react');

console.log(bootcamp1.registerStudent(student1));
console.log(bootcamp1.registerStudent(student2));
console.log(bootcamp1.registerStudent(student2));