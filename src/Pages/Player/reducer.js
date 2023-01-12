const init_count={
        count:20
}
function counter(state=init_count,action){
    switch(action.type){
        case 'Inc' : return {count:state.count+action.payload};
        case 'Dcr' : return {count:state.count-1};
        default: return state
    }
}
export default counter;