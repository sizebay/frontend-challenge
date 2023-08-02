import { useFilter } from '../../context/filterContext'

export const ClearFilters = () => {
  const { clearFilters } = useFilter()
  return (
    <button type='button' data-testid="clear-btn" className="bg-black hover:bg-black mt-5 text-white font-normal py-1 px-2 rounded" onClick={clearFilters}>
      Limpar Filtros
    </button>
  )
}
