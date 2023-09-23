import { DATA_SOURCE, IS_DEV } from '../constants'
import { getMysqlConfig } from '../utils/env'
import { DataSource } from 'typeorm'
import { resolve } from 'path'

// 全局的可注入的 database provider
export const DatabaseProvider = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const mysqlConfig = getMysqlConfig() || {}
      const databaseConfig = {
        ...mysqlConfig,
        entities: [resolve(__dirname, '..', './**/*.entity.js')],
        synchronize: IS_DEV,
      }
      const databaseSource = new DataSource(databaseConfig)
      return databaseSource.initialize()
    },
  },
]
