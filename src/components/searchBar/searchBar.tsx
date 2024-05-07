// import { useSearchProductQuery } from "@/hooks/products/searchProduct";
import { DotSpinner } from "@uiball/loaders";
import { Search } from "lucide-react";
import { SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ScrollArea } from "../ui/scroll-area";
import {Button} from "../ui/button";
import {Input} from "../ui/input";
type SearchInput = {
  search: string;
  className?: string;
};

const SearchBar = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit } = useForm<SearchInput>();
//   const [searchTerm, setSearchTerm] = useState("");
//   const { data } = useSearchProductQuery(searchTerm);

  const [showResults, setShowResults] = useState(false);
  const [selectedItemName, setSelectedItemName] = useState<
    string | string[] | undefined
  >(""); // New state variable

  const onSubmit: SubmitHandler<SearchInput> = async (data: {
    search: SetStateAction<string>;
  }) => {
    setIsLoading(true);
    // setSearchTerm(data.search);
    setShowResults(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsLoading(false);
  };

  const onSearchResultClick = (itemName: string | string[] | undefined) => {
    setSelectedItemName(itemName); // Set the selected item's name
    setShowResults(false);
  };

  return (
    <div className="relative">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex items-center justify-center max-w-base"
      >
        <div className="relative">
          <Search className="absolute z-50 w-5 text-gray-700 left-4 top-2 max-md:hidden dark:text-white" />
          <Input
            {...register("search")}
            placeholder={"Search Movies"}
            value={selectedItemName} // Set the input value to the selected item's name
            onChange={(e) => setSelectedItemName(e.target.value)} // Handle input changes
            className="rounded-r-none pl-12 text-primary pr-20 max-md:pr-0 max-md:pl-4 placeholder:text-sm h-11 border-r-0 focus-visible:ring-[0.2px] focus-visible:ring-primary focus-visible:ring-offset-0 dark:text-white"
          />
          {isLoading && (
            <div className="absolute right-4 top-4 bottom-4">
              <DotSpinner size={20} speed={0.9} color="yellow" />
            </div>
          )}
        </div>
        <Button
          type="submit"
          className="dark:bg-primary max-md:w-fit bg-primary rounded-l-none h-11"
        >
          <div className="max-md:hidden">{"Search"}</div>
          <Search className="w-5 text-gray-700 md:hidden dark:text-white" />
        </Button>
      </form>
      {/* *this is the component that renders the search results */}
      {/* {showResults && (
        <div className="absolute left-0 z-50 flex flex-col bg-white rounded-md right-24">
          {data?.data.length === 0 ? (
            <div className="flex flex-row items-center gap-10 px-4 py-2 hover:bg-slate-100">
              No Items Found
            </div>
          ) : (
            <ScrollArea className="h-72">
              {data?.data.map(
                ({
                  image,
                  name,
                  id,
                }: {
                  image: string;
                  name: LanguageRes;
                  id: number;
                }) => (
                  <SearchResults
                    key={id}
                    image={image}
                    name={name[language] || name["en"]}
                    id={id}
                    onclick={() =>
                      onSearchResultClick(name[language] || name["en"])
                    } // Pass the selected item's name
                  />
                )
              )}
            </ScrollArea>
          )}
        </div>
      )} */}
    </div>
  );
};

export default SearchBar;
