export const updateObjectInArray =(items, itemsId, objPropName, NewObjProps)=>{
    return items.map((u) => {
        if (u[objPropName] === itemsId) {
            return { ...u, ...NewObjProps }
        }
        return u
    })

}