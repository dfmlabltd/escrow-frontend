import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { IAddress, Address } from "../../interface/address";
import {
  API_ENDPOINT,
  LOGIN_WITH_WALLET_ENDPOINT,
} from "../../utils/constants";
import { setAccessToken, setRefreshToken } from "../../utils/helpers";

const useWalletLogin = () => {
  const [address, setAddress] = useState<IAddress>(new Address("", true));

  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleLogin = useCallback(async () => {
    try {
      const getSecret = await axios.post(LOGIN_WITH_WALLET_ENDPOINT, {
        address: address.toString(),
      });

      const { secret } = getSecret.data;

      // do metamask signature here

      const signature: string = "";

      const getToken = await axios.post(
        API_ENDPOINT + LOGIN_WITH_WALLET_ENDPOINT,
        {
          secret,
          signature,
        }
      );

      const { access_token, refresh_token } = getToken.data;
      setAccessToken(access_token);
      setRefreshToken(refresh_token);

      router.push("/dashboard/");
    } catch (e: any) {
      setError(e.response.data.details);
      return;
    }
  }, [address]);

  const handleAddress = (address: string): void => {
    try {
      setAddress(new Address(address));
    } catch (error) {
      setError("invalid email address");
    }
  };

  return { address: address.toString(), error, handleAddress, handleLogin };
};

export default useWalletLogin;
