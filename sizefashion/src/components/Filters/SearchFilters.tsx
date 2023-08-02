import { useFilter } from '../../context/filterContext';

export const SearchFilters = () => {
  const {
    updateFilters, filters: { searchTerm },
  } = useFilter();

  return (
    <div className='mb-2 overflow-x-hidden overflow-y-auto rounded-md'>
      <input
        data-testid="search-input"
        type='text'
        name='searchTerm'
        placeholder='Buscar'
        className='tracking-wider p-2 bg-light border-transparent'
        value={searchTerm}
        onChange={e => updateFilters(e)} />
    </div>
  );
};
