//-- прототипувати функції
// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
//
const user = (name: string, age: number, gender: string) => {
    const name_age_gender = name + age + gender
}
user('nazar', 15, 'male');


// function sum(a,b){
//     return a+b
// }
// function showSum(a,b){
//     console.log(a + b);
// }
//
const sum = (a: number, b: number) => {
    return a + b;
}
sum(12, 12);



// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
//
let someUser = {
    age:12
}
const incAge = (someUser:number, inc: number) => {
     return someUser+=inc
}
incAge(someUser.age,12)
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)