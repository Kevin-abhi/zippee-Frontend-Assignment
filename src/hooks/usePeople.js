import { useEffect, useState } from 'react';
import { fetchPeoplePage } from '../api/swapi';

export function usePeople(initialUrl = 'https://swapi.dev/api/people/'){
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(initialUrl);

  useEffect(()=>{
    let cancelled = false;
    setLoading(true);
    setError(null);
    fetchPeoplePage(url)
      .then(res => { if (!cancelled) setData(res); })
      .catch(err => { if (!cancelled) setError(err.message || 'Failed to fetch'); })
      .finally(()=>{ if (!cancelled) setLoading(false); });
    return ()=> cancelled = true;
  }, [url]);

  return { data, loading, error, setUrl };
}
