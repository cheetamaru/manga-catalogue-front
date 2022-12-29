import debounce from 'lodash.debounce'
import type { Ref } from 'vue'

export const useDebouncedEntity = <T>(entity: Ref<T>, timeout = 300) => {
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
