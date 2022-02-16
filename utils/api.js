const timeoutFetch = (url, options, timeout = 2000) => {
  const controller = new AbortController();
  const abortTimeoutId = setTimeout(() => controller.abort(), timeout);

  const fetchPromise = fetch(url, {
    ...options,
    signal: controller.signal,
  });

  return fetchPromise;
};

const isApiResponding = async () => {
  try {
    await timeoutFetch(
      "http://localhost:5000/api/v1/ping",
      {
        mode: "no-cors",
      },
      2000
    );
    return true;
  } catch (error) {
    return false;
  }
};

export { isApiResponding };
