import { useCallback, useState } from "react";

const useLoading = (data: boolean = false) => {
  const [isLoading, setIsLoading] = useState<boolean>(data);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, [setIsLoading]);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, [setIsLoading]);

  return {
    isLoading,
    stopLoading,
    startLoading,
  };
};

export default useLoading;
