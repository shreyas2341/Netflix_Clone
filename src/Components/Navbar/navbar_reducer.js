const initsearch={
    search:""
}
export default function search_reducer(state=initsearch,action){
    switch(action.type){
        case 'SEARCH': return {search: action.load}
        default: return state
    }
}