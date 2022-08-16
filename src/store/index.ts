import { useCounterStoreForOption } from './counterForOption'
import { useCounterStoreForSetup } from './counterForSetup'

export interface IAppStore {
  useCounterStoreForSetup: ReturnType<typeof useCounterStoreForSetup>
  useCounterStoreForOption: ReturnType<typeof useCounterStoreForOption>
}

const appStore: IAppStore = {} as IAppStore

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.useCounterStoreForSetup = useCounterStoreForSetup()
  appStore.useCounterStoreForOption = useCounterStoreForOption()

  // 重写reset方法
  //   initResetFun(appStore)
}
export default appStore

/**
 * 重构$reset()
 * @desc 因为setup模式编程不支持reset方法，这里要手动重构
 * @param appStore
 */
export const initResetFun = (appStore: IAppStore) => {
  Object.values(appStore).forEach((item) => {
    const initState = {} as Record<string, any>
    Object.entries(item.$state).forEach((item) => {
      initState[item[0]] = item[1]
    })
    item.reset = () => {
      Object.keys(item.$state).forEach((state) => {
        item.$state[state] = initState[state]
      })
    }
  })
}
