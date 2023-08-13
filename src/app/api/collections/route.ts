import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET(_: NextApiRequest, res: NextApiResponse) {
  const response = await axios.get(
    'https://static.sizebay.technology/assets/storeCollections.json'
  );

  if (!response.data)
    return res.status(500).json({ error: 'Internal error server' });

  return NextResponse.json(response.data, { status: 200 });
}
