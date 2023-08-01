import { Filters, ProductList } from '../components'

const ProductsPage = () => {
  return (
    <main>
      <div className='min-h-fit my-28'>
        <div className='w-[90vw] lg:grid-cols-[200px_minmax(950px,_1fr)_100px] grid gap-x-6 gap-y-8 my-0 mx-auto lg:w-[95vw]'>
          <Filters />
          <div>
            <ProductList />
          </div>
        </div>
      </div>
    </main>
  )
}

export default ProductsPage
