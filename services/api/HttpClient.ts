type RequestPayload = {
    method: 'get',
    url: string,
    query?: object,
    body?: object
}

type MethodRequestPayload = Omit<RequestPayload, "method">

export class HttpClient {
    private readonly client: typeof $fetch;

    constructor(client: typeof $fetch) {
        this.client = client
    }

    async request({
        method,
        url,
        query,
        body
    }: RequestPayload) {
        // try {
            const data = await this.client(url,
                {
                    method,
                    query,
                    body
                })
            return data
        // } catch (error) {
        //     return error.data
        // }
    }

    // post () {

    // }

    get (payload: MethodRequestPayload) {
        return this.request({
            method: 'get',
            ...payload
        })
    }

    // patch () {
        
    // }

    // delete () {
        
    // }
}