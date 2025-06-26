import React, { useEffect, useState } from 'react';

interface WithJsonDataProps<T> {
  url: string;
  children: (data: T) => React.ReactNode;
}

export function WithJsonData<T>({ url, children }: WithJsonDataProps<T>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => setShowLoading(true), 500);

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        setData(json);
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err);
        }
      })
      .finally(() => {
        clearTimeout(timeout);
        setShowLoading(false);
      });

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, [url]);

  if (error) {
    return <div className="text-red-600">Failed to load data: {error.message}</div>;
  }

  if (!data) {
    return showLoading ? <div>Loading...</div> : null;
  }

  return <>{children(data)}</>;
}
