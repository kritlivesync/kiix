import { action, observable, computed } from 'mobx'

let store = null

class ObservableAppStore {
  @observable lastUpdate = 0
  @observable light = false

  constructor () {
    this.lastUpdate =  Date.now()
  }

  @action start = () => {
    this.timer = setInterval(() => {
      this.lastUpdate = Date.now()
      this.light = true
    }, 1000)
  }

  stop = () => clearInterval(this.timer)
}

const observableAppStore = new ObservableAppStore()
export default observableAppStore