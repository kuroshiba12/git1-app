"use client";
import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState<{ message: string; createdAt: string } | null>(null);

  useEffect(() => {
    fetch('/api/hello')
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', textAlign: 'center' }}>
      <h1>Vercel単体でのサーバー構築テスト</h1>
      <div style={{ marginTop: '2rem', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px', display: 'inline-block', textAlign: 'left' }}>
        <h2 style={{ color: '#0070f3' }}>サーバーから届いたデータ</h2>
        {data ? (
          <div>
            <p><strong>メッセージ:</strong> {data.message}</p>
            <p><strong>取得時間:</strong> {data.createdAt}</p>
          </div>
        ) : (
          <p>データを受け取り中...</p>
        )}
      </div>
    </main>
  );
}