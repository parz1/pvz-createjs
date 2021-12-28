export class Store {
  constructor(reducers = {}, initialState = {}) {
    this.subscribers = []
    this.reducers = reducers
    this.state = this.reduce(initialState, {})
    this.action = {}
  }
  get v() {
    return this.state
  }
  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn]
    fn(this.v, this.action)
    return () => {  // instead of additional unsubscribe fn
      this.subscribers = this.subscribers.filter(sub => sub !== fn)
    }
  }
  dispatch(action) {
    console.log(action)
    this.action = action
    this.state = this.reduce(this.state, this.action)
    this.subscribers.forEach(fn => fn(this.value, this.action))
  }

  reduce(state, action) {
    const newState = {}
    for(const prop in this.reducers) {
      newState[prop] = this.reducers[prop](state[prop], action)
    }
    return newState
  }
}