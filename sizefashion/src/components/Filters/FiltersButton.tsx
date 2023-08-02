import React from 'react'
import { FcExpand, FcCollapse } from 'react-icons/fc'

interface FiltersButtonProps {
  showFilters: boolean;
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>;
}

export function FiltersButton({ showFilters, setShowFilters }: FiltersButtonProps) {
  return (
    <div className='w-full flex flex-row justify-between md:hidden'>
      <h3>Filtros</h3>
      <hr />
      <button 
        onClick={() => setShowFilters(!showFilters)}>
        {showFilters ? <FcCollapse /> : <FcExpand />}
      </button>
    </div>
  )
}
