import { IAction } from "../../../interfaces/IAction";
import { IUser } from "../../../interfaces/IUser";

export enum UserActions {
    SET_USER = "SET_USER",
    LOGOUT = "LOGOUT",
}

export  type TSetUserAction = IAction<UserActions.SET_USER, IUser>
export type TLogoutUserAction = IAction<UserActions.LOGOUT, unknown>;
export type TUserAction = TSetUserAction | TLogoutUserAction;

