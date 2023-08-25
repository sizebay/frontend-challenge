import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import { externalDataCache } from '../../utils/dataStorage';

type Response = {
  params: {
    uuid: string[];
  };
} & NextApiResponse;

export const GET = async (_: NextApiRequest, res: Response) => {
  const uuid = res.params.uuid[0];

  try {
    const item = externalDataCache.find(item => item.uuid === uuid);

    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }

    return NextResponse.json(item, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Error fetching data' },
      { status: 500 }
    );
  }
};
