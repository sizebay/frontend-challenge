import { useFilterContext } from '../../context/filter_context'

export const ClearFilters = () => {
  const { clearFilters } = useFilterContext()
  return (
    <>
      <button type='button' data-testid="clear-btn" className="bg-black hover:bg-black mt-5 text-white font-normal py-1 px-2 rounded" onClick={clearFilters}>
        Limpar Filtros
      </button>
    </>
    
  )
}
