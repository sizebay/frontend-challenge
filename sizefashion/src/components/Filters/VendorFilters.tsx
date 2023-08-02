import { useFilterContext } from '../../context/filter_context'
import { getUniqueValues } from '../../utils/helpers'

export const VendorFilters = () => {
  const {
    updateFilters,
    allProducts,
    filters: { vendor },
  } = useFilterContext()
  const uniqueVendors = getUniqueValues(allProducts, 'vendor')
  return (
    <div>
      <label className='block text-black text-md font-bold my-2'>Marcas</label>
      <div className='overflow-x-hidden overflow-y-auto max-h-96'>
        {uniqueVendors.map((uniqueVendor) => {
          return (
            <button
              data-testid="vendor"
              key={`${uniqueVendor}`}
              type='button'
              name='vendor'
              className={ 'text-sm my-1 text-black block tracking-wider ' 
                + (uniqueVendor === vendor ? 'border-b-2' : undefined) }
              onClick={e => updateFilters(e)}
            >
              {uniqueVendor}
            </button>
          )
        })}
      </div>
    </div>
  )
}
