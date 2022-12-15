export default defineNuxtPlugin(() => {
  const { api } = useApi(useNuxtApp().$httpClient)

  return {
    provide: {
      api,
    },
  }
})
