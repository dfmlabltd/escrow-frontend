import { useState } from "react";

const useLoading = (data: boolean = false) => {
  const [isLoading, setIsLoading] = useState<boolean>(data);

  const startLoading = () => {
    setIsLoading(true);
  };

  const stopLoading = () => {
    setIsLoading(false);
  };

  return {
    isLoading,
    stopLoading,
    startLoading,
  };
};

export default useLoading;
