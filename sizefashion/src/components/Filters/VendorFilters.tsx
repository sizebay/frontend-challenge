import clsx from 'clsx'
import { useFilter } from '../../context/filterContext'
import { getUniqueValues } from '../../utils/helpers'

export const VendorFilters = () => {
  const {
    updateFilters,
    allProducts,
    filters: { vendor },
  } = useFilter()
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
              value={uniqueVendor}
              className={clsx('text-sm my-1 text-black block tracking-wider', {
                'border-b-2': uniqueVendor === vendor
              })}
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
