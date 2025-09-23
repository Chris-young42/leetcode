function unique(arr){

    return arr.filter((item,index)=>Array.indexOf(item)===index)
}

function unique1(arr){
    return [...new Set(arr)]
}