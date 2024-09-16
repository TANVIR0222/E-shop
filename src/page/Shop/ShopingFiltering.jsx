import { Button } from "@mui/material";

const ShopingFiltering = ({
  filters,
  filterState,
  setFilterState,
  clearFilters,
}) => {
  return (
    <div className=" space-y-5 flex-shrink-0">
      <h3>Filters</h3>

      {/* categoris */}
      <div className="flex flex-col space-y-2">
        <h1 className=" font-medium text-lg">Categorys</h1>
        <hr />
        {filters.category.map((category, index) => (
          <label key={index} className=" flex capitalize cursor-pointer">
            <input
              type="radio"
              name=""
              id="category"
              className="radio checked:bg-red-500"
              value={category}
              checked={filterState.category === category}
              onChange={(e) =>
                setFilterState({ ...filterState, category: e.target.value })
              }
            />
            <h1 className="ml-2 text-sm">{category}</h1>
          </label>
        ))}
      </div>

      {/* colors */}
      <div className="flex flex-col space-y-2">
        <h1 className=" font-medium text-lg">Color</h1>
        <hr />
        {filters.color.map((color, index) => (
          <label key={index++} className=" flex capitalize cursor-pointer">
            <input
              type="radio"
              name="colors"
              id="colors"
              className="radio checked:bg-red-500"
              value={color}
              checked={filterState.color === color}
              onChange={() => setFilterState({ ...filterState, color: color })}
            />
            <h1 className="ml-2 text-sm">{color}</h1>
          </label>
        ))}
      </div>

      {/* Prices */}
      <div className="flex flex-col space-y-2">
        <h1 className=" font-medium text-lg">Prices</h1>
        <hr />
        {filters.priceRange.map((range, index) => (
          <label key={index} className=" flex capitalize cursor-pointer">
            <input
              type="radio"
              name="priceRange"
              className="radio checked:bg-red-500"
              id="priceRange"
              value={`${range.min} - ${range.max}`}
              checked={filterState.priceRange === `${range.min} - ${range.max}`}
              onChange={(e) =>
                setFilterState({ ...filterState, priceRange: e.target.value })
              }
            />
            <h1 className="ml-2 text-sm">{range.lable}</h1>
          </label>
        ))}
      </div>

      <Button onClick={clearFilters} variant="contained">
        Clear All{" "}
      </Button>
    </div>
  );
};

export default ShopingFiltering;
