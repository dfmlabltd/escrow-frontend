import { createContext, PropsWithChildren, useCallback, useState } from "react";

export interface IContractWidgetContext {
  state: boolean;
  close(): void;
  open(): void;
}

const ContractWidgetContextState: IContractWidgetContext = {
  state: false,
  open: (): void => {},
  close: (): void => {},
};

export const ContractWidgetContext = createContext<IContractWidgetContext>(
  ContractWidgetContextState
);

const ContractWidgetContextProvider: React.FC<PropsWithChildren> = ({
  children,
}: PropsWithChildren) => {
  const [state, setState] = useState<boolean>(ContractWidgetContextState.state);

  const open = useCallback((): void => {
    setState(true);
  }, [setState]);

  const close = useCallback((): void => {
    setState(false);
  }, [setState]);

  return (
    <ContractWidgetContext.Provider value={{ close, open, state }}>
      {children}
    </ContractWidgetContext.Provider>
  );
};

export default ContractWidgetContextProvider;
