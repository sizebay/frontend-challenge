export const normalizeImage = (imageData: string): string => {
  const getSrcData = /src="\/\/([^"]+)"/;
  const match = RegExp(getSrcData).exec(imageData);

  if (match && match.length === 2) {
    const imageUrl = `https://${match[1]}`;
    return imageUrl;
  }

  return imageData;
};
