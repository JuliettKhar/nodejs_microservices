import configDev from './config.dev.js'
import configProd from './config.prod.js'

const { NODE_ENV } =  process.env
const config = NODE_ENV === 'production' ? configProd : configDev

export {config}