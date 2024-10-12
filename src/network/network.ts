import axios, {AxiosInstance, RawAxiosRequestHeaders, AxiosResponse, AxiosRequestConfig} from "axios";
import {config} from './config'

class Network {

	private adminApi : AxiosInstance = axios.create({
		baseURL : config.config_in(),
		timeout : 3000,
		headers : <RawAxiosRequestHeaders> {
			"Content-Type" : 'application/json; charset=UTF-8',
		}
	})

	AdminPost<T>(url : string, payload : Record<string, any>) : Promise<T> {
		return new Promise<T>((resolve, reject) => {
			const rurl : AxiosRequestConfig = {withCredentials: true}
			this.adminApi.post(url, payload, rurl)
				.then((res : AxiosResponse<T>) => {resolve(res.data)})
				.catch((err) => {
					console.error(err.message || 'неизвестная ошибка')
					reject(err)
				})
		})
	}
}


const network : Network = new Network()
export default network
