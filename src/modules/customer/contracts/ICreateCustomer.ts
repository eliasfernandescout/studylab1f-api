import { Customer } from '../infra/mongodb/entities'

export interface ICreateCustomerContract {
  createCustomer: (params: NCreateCustomerContract.Params) => NCreateCustomerContract.Result
}

export namespace NCreateCustomerContract {
  export type Params = {
    name: string
    cpf: string
    birthDate: string

  }

  export type Result = Promise<Customer>
}
