export interface Network {
  id: number;
  name: string;
  rpc: number;
  chain_id: number;
  explorer_url: string;
  symbol: string;
  icon: string;
}

export interface Token {
  id: number;
  name: string;
  contract_address: string;
  symbol: string;
  decimal: number;
  network: number | Network;
  icon: string;
}
