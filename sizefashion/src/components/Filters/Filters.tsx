import { useState } from "react"
import { CategoryFilters } from "./CategoryFilters"
import { ClearFilters } from "./ClearFilters"
import { FiltersButton } from "./FiltersButton"
import { SearchFilters } from "./SearchFilters"
import { VendorFilters } from "./VendorFilters"

const Filters = () => {
  const [showFilters, setShowFilters] = useState(false)
  return (
    <div>
      <FiltersButton
        showFilters={showFilters}
        setShowFilters={setShowFilters}
      />
      <div className={showFilters ? 'block' : 'hidden md:block md:top-4 md:sticky'}>
        <form onSubmit={e => e.preventDefault()}>
          <SearchFilters />
          <CategoryFilters />
          <VendorFilters />
        </form>
        <ClearFilters />
      </div>
    </div>
  )
}

export default Filters
