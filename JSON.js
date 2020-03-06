/*
JSON is an easy way to store data. It can be used for data storage, data configuration and veriication,
For generating data structure from user input,For transferring data from client to server, server to client, server to server.
*/
//Javascript object
var newUser = {
    first_name: "Gbenga",
    last_name: "Adeyeye",
    gender : "Male",
    is_Black : true
}

//To access newUser
newUser.first_name;
newUser.last_name;
newUser.is_Black;

//JSON
var car = {
    "name" : "Bentley Bentayaga",
    "model" : "BenZ089",
    "color" : "Blue",
    "is_bullet_proof" : false
}

//To access car
car.name;
car.model;
car.is_bullet_proof;


//Nested Array
var car = {
    "name" : "Datsun",
    "car_type" : [
        {
            "model" : "Datsun101",
            "color" : "white"
        },
        {
            "model" : "DatsunTruck",
            "color" : "ash"
        },
        {
            "model" : "DatsunSpaceWagon",
            "color": "black"
        }
    ]
}

//To accesss car
car.name.car_type[2].model;

//JSON.stringify()

var userProfile = {
    "first_name" : "Gbenga",
    "last_name" : "Adeyeye",
    "gender" : "Male"
}
var a = JSON.stringify(userProfile); //this will converts the object into string


//JSON.parse()
var userProfile = {
    "first_name" : "Gbenga",
    "last_name" : "Adeyeye",
    "gender" : "Male"
}
var a = JSON.parse(userProfile); //this will converts the strings back into objects
