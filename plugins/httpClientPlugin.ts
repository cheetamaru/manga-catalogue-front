import { HttpClient } from "@/services/api/HttpClient"

export default defineNuxtPlugin((nuxtApp) => {
    const baseURL = 'http://127.0.0.1:8000/api'

    const fetchClient = $fetch.create({ baseURL })

    const httpClient = new HttpClient(fetchClient)

    nuxtApp.provide('httpClient', httpClient)
})