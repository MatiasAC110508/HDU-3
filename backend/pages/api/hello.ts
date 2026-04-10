// Simple Next.js API route
// Returns a JSON payload with a message and timestamp
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  message: string;
  time: string;
};

// Small helper to set CORS headers for development.
// In production, use a stricter policy or a middleware.
function setCorsHeaders(res: NextApiResponse) {
  // Allow requests from development frontend (adjust origin as needed)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // Always set CORS headers first so preflight or fetch succeed from another origin
  setCorsHeaders(res);

  // Handle preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow GET in this simple example
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET, OPTIONS');
    return res.status(405).end();
  }

  // Return a simple JSON payload
  res.status(200).json({
    message: 'Hello from Next.js API (backend)',
    time: new Date().toISOString(),
  });
}
