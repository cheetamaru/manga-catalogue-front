import { BaseApiService } from "./BaseApiService";

export class ApiService {
    [prop: string]: BaseApiService | ((name: string, api: BaseApiService) => void)

    setApi (name: string, api: BaseApiService) {
        this[name] = api
    }
}
