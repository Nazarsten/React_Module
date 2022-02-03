//-- прототипувати функції
// const user = {
//     name:"Max",
//     age:18,
//     gender:'male'
// }
//
var user = function (name, age, gender) {
    var name_age_gender = name + age + gender;
};
user('nazar', 15, 'male');
// function sum(a,b){
//     return a+b
// }
// function showSum(a,b){
//     console.log(a + b);
// }
//
var sum = function (a, b) {
    return a + b;
};
sum(12, 12);
// function incAge(someUser, inc){
//     someUser.age+=inc
//     return someUser
// }
//
var someUser = {
    age: 12
};
var incAge = function (someUser, inc) {
    return someUser += inc;
};
incAge(someUser.age, 12);
// console.log(sum(1, 2));
// showSum(2,3)
// incAge(user, 2)
