class StudentClass {
  constructor() {
    this.students = [];
  }

  enrollSchool(student) {
    this.students.push(student);
  }

  cleanAllStudent() {
    this.students.forEach((student) => {
      student.clean();
    });
  }
}

class Student {
  constructor(inputName, inputAge) {
    this.name = inputName;
    this.age = inputAge;
  }
  clean() {
    console.log(`${this.name}!!! 청소하겠습니다 !`);
  }
}

class WindowCleaner extends Student {
  constructor(inputName, inputAge) {
    super(inputName, inputAge);
  }

  clean() {
    console.log(`${this.name}!!!! 창문 닦겟습니다 !`);
  }
}

class DeskCleaner extends Student {
  constructor(inputName, inputAge) {
    super(inputName, inputAge);
  }

  clean() {
    console.log(`${this.name}!!!! 책상 닦겟습니다 !`);
  }
}

class ToiletCleaner extends Student {
  constructor(inputName, inputAge) {
    super(inputName, inputAge);
  }

  clean() {
    console.log(`나는 왜 화장실 청소야...`);
  }
}

const kinder = new StudentClass();

const student1 = new Student("짱구", 5);
const student2 = new WindowCleaner("철수", 5);
const student3 = new DeskCleaner("맹구", 5);
const student4 = new ToiletCleaner("훈이", 5);

// kinder.enrollSchool(student1);
// kinder.enrollSchool(student2);
// kinder.enrollSchool(student3);
// kinder.enrollSchool(student4);

[student1, student2, student3, student4].forEach((student) => {
  kinder.enrollSchool(student);
});

kinder.cleanAllStudent();
