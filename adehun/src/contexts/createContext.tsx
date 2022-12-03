import React, { createContext, PropsWithChildren, useState } from "react";

export interface ICreateContractContext {
  id: number;
  setId(id: number): void;
  title: string;
  setTitle(title: string): void; //
  description: string;
  setDescription(description: string): void;
  beneficiary_wallet: string;
  setBeneficiaryWallet(beneficiary_wallet: string): void;
  agreement?: string;
  setAgreement(deposit_wallet: string): void;
  amount: number;
  setAmount(amount: number): void;
  token: number;
  setToken(token: number): void;
  draft: boolean;
  setDraft(draft: boolean): void;
}

const CreateContractContextState: ICreateContractContext = {
  id: 0,
  title: "",
  description: "",
  beneficiary_wallet: "",
  agreement: undefined,
  amount: 0,
  token: 0,
  draft: false,
  setId: (id: number): void => {},
  setTitle: (title: string): void => {},
  setDescription: (description: string): void => {},
  setBeneficiaryWallet: (beneficiary_wallet: string): void => {},
  setAgreement: (agreement: string): void => {},
  setAmount: (amount: number): void => {},
  setToken: (token: number): void => {},
  setDraft: (draft: boolean): void => {},
};

export const CreateContractContext = createContext<ICreateContractContext>(
  CreateContractContextState
);

const CreateContractContextProvider: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  const [title, setTitle] = useState<string>(CreateContractContextState.title);
  const [id, setId] = useState<number>(CreateContractContextState.id);
  const [description, setDescription] = useState<string>(
    CreateContractContextState.description
  );
  const [beneficiary_wallet, setBeneficiaryWallet] = useState<string>(
    CreateContractContextState.beneficiary_wallet
  );
  const [agreement, setAgreement] = useState<string>(
    CreateContractContextState.agreement ?? ""
  );
  const [amount, setAmount] = useState<number>(
    CreateContractContextState.amount
  );
  const [token, setToken] = useState<number>(CreateContractContextState.token);
  const [draft, setDraft] = useState<boolean>(CreateContractContextState.draft);

  return (
    <CreateContractContext.Provider
      value={{
        title,
        setTitle,
        id,
        setId,
        description,
        setDescription,
        beneficiary_wallet,
        setBeneficiaryWallet,
        agreement,
        setAgreement,
        amount,
        setAmount,
        token,
        setToken,
        draft,
        setDraft,
      }}
    >
      {children}
    </CreateContractContext.Provider>
  );
};

export default CreateContractContextProvider;
