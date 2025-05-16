import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let abort = false;
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw Error("Could not fetch the data");
        return res.json();
      })
      .then((data) => {
        if (!abort) {
          setData(data);
          setError(null);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (!abort) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => (abort = true); // useEffect cleanup
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
