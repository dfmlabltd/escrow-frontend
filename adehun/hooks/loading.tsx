import { useCallback, useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
