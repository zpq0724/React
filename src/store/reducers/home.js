const defaultState = {
    topBanner:{flash:[],hotbrand:[]},
    guessList:{list:[]},


}

export default (state=defaultState,action)=>{
     //console.log(action.type)
        switch(action.type){  
        case "TOPBANNERDATA_FULFILLED":
        let topBannerstate = JSON.parse(JSON.stringify(state))
        topBannerstate.topBanner=action.payload.data
       //console.log(action.payload.data)
        //console.log(topBannerstate.topBanner)
        return topBannerstate;
        case "GUESS_DATA_FULFILLED":
        let guessListstate = JSON.parse(JSON.stringify(state));

        guessListstate.guessList = action.payload.data
        console.log(action.payload.data)
        return guessListstate;
    }   
    return state
}
