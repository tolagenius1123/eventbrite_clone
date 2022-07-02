
// let userInput = {
//     email: "",
//     password: "",
// }

// document.getElementById("username").addEventListener("keyup", (e) => {
//     userInput[e.target.name] = e.target.value
// })

// document.getElementById("password").addEventListener("keyup", (e) => {
//     userInput[e.target.password] = e.target.value   
//     console.log(e)
// })

// function clickHandler(){
//     console.log(userInput)
// }   
// clickHandler()

function addUser(event){
    event.preventDefault();

    let userDetails = []

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    localStorage.setItem('USERNAME', username);
    localStorage.setItem('PASSWORD', password);
    userDetails.push(username,password);
}
