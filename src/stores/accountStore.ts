import { defineStore } from 'pinia';
import { generateId } from '../utils/idGenerator';
import { Account, NetWorthData, AccountType } from '../types';

export const userAccountStore = defineStore('account', {
  state: () => ({
    accounts: [] as Account[],
    netWorth: 0,
    lastUpdated: null as Date | null,
  }),
  actions: {
    addAccount(acc: Omit<Account, 'id'>) {
      const newAccount = {
        ...acc,
        id: generateId(),
      };
      this.accounts.push(newAccount);
      this.lastUpdated = new Date();
      this.netWorth += acc.balance;
    },
    updateAccount(updatedAccount: Account) {
      const index = this.accounts.findIndex(
        (acc) => acc.id === updatedAccount.id
      );
      if (index !== -1) {
        const oldBal = this.accounts[index].balance;
        this.accounts[index] = updatedAccount;
        this.lastUpdated = new Date();
        this.netWorth += updatedAccount.balance - oldBal;
      }
    },
    deleteAccount(delAccount: Account) {
      const index = this.accounts.findIndex((acc) => acc.id === delAccount.id);
      if (index !== -1) {
        this.netWorth -= delAccount.balance;
        this.accounts.splice(index, 1);
        this.lastUpdated = new Date();
      }
    },
    calculateNetWorth() {
      let bal = 0;
      for (const acc of this.accounts) {
        bal += acc.balance;
      }
      this.netWorth = bal;
      this.lastUpdated = new Date();
    },
  },
  getters: {},
});
