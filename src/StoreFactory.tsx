import { EventEmitter } from "fbemitter";

function createObservableStore<S>(initialState: S): ObservableStore<S> {
  return new ObservableStore(initialState);
}

const EVENT_UPDATE = "update";

class ObservableStore<S> {
  private emitter: EventEmitter;
  private state: S;
  private revision: number;

  constructor(initialState: S) {
    this.state = initialState;
  }
  update(state) {
    this.state = state;
    this.revision++;
    this.emitter.emit(EVENT_UPDATE);
    // this.histories = []
  }
  getState() {
    return { ...this.state };
  }
  getRevision() {
    return this.revision;
  }
  addListener(callback: (eventType?: string) => void): { remove: () => void } {
    return this.emitter.addListener(EVENT_UPDATE, callback);
  }
}

export { createObservableStore };
