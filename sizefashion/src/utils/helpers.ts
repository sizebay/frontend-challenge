export const getImageTags = (image: string) => {
  const regex: RegExp = /src="([^"]+)"/;
  const result: string | null = image.match(regex)?.[1] || '';

  return result
}
