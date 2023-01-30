export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
} 


//Remove the item
export const DLT=(id)=>{
    return{
        type:"DLT_ITEM",
        payload:id
    }
}

//Remove perticular item
export const REMOVE=(item)=>{
    return{
        type:"RMV_ONE",
        payload:item
    }
} 