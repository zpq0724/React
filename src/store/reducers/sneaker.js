const defaultState = {
    banner:[]
}

export  default (state=defaultState,action)=>{
    //console.log(action.type)
    //console.log(111)
        switch(action.type){
            case "SNEAKER_DATA_FULFILLED":
            let bannerstate = JSON.parse(JSON.stringify(state))
            bannerstate.banner= action.payload;
            //console.log(action.payload)
            return bannerstate;
    }

    return state;
}