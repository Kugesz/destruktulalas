// 1.feladat
// Kerdes: A valtozok envet destrukualas eseten ugyan azoknak a kriteriuoknak kell megfelelniuk mint egy egyszeru valtozonak, és szamit a sorrendjuk
let car = ['Ford', 'Mustang', 2022, 'blue'];

let [brand,model,color,year] = car;

console.log(brand,model,color,year);

// 2.feladat
// Kerdes: az objektumban megadott kulcsneveket lehet hasznalni, a sorrend nem szamit

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