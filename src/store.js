import {createStore} from "redux";
import counter from "./Pages/Player/reducer";
import search_reducer from "./Components/Navbar/navbar_reducer";

const store = createStore(search_reducer);
export default store;