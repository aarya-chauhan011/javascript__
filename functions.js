function addtwonumbers(number1,number2){//fnc k andr jo bhi defination bnate hai usmein jo input lete hain wh parametres hain
    console.log(number1+number2)

}
addtwonumbers(3,7)//iske andr jo value pass krte hai wh arguments hain

/*function addtwonumbers(number1,number2){
    return number1 + number2

}
const result = addtwonumbers=(3,5)
console.log("Result: ", result);*/

/*function loginusermessage(username){
    return '${username} just logged in'
}
console.log(loginusermessage("hitesh"))*/
//jab bracket k andr koi value nahin pass karte toh undefine aata hain

//*************************hoisting *****************************************
//function k andr jb function bante hai th child parent ko access karpaate hain
/*if(true){
    const username = "hitesh"
    if(username === "hitesh"){
        const website = " youtube"
        console.log(username  + website)
    }
}*/


//**********************************this and arrow function************************************
const sayhello = () => {
    console.log("hello world")
}
 const add = (a,b)=>{
    return a+b  ;
 }
 add(3,5);


 // agar hume return na likhna ho toh without parenthesis likhte hai arguments jaise 
 //const add = (a,b) => a=b



 // higher order functiona nd callback 
 // higher order function is a function that takes a function as an argument 
