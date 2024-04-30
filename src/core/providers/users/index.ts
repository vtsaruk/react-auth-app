import createProvider from '../../../packages/provider/Provider';

import { IUser } from '../../interfaces/IUser';
import useReducer, {IUserProviderState, defaultUserState} from './reducer'

export const {
    Provider: UserProvider,
    useState: userUseState,
    useDispatch: useUserDispatch,
    getState: getUserState,
    dispatch: userDispatch,
} = createProvider<IUserProviderState>(useReducer, defaultUserState);

export const useUser = (): IUser => userUseState().data;