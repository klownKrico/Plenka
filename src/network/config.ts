class Config {
	private readonly target_host : string = 'http://192.168.2.100'
	config_in():string {
		return this.target_host
			  }
}

export const config : Config = new Config()
export default config
