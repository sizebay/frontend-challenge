import { useFilter } from "../context/filterContext"
import { useProducts } from "../context/productsContext"
import GridView from "./GridView"
import Loading from "./Loading"

const ProductList = () => {

  const { filteredProducts } = useFilter()
  const { productsLoading } = useProducts()
  
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
