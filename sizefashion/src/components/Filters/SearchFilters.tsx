import { useFilterContext } from '../../context/filter_context';

export const SearchFilters = () => {
  const {
    updateFilters, filters: { searchTerm },
  } = useFilterContext();

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
