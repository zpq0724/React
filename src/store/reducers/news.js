const defaultState = {
    topList:[],
    guessList:[]

}

export default (state=defaultState,action)=>{
   switch(action.type){
       case "TOPLISTDATA_FULFILLED":
        let topListstate = JSON.parse(JSON.stringify(state));
        topListstate.topList=action.payload.data.article.list;
        //console.log(topListstate.topList)
        return topListstate;
   }
    return state;
}