

const person = {
    name:["bob","smith"],
    name2:{
        first:"michael",
        last:"tou"
    },
    age:32,
    bio:function (){
        console.log(` ${this.name[0]} ${this.name[1]} is ${this.age} years old`)
    },
    introduce:function (){
        console.log(`hi, I'm ${this.name[0]}`)
    }
}



