//Validate User Registration & Login Info

const validateUserRegistration = (req, res, next )=>{

    const { firstName, lastName, email, phoneNumber, password} = req.body

    const errors = [];

    if(!firstName) {
         errors.push("Please add first name!")
    }
    if(!lastName) {
         errors.push("Please add last name!")
    }
    if(!phoneNumber) {
        errors.push("Please enter a phone number!")
    }
    if(!email) {
         errors.push("please add email address!")
    } else if(!validateEmail){
        errors.push("Please enter valid a email address")
    }

    if(!password){
        errors.push("Please enter a password.")
      } else if(password.length < 8) {
        errors.push("Please password must be 8 charsacters long")
      } else if (!/[A-Z]/.test(password)) {
        errors.push("Please password must contain a capital letter")
      } else if (!/[0-9]/.test(password)) {
        errors.push("Please password must contain a number")
      } else if (!/[@#$!%^*?&]/.test(password)){
        errors.push("Please password must contain atleast one special character")
    }

    if(errors.length > 0) return res.status(400).json({message: errors})

    next()
}

const validateUserLogin = (req, res, next )=>{

    const { email, password } = req.body

    const errors = [];

    if(!email) {
            errors.push("please add email name!")
    } 
    
    // else if (!validateEmail(email)) {
    //         errors.push("please enter a valid email!")    
    // }

    if(!password){
        errors.push("Please enter a password.")
    } 

    if(errors.length > 0) return res.status(400).json({message: errors})

    next()
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,))$/;
    return re.test(String(email).toLowerCase());
}

module.exports = {validateEmail, validateUserRegistration, validateUserLogin}