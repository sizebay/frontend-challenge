import React from 'react'
import { FcExpand, FcCollapse } from 'react-icons/fc'

export const FiltersButton: React.FC<{
  showFilters: boolean
  setShowFilters: React.Dispatch<React.SetStateAction<boolean>>
}> = ({ showFilters, setShowFilters }) => {
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