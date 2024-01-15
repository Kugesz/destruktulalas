// 1.feladat

let car = ['Ford', 'Mustang', 2022, 'blue'];

let [brand,model,color,year] = car;

console.log(brand,model,color,year);

// 2.feladat

let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
    };

let {title,author,publicationYear,language} = book;

console.log(title,author,publicationYear,language);

// 3.feladat

let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
    };

function printStudentInfo({name, age, grade, subjects}) {
    console.log(name,age,grade);
    console.log(subjects);
}

printStudentInfo(student);