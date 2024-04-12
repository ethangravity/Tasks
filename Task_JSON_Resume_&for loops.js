// let myResume={
//     "personal":{
//         "name":"vinoth nanghadi",
//         "email":"helloworld@gmail.com",
//         "mobile":"123456790",
//         "residential info":{
//             "Door No":"xx",
//             "street name":"esa street",
//             "taluk":"DSM",
//             "city":"kmu",
//             "pincode":"123456",
//             "state":"TN",
//             "country":"IN"
//           },
//     },
//     "education":[{
//         "PG":"MBA",
//         "College & Location":"KNLCE & MDU",
//         "Completion Year":"2009",
//         "UG":"BBA",
//         "College & Location":"ACOAS & KMU",
//         "Completion Year":"2007"
//         ]
//     }
//     "Experience":[{
//         "company1":['Integrated Enterprises','Research Analyst','10Y experience'],
//         "company2":['ICICI Bank','Verifier','2+ experience']
//         ]
//     }
//     "IT Skills":['Full Stack Developer', 'Python'],
//     "Hobbies":['Reading books','listening songs'],
//     "Languages":['Tamil', 'English', 'Sowrastra'],
// }
// console.log(myResume);

// above JSON, iterate over all for loops(for, for in, for of, forEach):
let JSON = [{
    name:"vinoth nanghadi",
    email:"helloworld@gmail.com",
    Edu:"MBA",
    company:['ICICI Bank','Verifier','2+ experience']
}

{
    name1:"vinoth ",
    email1:"hello@gmail.com",
    Edu1:"MBA",
    company1:"ICICI Bank"
}

];

// // for loop:

// for (let i=0; i<JSON.length; i++) {
//     let output = JSON[i];
//     console.log(output.name); 
//     console.log(output.email);
//     console.log(output.Edu);
//     console.log(output.company);
// }
// // forEach loop:
// JSON.forEach(function(output){
//     console.log(output.name);    
// });

// // for in loop:
// {for (let key in JSON)
//     console.log(key);
//     }

// for of loop: 
for (let i of JSON) {
    console.log(i);
}