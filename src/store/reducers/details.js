const defaultState = {
    details:{info:[]}

}

export default (state=defaultState,action)=>{
     //console.log(action.type)
        switch(action.type){  
        case "DETAIL_DATA_FULFILLED":
        let detailsstate = JSON.parse(JSON.stringify(state))
        detailsstate.details=action.payload.data;
       //console.log(action.payload.data)
        //console.log(topBannerstate.topBanner)
        return detailsstate;
 
    }   
    return state
}
