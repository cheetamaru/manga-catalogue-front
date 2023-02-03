import debounce from 'lodash.debounce'
import type { Ref } from 'vue'
import { debounceTime } from '~~/constants'

export const useDebouncedEntity = <T>(entity: Ref<T>, timeout = debounceTime.defaultDebounce) => {
  const update = (val: T) => {
    entity.value = val
  }

  const debouncedUpdate = debounce(update, timeout)

  const updateDebounced = (val: T) => {
    if (!val) {
      debouncedUpdate.cancel()
      update(val)
      return
    }

    debouncedUpdate(val)
  }

  return {
    updateDebounced,
  }
}
