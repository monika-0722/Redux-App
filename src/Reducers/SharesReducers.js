const initialData = {
  list : {}
}
const initLabel = {
  brandLabel : ""
}
const initNum = {
  num : 1
}

const NumberReducers = (state=initNum, action) => {
  switch (action.type){
   
    case "Add_Number" :
            const {data} = action.name;
            return {
             num : data  
            }
    default: return state;
  }
}

const SharesReducers = (state=initialData, action) => {
  switch (action.type){
    case "Add_Items" :
            const {id, data, number} = action.name;
            return {
                ...state,
                list: {
                  ...state.list,
                   [data]: number
                  
                  }     
            }
          
    default: return state;

  }
}

const LableReducers = (state=initLabel, action) => {
  switch (action.type){
    case "Add_Label" :
            const {data} = action.name;
            return {
              brandLabel : data
            }
          
    default: return state;

  }
}


export default SharesReducers;
export {LableReducers, NumberReducers};