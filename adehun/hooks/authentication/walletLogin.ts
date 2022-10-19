import axios from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { IAddress, Address } from "../../interface/address";
import {
  API_ENDPOINT,
  LOGIN_WITH_WALLET_ENDPOINT,
} from "../../utils/constants";

export const useWalletLogin = () => {
  const [address, setAddress] = useState<IAddress>(new Address("", true));

  const [error, setError] = useState<string>("");

  const router = useRouter();

  const handleLogin = useCallback(async () => {
    try {
      let response = await axios.post(
        API_ENDPOINT + LOGIN_WITH_WALLET_ENDPOINT,
        {
          address: address.toString(),
        }
      );

      const secret: string = response.data.secret;

      // do metamask signature here

      const signature: string = "";

      response = await axios.post(API_ENDPOINT + LOGIN_WITH_WALLET_ENDPOINT, {
        secret,
        signature,
      });

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

  return [address.toString, error, handleAddress, handleLogin];
};
