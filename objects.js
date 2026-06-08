//jab hum objects ki trah declare karte hain toh singleton nahin banta hai,constuctor se bnega toh hmesha singleton bnega
//object literals
                      //how to make an object
//Object.create    or
/*const mysym =Symbol("key1")
const jsuser = {name : "aarya",
    age : 20,
    location : "ghaziabad",
    email : "aaryac2004@gmail.com",
    isLoggedin : false,
    lastLogindays : ["wednesday", "sunday"],
[mysym]: "mykey1"

}*/  //ismein //jo name hai wh object k andr already string manta hai toh hhum usse " likhe na likhe wh string hi maanega"
 
// how to access objects -> there are 2 ways for it
/*console.log(jsuser.email)
console.log(jsuser["email"])
console.log(jsuser[mysym])*/
//agar kisse cheeze ko lock ya freeze karna ho toh
/*jsuser.email = "aaryaaarav@gmail.com"
Object.freeze(jsuser)
jsuser.email = "aaryac2004@gmail.com"
console.log(jsuser);*/




//***************************************part 2 ***********************************

/*const tinderuser = new Object()  // singleton object
const tinderuser2 = {}    // non singleton object
console.log(tinderuser)*/

/*const obj1 = {1: "a", 2 : "b"}
const obj2 = {3: "a", 4 : "b"}
const obj4 = {5: "a", 6 : "b"}
const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3  = {...obj1, ...obj2}
console.log(obj3)*/

//**********************************JSON API INTRO************************************
const course = {
    coursename : "js",
    price : "199",
    courseinstructor : "hitesh"

}
//console.log(course.courseinstructor)
const {/*kya value extract karni hai*/courseinstructor} = /*(kaha se value extract karni hai) */ course
console.log(courseinstructor)
//agar name bda lgrha hai deinstruct karna hai toh 
const{courseinstructor : instructor} = course
console.log(instructor)