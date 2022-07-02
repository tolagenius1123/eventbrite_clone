// function onboardStudent(studentObj, emailStudent){
//     if(studentObj.firstName !== ""){
//         console.log(`Welcome to Semicolon ${studentObj.firstName}`);
//         setTimeout(() => emailStudent(studentObj), 3000)
//         console.log(`${studentObj.firstName}, check your email in the next 1 min for further instructions`)
//     }
                                                                                                                                                                       
// }

// let newStudent = { firstName: "mufasa", number: "+2348141366380"}

// onboardStudent (newStudent, (student) => {
//     console.log(`Email by semicolon to ${student.firstName} with phonenumber ${student.number}`)

// })

function dialNaijaCode(number){
    console.log(`+234 ${number}`)
}

function dialGhanaCode(number){
    console.log(`+233 ${number}`)
}

function dialNumber(countryCode, number){
    console.log(`${countryCode}${number}`)
}

function dialCustomer(customer){
    if (customer.nationality === "nigeria"){
        console.log('You are a Nigerian!')
    } 
    else {
        console.log("You are not a Nigerian")
        // setTimeout(() => caller("233", customer.phonenumber), 3000)
    }
}

let customer = {nationality: "nigeria", phonenumber: "8141366380"}

dialCustomer(customer)