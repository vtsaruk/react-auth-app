import { userDispatch } from "../index";
import { IUser } from "../../../interfaces/IUser";
import { UserActions } from "./userActionTypes";

const setUser = (user: IUser): void => {
    userDispatch({ type: UserActions.SET_USER , payload: user})
}

export default setUser;
