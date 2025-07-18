
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(process.env.NEXT_PUBLIC_API_URL + '/api/trend/AAPL')
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>Trend & Watchlist Dashboard</h1>
      {data ? (
        <div style={{ marginTop: '10px', backgroundColor: '#f3f3f3', padding: '10px', borderRadius: '5px' }}>
          <p><b>Ticker:</b> {data.ticker}</p>
          <p><b>Daily Trend:</b> {data.dailyTrend}</p>
          <p><b>3-Day Trend:</b> {data.threeDayTrend}</p>
          <p><b>Score:</b> {data.score}</p>
          <p><b>Rating:</b> {data.rating}</p>
          <p><b>Changed:</b> {data.changed}</p>
          <p><b>Timestamp:</b> {data.timestamp}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
