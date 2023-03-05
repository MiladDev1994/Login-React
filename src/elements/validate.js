


export  const validata = (data , action) => {
    const error = {};
    if (action === "signin"){
        if (!data.name.trim()){
            error.name = "Name is required";
        }else {
            delete error.name
        }

        if (!data.confirmPassword){
            error.confirmPassword = "ConfirmPassword is required";
        }else if (data.confirmPassword !== data.password){
            error.confirmPassword = "ConfirmPassword is false";
        } else {
            delete error.confirmPassword
        }

        if (data.law === false){
            error.law = "Law is required";
        }else {
            delete error.law
        }
    }


    if (!data.email){
        error.email = "Email is required";
    }else if (!data.email.includes("@gmail.com")){
        error.email = "Email is undefined";
    }else {
        delete error.email
    }

    if (!data.password){
        error.password = "Password is required";
    }else if (data.password.length < 5){
        error.password = "Password haveTo be more 5 items";
    }else {
        delete error.password
    }



    return error;
}