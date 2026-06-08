//arrays are an object and they are resizable.they can be acceseed by square bracket not by writing "1" like this.
//interview question -> js make shallow copies(copies share the same reference)


/*arr = [2,7,8,9];// this is array declare and initialisation
console.log(arr[3]);*/

/*arr = [2,5,4,7];
console.log(arr);
arr.push(9);//last pe element insert karne k liye
console.log(arr);
arr.unshift(0);//first pe element laane ke liye
console.log(arr);
arr.pop();
console.log(arr);//last digit htane k liye
arr.shift();
console.log(arr);*///first digit htane k liye
//start mein element add karna hai toh .unshift use karte hain
//const array = [2,5,6,7,8]
//console.log(array.includes(7))


//const newarray = array.join();
//console.log(newarray)//it converts into string

//slice and splice
/*const myone = array.slice(1,3)
console.log(myone);
const mytwo = array.splice(1,3);
console.log(mytwo);*/

//slice mein original array manipulate nahin hta hai splice mei hojata hai and splice mein last element include bhi hjaata hai slice mein nahin hta hain



/*const arr = [2,5,4,3];
arr.push(3);
console.log(arr);*/

/*const arr =[4,7,8,9];
arr[0]=9;
console.log(arr);*/

/*let a = 5;
console.log(a);
a= "aarya";
console.log(a);
a= "true";
console.log(a);
a = [3,6,4,7];
console.log(a);*/

/*const a = 5;
console.log(a);
a = "aarya";
console.log(a);
a = "true";
console.log(a);
a = [3,6,4,7];
console.log(a);*/

//for off loop
/*brr= [2,6,7,8,4,5];
for (const ele of brr) {
    console.log(ele);
}*/

//array ke elements ko double karna ho
/*brr = [2,6,7,8,4,5];
console.log(brr);
for(let i=0;i<brr.length;i++){
    brr[i] *= 2;
}
console.log(brr);*/

//for off anf for each nahin pdhaa hai


/*const array = [2,3,4,[2,3],6,8,9,[5,0]]
const realanotherarray = array.flat(Infinity)
console.log(realanotherarray);*/

/*console.log(Array.isArray("aarya"));//question krraha ahi array hai ki n ahin
console.log(Array.from("aarya"))//isko array mein convert kardiya hain
console.log(Array.from({name :"aarya"}))*///it gives empty array kyunki directly wh convert nahin karoaraha hai its is an interview question


/*let score1 = 500
let score2 = 400
let score3 = 100
console.log(Array.of(score1,score2,score3))//it converts into array*/

//array ki alg alg value elene k liye concat ki jgah spread ka use krte hain
//jaise 
const marvelheroes = ["Iron Man", "Thor", "Spider-Man"];
const dcheroes = ["Batman", "Superman", "Wonder Woman"];

const allnewheroes = [...marvelheroes, ...dcheroes];
console.log(allnewheroes);
