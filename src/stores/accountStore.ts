import { defineStore } from "pinia";
import { Account, NetWorthData, AccountType } from "../types";

export const useAccountStore = defineStore("account", {
  state: () => ({
    accounts: [] as Account[],
    netWorth: 0,
    lastUpdated: null as Date | null,
  }),
});
