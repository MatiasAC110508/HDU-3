import { useEffect, useState } from 'react';

// ApiCard: fetches the backend API and renders the result as card content.
// Designed to be used inside a Card component so errors and loading appear inside the card.
export function ApiCard() {
  const [data, setData] = useState<{ message: string; time: string } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('http://localhost:3000/api/hello');
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        if (mounted) setData(json);
      } catch (err: any) {
        if (mounted) setError(err.message || 'Unknown error');
      } finally {
        if (mounted) setLoading(false);
      }
    };

    fetchData();

    return () => {
      mounted = false;
    };
  }, []);

  // Keep visuals subtle so they fit inside the card design
  return (
    <div>
      {loading && <p className="text-sm text-gray-200">Loading status...</p>}
      {error && (
        <div className="text-sm text-yellow-300">
          <p>Unable to reach backend.</p>
          <p className="text-xs text-gray-300">{error}</p>
        </div>
      )}
      {data && (
        <div className="text-sm text-gray-200">
          <p className="font-medium">Message: {data.message}</p>
          <p className="text-xs text-gray-300">Time: {data.time}</p>
        </div>
      )}
    </div>
  );
}
