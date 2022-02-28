export default interface IDispatcher {
    dispatch (event: string, payload: object): void;
}
