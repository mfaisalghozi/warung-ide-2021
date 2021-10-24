const ENV_DEV = 'dev'
const ENV_PROD = 'prod'

class Env {
  constructor () {
    let env = ENV_PROD

    if (process.env.NODE_ENV === 'development') {
      env = ENV_DEV
    } else {
      env = ENV_PROD
    } 
    this.env = env
  }

  isProd () {
    return this.env === ENV_PROD
  }

  isDev () {
    return this.env === ENV_DEV
  }
}

export default new Env()
