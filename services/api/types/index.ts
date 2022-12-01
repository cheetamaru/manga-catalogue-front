export type RequestPayload = {
    method: 'get',
    url: string,
    query?: object,
    body?: object
}

export type MethodRequestPayload = Omit<RequestPayload, "method">