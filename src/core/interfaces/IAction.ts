export interface IAction<T, P = null> {
    type: T,
    payload: P
}

export interface IActionWithoutPayload <T> {
    type: T,
}

