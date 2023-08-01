import { useFilterContext } from '../../context/filter_context'
import { getUniqueValues } from '../../utils/helpers'


export const CategoryFilters = () => {
  const { updateFilters, allProducts, filters: { category } } = useFilterContext()
  const uniqueCategories = getUniqueValues(allProducts, 'category')

  return (
    <div>
      <label className='block text-black text-md font-bold mb-2'>Categorias</label>
      <div className='overflow-x-hidden overflow-y-auto max-h-96'>
        {uniqueCategories.map((uniqueCategory) => {
          if (typeof uniqueCategory === 'string') { // p/ ts não reclamar
            return (
              <button
                data-testid="category"
                key={`${uniqueCategory}`}
                type='button'
                name='category'
                className={ 'text-sm my-1 text-black block tracking-wider ' 
                  + (uniqueCategory.toLowerCase() === category ? 'border-b-2' : undefined) }
                onClick={e => updateFilters(e)}
              >
                {uniqueCategory}
              </button>
            )
          }
          return null
        })}
      </div>
    </div>
  )
}
