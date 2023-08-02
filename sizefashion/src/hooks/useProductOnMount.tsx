import { useParams } from "react-router-dom"
import { useProducts } from "../context/productsContext"
import { useEffect } from "react"

function useProductOnMount() {
  const { slug } = useParams<{ slug: string }>()
  const { fetchSingleProduct, allProducts } = useProducts()

  useEffect(() => {
    if (slug) {
      fetchSingleProduct(slug)
    }
    // eslint-disable-next-line
  }, [slug, allProducts])
}

export default useProductOnMount