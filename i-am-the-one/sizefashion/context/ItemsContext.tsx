import { IItem } from 'interfaces/IItem';
import React from 'react';
import { fetchProducts } from 'service/items';

interface IItemsContextData {
  fetching: boolean;
  dataFromSource: IItem[];
  manipulatedData: IItem[];
  uniqueCategories: string[];
  populate: () => Promise<void>;
  applyFilter: (text: string ) => void;
  applySorting: (sortOrder: string) => void;
  applyFilterByCategory: (category: string | null) => void;
}

const ItemsContext = React.createContext<IItemsContextData>({} as IItemsContextData);

export const useItemsContext = (): IItemsContextData => React.useContext(ItemsContext)

export function ItemsContextProvider({ children }: { children: React.ReactNode }) {

  const [dataFromSource, setDataFromSource] = React.useState<IItem[]>([])
  const [manipulatedData, setManipulatedData] = React.useState<IItem[]>([])
  const [uniqueCategories, setUniqueCategories] = React.useState<string[]>([])
  const [fetching, setFetching] = React.useState(true);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)
  const [searchText, setSearchText] = React.useState('')

  const applyFilter = (text: string) => {
    setSearchText(text)
    setSelectedCategory(selectedCategory);

    const filteredByText = dataFromSource.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );

    const filteredData = selectedCategory
      ? filteredByText.filter((item) => item.category === selectedCategory)
      : filteredByText;

    setManipulatedData(filteredData);
  };

  const applyFilterByCategory = (category: string | null) => {
    setFetching(true);

    let filteredData = dataFromSource;
    if (searchText) {
      filteredData = dataFromSource.filter((item) =>
        item.title.toLowerCase().includes(searchText.toLowerCase())
      );
    }

    if (category) {
      filteredData = filteredData.filter((item) => item.category === category);
    }

    setManipulatedData(filteredData);
    setFetching(false);
  };

  const populate = async () => {
    setFetching(true)
    try {
      const response = await fetchProducts();
      setDataFromSource(response.data);
      setFetching(false);
    } catch (error) {
      setFetching(false);
    }
  };

  const applySorting = (sortOrder: string) => {
    setFetching(true);
    if (manipulatedData && manipulatedData.length > 0) {
      const sortedData = [...manipulatedData];
      switch (sortOrder) {
        case 'titleAsc':
          sortedData.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case 'titleDesc':
          sortedData.sort((a, b) => b.title.localeCompare(a.title));
          break;

        default:
          break;
      }
      setManipulatedData(sortedData);
    }
    setFetching(false);
  };

  React.useEffect(() => {
    setManipulatedData(dataFromSource);

    const categories = new Set<string>();
    dataFromSource.forEach((item) => {
      if (item.category) {
        categories.add(item.category);
      }
    });
    const uniqueCategories = Array.from(categories);
    setUniqueCategories(uniqueCategories);
  }, [dataFromSource])

  const contextValue: IItemsContextData = {

    // values
    fetching,
    dataFromSource,
    manipulatedData,
    uniqueCategories,

    // functions
    populate,
    applyFilter,
    applySorting,
    applyFilterByCategory
  };

  return <ItemsContext.Provider value={contextValue}>{children}</ItemsContext.Provider>;
}