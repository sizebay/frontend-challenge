import { useFilterContext } from "../context/filter_context"
import { useProductsContext } from "../context/products_context"
import GridView from "./GridView"
import Loading from "./Loading"

const ProductList = () => {

  const { filteredProducts } = useFilterContext()
  const { productsLoading } = useProductsContext()
  
  if (productsLoading) {
    return <Loading />
  }

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
