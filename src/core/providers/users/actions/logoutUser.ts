import { userDispatch } from "../index";
import { UserActions } from "./userActionTypes";

const logoutUser = (): void => {
    userDispatch({ type: UserActions.LOGOUT })
}

export default logoutUser;
