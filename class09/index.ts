// Write a program that print all of the cars company and year number from the list, make sure the car is an object.
type CarsType= {company: string, isUsed: boolean, year: number}
let cars: CarsType[]= [{
    company: "Toyota",
    isUsed: false,
    year: 2021,
},
{
    company: "Suzuki",
    isUsed: true,
    year: 2015,
},
{
    company: "Honda",
    isUsed: true,
    year: 2009,
},
{
    company: "Kia",
    isUsed: false,
    year: 2022,
},
{
    company: "Hyundai",
    isUsed: true,
    year: 2016,
}
]
for(let i = 0; i < cars.length; i++){
    //console.log("Car Company:", cars[i].company);
    //console.log("Car Year:", cars[i].year,"\n");
     let car= cars[i]
     if(car.company == "Honda"){
        console.log("Year is:", car.year);
     }
}