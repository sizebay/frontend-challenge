"use client";
import Item from "@interfaces/Item";
import { fetchProducts } from "@service/items";
import React from "react";

interface ItemsContext {
  fetching: boolean;
  dataFromSource: Item[];
  manipulatedData: Item[];
  uniqueCategories: string[];
  applyFilter: (text: string) => void;
  applySorting: (sortOrder: string) => void;
  applyFilterByCategory: (category: string | null) => void;
  grabItem: (index: number) => Promise<Item>;
  populate: () => Promise<void>;
}

const Items = React.createContext<ItemsContext>({} as ItemsContext);

export const useItems = (): ItemsContext => React.useContext(Items)

const ItemsContextProvider = ({ children }: { children: React.ReactNode }) => {

  const [dataFromSource, setDataFromSource] = React.useState<Item[]>([])
  const [manipulatedData, setManipulatedData] = React.useState<Item[]>([])
  const [uniqueCategories, setUniqueCategories] = React.useState<string[]>([])
  const [fetching, setFetching] = React.useState(true);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)
  const [searchText, setSearchText] = React.useState('')

  const applyFilter = (text: string) => {
    setSearchText(text)

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
      setSelectedCategory(category); ItemsContextProvider
      filteredData = filteredData.filter((item) => item.category === category);
    }

    setManipulatedData(filteredData);
    setFetching(false);
  };

  const populate = React.useCallback(async () => {
    setFetching(true);
    try {
      const response = await fetchProducts();
      setDataFromSource(response.data);
      setFetching(false);
    } catch (error) {
      setFetching(false);
    }
  }, []);

  const grabItem = React.useCallback(
    async (index: number): Promise<Item> => {
      try {
        const response = await fetchProducts();
        return response.data[index];
      } catch (error) {
        console.error("handle error"); throw error;
      }
    }, []
  );

  const applySorting = (sortOrder: string, clearFilters?: boolean) => {
    setFetching(true);
    if (clearFilters) resetFilters()

    if (manipulatedData && manipulatedData.length > 0) {
      const sortedData = [...manipulatedData];
      switch (sortOrder) {
        case "titleAsc":
          sortedData.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case "titleDesc":
          sortedData.sort((a, b) => b.title.localeCompare(a.title));
          break;

        default:
          break;
      }
      setManipulatedData(sortedData);
    }

    setFetching(false);
  };

  const resetFilters = (): void => {
    setManipulatedData(dataFromSource);
    setSelectedCategory(null)
  }

  React.useEffect(() => { populate(); }, [])

  React.useEffect(() => {
    resetFilters();
    const categories = new Set<string>();
    dataFromSource.forEach((item) => { if (item.category) categories.add(item.category); });
    const uniqueCategories = Array.from(categories);
    setUniqueCategories(uniqueCategories);
  }, [dataFromSource])

  const contextValue: ItemsContext = {

    // values
    fetching,
    dataFromSource,
    manipulatedData,
    uniqueCategories,

    // functions
    applyFilter,
    applySorting,
    applyFilterByCategory,
    grabItem,
    populate
  };

  return <Items.Provider value={contextValue}>{children}</Items.Provider>;
}

export default ItemsContextProvider;
