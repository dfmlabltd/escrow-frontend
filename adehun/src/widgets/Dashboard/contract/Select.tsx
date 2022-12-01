import { useCallback, useState, useEffect } from "react";
import authAxios from "../../../axios/auth";
import { Network, Token } from "../../../interface/blockchain";

interface Data {
  id: number;
  name: string;
}

interface Props {
  data: Data[];
  title: string;
  text: string;
  onChange(id: number): void;
}

const SelectWidget: React.FC<Props> = ({
  data,
  title,
  text,
  onChange,
}: Props) => {
  return (
    <>
      <p className="text-sm">{title}</p>
      <label className="block mb-1 sr-only text-adbase font-medium text-white">
        Select an option
      </label>
      <select
        id="option"
        onChange={(e) => {
          onChange(parseInt(e.target.value));
        }}
        className="block text-white mt-1.5 bg-dashbase/40 focus:ring-0 focus:outline-none font-medium text-adbase px-4 py-1.5 text-center w-full outline-none border-none"
      >
        <option value="0">{text}</option>
        {data.map((state: Data) => {
          return (
            <option key={state.id} value={state.id}>
              {state.name}
            </option>
          );
        })}
      </select>
    </>
  );
};

const Select: React.FC = () => {
  const [networks, setNetworks] = useState<Network[]>([]);

  const [currentNetwork, setCurrentNetwork] = useState<number>(0);

  const [tokens, setTokens] = useState<Token[]>([]);

  const [currentToken, setCurrentToken] = useState<number>(0);

  const getNetworks = useCallback(() => {
    const _getNetworks = async () => {
      const { data } = await authAxios.get("blockchain/network/");
      setNetworks(data);
    };
    _getNetworks();
  }, []);

  useEffect(() => {
    getNetworks();
  }, []);

  const getTokensByNetworkID = useCallback(
    (id: number) => {
      const _getTokensByNetworkID = async () => {
        const { data } = await authAxios.get(`blockchain/network/${id}/`);
        setTokens(data);
      };
      _getTokensByNetworkID();
    },
    [setTokens]
  );

  useEffect(() => {
    setTokens([]);
    if (currentNetwork == 0) {
      return;
    }
    getTokensByNetworkID(currentNetwork);
  }, [getTokensByNetworkID, currentNetwork, setTokens]);

  const setCurrentNetworkFunc = useCallback(
    (id: number) => {
      setCurrentNetwork(id);
    },
    [setCurrentNetwork]
  );

  const setCurrentTokenFunc = useCallback(
    (id: number) => {
      setCurrentToken(id);
    },
    [setCurrentToken]
  );

  return (
    <div className="relative block">
      <div className="flex flex-col w-full bg-dashprimary p-6 text-white">
        <SelectWidget
          title="Blockchain Network"
          text="select a network"
          onChange={setCurrentNetworkFunc}
          data={networks}
        />
        <SelectWidget
          title="Token"
          text="select a Token"
          onChange={setCurrentTokenFunc}
          data={tokens}
        />
      </div>
    </div>
  );
};

export default Select;
