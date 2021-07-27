export const AddNumber =(data)=> {

    return {
        type : "Add_Number",
        name : {
            data: data
        }

    }
}

export const AddToList =(data, number)=> {

    return {
        type : "Add_Items",
        name : {
            id: 1,
            data: data, 
            number: number
        }

    }
}

export const AddLabel =(data)=> {

    return {
        type : "Add_Label",
        name : {
            data: data
        }

    }
}

