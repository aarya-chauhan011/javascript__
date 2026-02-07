const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
console.log(Array.from("Aarya"))
console.log(Array.from({name:"aarya"}))//intresting case for interviews

let score1 = 100;
let score2 = 200;
console.log(Array.of(score1,score2))// isse value array mein convert hojati hain
