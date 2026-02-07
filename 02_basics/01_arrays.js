//JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
//A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too.
//A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.
//Methods that have special treatment for empty slots include the following: concat(), copyWithin(), every(), filter(), flat(), flatMap(), forEach(), indexOf(), lastIndexOf(), map(), reduce(), reduceRight(), reverse(), slice(), some(), sort(), and splice(). Iteration methods such as forEach don't visit empty slots at all. Other methods, such as concat, copyWithin, etc., preserve empty slots when doing the copying, so in the end the array is still sparse.
const myArr = [0,1,2,3,4,5]
const myheroes = ["steve","mike","eleven"]
const myarr2 = new Array(1,2,3,4)
//console.log(myArr[1])

//slice and splice
console.log("A", myArr);
const myn1 = myArr.slice(1,3)//last value not included
console.log(myn1)
console.log("B", myArr)
const myn2 = myArr.splice(1,3)//last value included
console.log("C", myArr);
console.log(myn2)

// slice splice mein slice mein original array same rehta hai slice karne k baad bhi but splice mein woh values original value se bhi hatt jaati hai yeh diff hai
