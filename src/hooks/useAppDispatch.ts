import {useDispatch} from "react-redux";
import {AppDispatch} from "../types/reduxTypes";


export const useAppDispatch = () => useDispatch<AppDispatch>()