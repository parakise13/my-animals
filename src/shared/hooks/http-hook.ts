import { useCallback, useEffect, useRef, useState } from "react";

const useHttpReq = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const activeHttpRequest = useRef<any>([]);

  const sendRequest = useCallback(
    async (
      url: string,
      method = "GET",
      headers = {},
      body: string | FormData | null | undefined = null
    ) => {
      setIsLoading(true);
      setError(null);
      const httpAbortController = new AbortController();
      activeHttpRequest.current.push(httpAbortController);

      try {
        const response = await fetch(url, {
          method,
          headers,
          body,
          signal: httpAbortController.signal,
        });

        const responseData = await response.json();

        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setIsLoading(false);
        return responseData;
      } catch (err: any) {
        setIsLoading(false);
        setError(err.message);
        throw err;
      }
    },
    []
  );

  const clearError = () => {
    setError(null);
  };

  useEffect(() => {
    return () => {
      activeHttpRequest.current.forEach((abortCtrl: any) => abortCtrl.abort());
    };
  }, []);

  return { isLoading, error, sendRequest, clearError };
};

export default useHttpReq;
