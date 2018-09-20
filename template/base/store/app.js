import { action, observable, computed } from 'mobx'

class ObservableAppStore {
  @observable lastUpdate = 0
  @observable light = false
  @observable locale = 'en'

  constructor () {
    this.lastUpdate =  Date.now()
  }

  setLocale (data) {
    this.locale = data
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