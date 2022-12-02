export interface IContract {
  id: number;
  title: string;
  description: string;
  owner: number;
  beneficiary_wallet: string;
  depositor_wallet: string;
  agreement: string;
  amount: number;
  contract_address: string;
  token: number;
  time_created: string;
  time_updated: string;
  status: number;
}
