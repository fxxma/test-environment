export enum AccountType {
  Savings = 'savings',
  Investment = 'investment',
  Property = 'property',
  Liability = 'liability',
}
export interface Account {
  id: string;
  name: string;
  type: AccountType;
  balance: number;
  lastUpdated?: Date;
}
export interface NetWorthData {
  asset: number;
  liability: number;
  calcDate: Date;
  listAccount: Array<Account>;
  netWorth: number;
  lastUpdated?: Date;
}
interface CSV {
  headers: Array<string>;
  row: Array<Array<string>>;
}
