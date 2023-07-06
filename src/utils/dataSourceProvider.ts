import { DataSource } from 'typeorm'
import { DATA_SOURCE } from '../constants'

type ctor = { new (...args: any): object }

export const ProviderFactory = (provide: string | ctor, repository: ctor) => {
  return {
    provide,
    useFactory: (dataSource: DataSource) =>
      dataSource.getRepository(repository),
    inject: [DATA_SOURCE],
  }
}
