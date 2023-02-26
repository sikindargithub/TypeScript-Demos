class Student {
    // instance variables are created and initialized automatically
    constructor(studName, studId, city, department, // ? means optional.should be the last parameter
    hobbies = "sports" // if we are using req parameter after optional provide default value
    ) {
        this.studName = studName;
        this.studId = studId;
        this.city = city;
        this.department = department;
        this.hobbies = hobbies;
        // add method
        this.printDetails = () => {
            console.log(`name:${this.studName}`);
            console.log(`id:${this.studId}`);
            console.log(`city:${this.city}`);
            console.log(`department:${this.department}`);
        };
    }
}
var showCourses = (...courses) => {
    courses.forEach((course) => console.log(`${course}`));
};
var student = new Student("sikindar", 10, "nalgonda", "developement");
student.printDetails();
var student1 = new Student("nagender", 12, "warangal");
student1.printDetails();
showCourses("html", "css", "js");
