class Student {
  // instance variables are created and initialized automatically
  constructor(
    public studName: string,
    public studId: number,
    public city: string,
    public department?: string, // ? means optional.should be the last parameter
    public hobbies: string = "sports" // if we are using req parameter after optional provide default value
  ) {}

  // add method
  printDetails = () => {
    console.log(`name:${this.studName}`);
    console.log(`id:${this.studId}`);
    console.log(`city:${this.city}`);
    console.log(`department:${this.department}`);
  };
}

var showCourses = (...courses: string[]): void => {
  courses.forEach((course) => console.log(`${course}`));
};
var student = new Student("sikindar", 10, "nalgonda", "developement");
student.printDetails();
var student1 = new Student("nagender", 12, "warangal");
student1.printDetails();
showCourses("html", "css", "js");
