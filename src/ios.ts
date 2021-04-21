import { IStorageEngine } from './storage'
const AsyncStorage = require('@react-native-async-storage/async-storage')
  .default

const Implementation: IStorageEngine = {
  get(key) {
    return AsyncStorage.getItem(key).then((val: any) => JSON.parse(val))
  },
  save(key, value) {
    // AsyncStorage throws an exception for undefined values
    if (!key || !value) return Promise.resolve()
    return AsyncStorage.setItem(key, JSON.stringify(value))
  },
  delete(key) {
    return AsyncStorage.removeItem(key)
  },
  keys() {
    return AsyncStorage.getAllKeys()
  },
}

export default Implementation
