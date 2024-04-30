type IReducer<StateType> = (state: StateType, action: any) => StateType;

export default IReducer;