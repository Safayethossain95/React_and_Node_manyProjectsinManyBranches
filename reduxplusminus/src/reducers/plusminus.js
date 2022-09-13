export const plusminus=(currentstate=20,action)=>{
    switch(action.type){
        case "PLUS":
            return currentstate + 1
        case "MINUS":
            return currentstate - 1
        default:
            return currentstate
    }
}