//adds todo array to local storage
export function store(arr){
    let string = JSON.stringify(arr);
    localStorage.setItem("todoArr",string)
}

//return todo array
export function getArr(){
    let retString = localStorage.getItem("todoArr")
    let retArray;
    if(retString !==null){
         retArray = JSON.parse(retString)
    }else{
         retArray = null
    }
    
    return retArray
}