let userInput = {
    email: "",
    password: "",
}

document.getElementById("email").addEventListener("input", (e) => {
    userInput[e.target.name] = e.target.value
})

document.getElementById("password").addEventListener("input", (e) => {
    userInput[e.target.name] = e.target.value   
})

function clickHandler(){
    let user = {}
    let {email, password} = userInput
    if(email === "" && password === ""){
        alert("Please enter your details")
        return 
    }else{
        if(localStorage.getItem("users")){
            let users = JSON.parse(localStorage.getItem("users"))
            for(let i = 0; i < users.length; i++){

                if (users[i].email === email){
                    user = users[i]
                }
            } 
            if (Object.keys(user).length > 0){
                if(user.password === password){
                    alert('Welcome to Norbs Event')
                    return
                }
                else{
                    alert ('Please enter a current password')
                    return
                }
            } else{
                    alert('Please enter a valid email address')

            }
        } else{
            alert('Register a user')
            return
        }
    }
}
   
