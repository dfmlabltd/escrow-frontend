import { useCallback, useState, useEffect } from "react";
import authAxios from "../../axios/auth";
import useLoading from "../../hooks/loading";
import { Network, Token } from "../../interfaces/blockchain";

interface Data {
  id: number;
  name: string;
}

interface Props {
  data: Data[];
  title: string;
  text: string;
  onChange(id: any): void;
  value?: number;
}

export const SelectWidget: React.FC<Props> = ({
  data,
  title,
  text,
  onChange,
  value,
}: Props) => {
  return (
    <>
      <div className="relative">
        <p className="text-sm">{title}</p>
        <label className="block mb-1 sr-only text-adbase font-medium text-white">
          Select an option
        </label>
        <select
          onChange={(e) => {
            onChange(parseInt(e.target.value));
          }}
          value={value}
          defaultValue={value}
          className="block h-12 py-1 text-white mt-1.5 bg-gray-800 focus:ring-0 focus:outline-none font-medium text-sm px-4 text-center w-full outline-none border-none"
        >
          <option key={0} value="0">
            {text}
          </option>
          {data.map((state: Data) => {
            return (
              <option key={state.id} value={state.id}>
                {state.name}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export interface IWallet {
  id: number;
  address: string;
}

interface WalletSelectWidgetProps {
  title: string;
  text: string;
  onChange(id: any): void;
  data: IWallet[];
  value: number;
}

export const WalletSelectWidget: React.FC<WalletSelectWidgetProps> = ({
  data,
  title,
  text,
  onChange,
  value,
}: WalletSelectWidgetProps) => {
  return (
    <>
      <div className="relative">
        <p className="relative text-white text-adbase block font-medium">
          {title}
        </p>
        <label className="block mb-1 sr-only text-adbase font-medium text-white">
          Select an option
        </label>
        <select
          onChange={(e) => {
            onChange(parseInt(e.target.value));
          }}
          value={value}
          defaultValue={value}
          className="block h-12 py-1 text-white mt-1.5 bg-gray-800 focus:ring-0 focus:outline-none font-medium text-sm px-4 text-center w-full outline-none border-none"
        >
          <option key={0} value="0">
            {text}
          </option>
          {data.map((state: IWallet) => {
            return (
              <option key={state.id} value={state.id}>
                {state.address}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

interface SetTokenProps {
  setCurrentToken(e: any): void;
  current_network?: number;
  current_token?: number;
}

const Select: React.FC<SetTokenProps> = ({
  setCurrentToken,
  current_network = 0,
  current_token = 0,
}: SetTokenProps) => {
  const [networks, setNetworks] = useState<Network[]>([]);

  const [currentNetwork, setCurrentNetwork] = useState<number>(0);

  const [tokens, setTokens] = useState<Token[]>([]);

  const { isLoading, startLoading, stopLoading } = useLoading(true);

  useEffect(() => {
    setCurrentNetwork(current_network);
  }, [current_network]);

  const getNetworks = useCallback(() => {
    const _getNetworks = async () => {
      const { data } = await authAxios.get("blockchain/network/");
      setNetworks(data);
    };
    _getNetworks();
  }, []);

  useEffect(() => {
    getNetworks();
  }, [getNetworks]);

  const getTokensByNetworkID = useCallback(
    (id: number) => {
      startLoading();
      const _getTokensByNetworkID = async () => {
        const { data } = await authAxios.get(`blockchain/network/${id}/`);
        setTokens(data);
        stopLoading();
      };
      _getTokensByNetworkID();
    },
    [setTokens, startLoading, stopLoading]
  );

  useEffect(() => {
    setTokens([]);
    if (currentNetwork === 0) {
      startLoading();
      return;
    }
    getTokensByNetworkID(currentNetwork);
  }, [getTokensByNetworkID, currentNetwork, setTokens, startLoading]);

  const setCurrentNetworkFunc = useCallback(
    (id: number) => {
      setCurrentNetwork(id);
    },
    [setCurrentNetwork]
  );

  return (
    <div className="relative block">
      <div className="flex flex-col w-full bg-dashprimary gap-4 text-white">
        <SelectWidget
          title="Blockchain Network"
          text="select a network"
          onChange={setCurrentNetworkFunc}
          value={currentNetwork}
          data={networks}
        />
        {isLoading ? (
          <></>
        ) : (
          <SelectWidget
            title="Token"
            text="select a Token"
            onChange={setCurrentToken}
            data={tokens}
            value={current_token}
          />
        )}
      </div>
    </div>
  );
};

export default Select;