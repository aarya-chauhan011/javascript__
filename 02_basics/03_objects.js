//singleton--jab bhi literals ki trah declare karte hain toh singleton nhi bnega constructors se bnega toh bnega

//objects literals
//Object.create-- this is construtor use singleton method
const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
//nsole.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname : {
        userfullname: {
            firstname: "hitesh",
            lastname : "choudhary"
        }
    }
}
//nsole.log(regularUser.fullname)//objects k and object access karne ka tareeka

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

//nst obj3 = Object.assign({},obj1,obj2)
//nst obj3 = {obj1,obj2}
const obj3 = {...obj1, ...obj2}
//nsole.log(obj3);



