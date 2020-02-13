import { EventEmitter } from "fbemitter";
import { State } from "./types/State";

function createObservableStore<S>(initialState: S): ObservableStore<S> {
  return new ObservableStore(initialState);
}

const EVENT_UPDATE = "update";

export class ObservableStore<S> {
  state: S & State;
  private emitter: EventEmitter;
  private revision: number;

  constructor(initialState: S) {
    this.state = initialState;
    this.emitter = new EventEmitter();
  }
  update(state: S) {
    this.state = state;
    this.revision++;
    this.emitter.emit(EVENT_UPDATE);
    // this.histories = []
  }
  asyncUpdate(state: S) {
    // TODO: implements
  }
  getState() {
    if (Array.isArray(this.state)) {
      return this.state.concat();
    }
    return { ...this.state };
  }
  getRevision() {
    return this.revision;
  }
  addListener(callback: (eventType?: string) => void): { remove: () => void } {
    return this.emitter.addListener(EVENT_UPDATE, callback);
  }
  removeAllListeners() {
    return this.emitter.removeAllListeners(EVENT_UPDATE);
  }
}

export { createObservableStore };
