import { productDataType, productDataTypeKey } from "./productData";

export const getImageTags = (image: string) => {
  const regex: RegExp = /src="([^"]+)"/;
  const result: string | null = image.match(regex)?.[1] || '';

  return result
}


export const getUniqueValues = (
  data: productDataType[],
  category: productDataTypeKey,
  noAllValue?: boolean
) => {
  let unique = data
    .map(item => item[category])
    .flat()
    .filter(Boolean)
  if (noAllValue) {
    return [...Array.from(new Set(unique))]
  }
  return ['all', ...Array.from(new Set(unique))]
}
