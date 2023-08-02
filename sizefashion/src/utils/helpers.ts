import { ProductDataType, ProductDataTypeKey } from "./productData";

export const getImageTags = (image: string) => {
  const regex: RegExp = /src="([^"]+)"/;
  const result: string = image.match(regex)?.[1] || '';

  return result
}


export const getUniqueValues = (
  data: ProductDataType[],
  category: ProductDataTypeKey,
  noAllValue?: boolean
) => {
  const unique = data
    .map(item => item[category])
    .flat()
    .filter(Boolean)
  if (noAllValue) {
    return [...Array.from(new Set(unique))]
  }
  return ['all', ...Array.from(new Set(unique))]
}
