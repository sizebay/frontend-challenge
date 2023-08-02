import clsx from 'clsx'
import { useFilter } from '../../context/filterContext'
import { getUniqueValues } from '../../utils/helpers'


export const CategoryFilters = () => {
  const { updateFilters, allProducts, filters: { category } } = useFilter()
  const uniqueCategories = getUniqueValues(allProducts, 'category')

  return (
    <div>
      <label className='block text-black text-md font-bold mb-2'>Categorias</label>
      <div className='overflow-x-hidden overflow-y-auto max-h-96'>
        {uniqueCategories.map((uniqueCategory) => {
          return (
            <button
              data-testid="category"
              key={`${uniqueCategory}`}
              type='button'
              name='category'
              value={uniqueCategory}
              className={clsx('text-sm my-1 text-black block tracking-wider', {
                'border-b-2': uniqueCategory === category
              })}
              onClick={e => updateFilters(e)}
            >
              {uniqueCategory}
            </button>
          )
        })}
      </div>
    </div>
  )
}
