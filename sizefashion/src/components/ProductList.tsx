import { useFilter } from "../context/filterContext"
import GridView from "./GridView"

const ProductList = () => {

  const { filteredProducts } = useFilter()

  if (filteredProducts.length < 1) {
    return (
      <h5>
        Desculpe, não encontramos nenhum produto para sua pesquisa
      </h5>
    )
  }

  return <GridView filteredProducts={filteredProducts}></GridView>
}

export default ProductList
