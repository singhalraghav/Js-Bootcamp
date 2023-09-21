
// Assignment-1
Fruits=[]
Fruits.push("apple","banana","orange")
Fruits.shift()
Fruits.push("grape")
Fruits[1]="pear"
console.log(Fruits)

//Assignment-2
Person ={
       Name:"john",
       Age:30,
       City:"New York" 
}

delete Person.Age
Person.job="engineer" 
Person.City ="San Francisco" 
console.log(Person)

//Assignment-3
cars=[
    car1={
        make:"toyota",
        model:"camry",
        year:2018
    },
    car2={
        make:"mahindra",
        model:"thar",
        year:2023
    },
    car3={
        make:"hyundai",
        model:"verna",
        year:2022
    }
    
]
cars.shift()
cars.push(new_car={
    make:"honda",
    model:"civic",
    year:2020
})
cars[1].model="accord"
console.log(cars)