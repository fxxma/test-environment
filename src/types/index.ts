enum AccountType {
  Savings = "savings",
  Investment = "investment",
  Property = "property",
  Liability = "liability",
}
interface Account {
  name: string;
  type: AccountType;
  balance: number;
  lastUpdated?: Date;
}
interface NetWorthData {
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
