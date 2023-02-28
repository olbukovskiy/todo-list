import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { DispatchFunc } from "../../helpers/types";
import { RootState } from "../../redux/store";

const useAppDispatch: DispatchFunc = useDispatch;

const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const hooks = {
  useAppDispatch,
  useAppSelector,
};

export default hooks;
