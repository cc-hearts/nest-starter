export const DATA_SOURCE = 'DATA_SOURCE'
export const USER_ROLE_REPOSITORY = 'USER_ROLE_REPOSITORY'
export const DEV_ENV = 'development'
export const IS_PROD = process.env.NODE_ENV === 'production'
export const IS_DEV = process.env.NODE_ENV === 'development'
export const DEFAULT_PORT = 18882

export enum METHOD {
  GET = 'get',
  POST = 'post',
  PUT = 'put',
  DELETE = 'delete',
}
