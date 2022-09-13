exports.emailValidation = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
}
exports.lengthValidation = (string,min,max) =>{
    if(string.length>max || string.length<min){
        return false
    }
    return true
}