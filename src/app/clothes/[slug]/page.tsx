import { normalizeImage } from '@/functions/normalizeImage';
import { parseURL } from '@/functions/parseUrl';

const Page = async ({ params }) => {
  const decodedItem = parseURL(params);
  const formattedPicture = normalizeImage(decodedItem.image);
  return (
    <div>
      <p>{decodedItem.category}</p>
      <p>{decodedItem.title}</p>
      <p>{decodedItem.vendor}</p>
      <img src={formattedPicture} alt={decodedItem.title} />
    </div>
  );
};

export default Page;
