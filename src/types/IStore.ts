export interface IStore<S> extends Object {
  state: S;
  revision: number;
}
