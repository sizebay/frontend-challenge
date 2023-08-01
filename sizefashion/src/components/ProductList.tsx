import { productDataType } from "../utils/productData"
import GridView from "./GridView"

const ProductList = () => {

  const filteredProducts:productDataType[] = [
    {
      'category': 'male',
      'image': '123',
      'title': 'roupa',
      'vendor': 'vendedor'
    },
    {
      'category': 'male',
      'image': '123',
      'title': 'roupa',
      'vendor': 'vendedor'
    },
    {
      'category': 'male',
      'image': '123',
      'title': 'roupa',
      'vendor': 'vendedor'
    }
  ]

  if (false) {
    return (
      <h5>
        Desculpe, não encontramos nenhum produto para sua pesquisa
      </h5>
    )
  }

  return <GridView filteredProducts={filteredProducts}></GridView>
}

export default ProductList
