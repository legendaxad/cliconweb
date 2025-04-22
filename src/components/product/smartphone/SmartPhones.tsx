import { useEffect, useState } from "react";
import {
  BrandsGrid,
  CategoryName,
  GridDataForm,
  ImageTop,
  LastSort,
  LeftDiv,
  MainDiv,
  Navigation,
  NoItem,
  PageButton,
  Rightdiv,
  TextSection,
  TopDiv,
  Wrapper,
} from "../pages.style";
import Loop from "../../../assets/navbar/MagnifyingGlass.svg";
import Shop from "../../../assets/shop/House.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { Autocomplete, TextField } from "@mui/material";
import { smartphonesData } from "../../mock/smartPhone";
import StarRating from "../../homepage/small.one/starRating";
import { Tag } from "primereact/tag";
import { DataType } from "../../type/type";
import { OrbitProgress } from "react-loading-indicators";
const brands = [
  "Apple",
  "Google",
  "Microsoft",
  "Samsung",
  "Dell",
  "HP",
  "Symphony",
  "Xiaomi",
  "Sony",
  "Panasonic",
  "LG",
  "Intel",
  "Sale",
];
const categories = [
  ["Game", "TV", "iPhone", "Laptops"],
  ["Macbook", "SSD", "Graphics Card"],
  ["Power Bank", "Smart TV", "Speaker"],
  ["Tablet", "Microwave", "Samsung"],
];
const sortOptions = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "priceAsc" },
  { label: "Price: High to Low", value: "priceDesc" },
  { label: "Rating", value: "rating" },
  { label: "Name: A to Z", value: "nameAZ" },
  { label: "Name: Z to A", value: "nameZA" },
];
const SmartPhones = () => {
  // const categoryName = "Smart Phones";
  // const products = smartphonesData;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [activeCategory, setActiveCategory] = useState<string>("");

  const [sortOption, setSortOption] = useState("default");
  const [sortedData, setSortedData] = useState(smartphonesData);
  const [searchTerm, setSearchTerm] = useState("");
  //brand
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  //price for
  const [priceRange, setPriceRange] = useState<number[]>([50, 3000]);
  const [priceRadioValue, setPriceRadioValue] = useState<string>("All");
  const getSeverity = (item: DataType) => {
    if (item.inventoryStatus === "") {
      return "";
    }

    switch (item.inventoryStatus) {
      case "HOT":
      case "25% OFF":
        return "success";
      case "SALE":
        return "warning";
      case "BEST DEALS":
        return "danger";
      default:
        return "";
    }
  };
  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setPriceRange(newValue as number[]);
    setPriceRadioValue("All");
  };
  //pages
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);
  //brand
  const handleBrandChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const brand = event.target.name;
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };
  const handlePriceRadioChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = event.target.value;
    setPriceRadioValue(value);

    switch (value) {
      case "20":
        setPriceRange([100, 200]);
        break;
      case "25":
        setPriceRange([210, 300]);
        break;
      case "100":
        setPriceRange([310, 400]);
        break;
      case "300":
        setPriceRange([410, 500]);
        break;
      case "500":
        setPriceRange([510, 800]);
        break;
      case "1000":
        setPriceRange([810, 10000]);
        break;
      case "All":
      default:
        setPriceRange([50, 10000]);
    }
  };
  useEffect(() => {
    let filtered = smartphonesData;

    // Search
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) =>
        selectedBrands.includes(product.brand)
      );
    }
    // Category
    // if (selectedCategory) {
    //   filtered = filtered.filter(
    //     (item) => item.category.toLowerCase() === selectedCategory.toLowerCase()
    //   );
    // }

    // Price
    filtered = filtered.filter(
      (item) => item.price >= priceRange[0] && item.price <= priceRange[1]
    );

    // Sort
    switch (sortOption) {
      case "priceAsc":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "nameAZ":
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "nameZA":
        filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    setSortedData(filtered);
  }, [searchTerm, sortOption, selectedBrands, priceRange]);

  return (
    <>
      <Navigation>
        {" "}
        <img src={Shop} alt="" />
        <h2>Home</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M4.5 2.25L8.25 6L4.5 9.75"
            stroke="#77878F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h2>Shop</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M4.5 2.25L8.25 6L4.5 9.75"
            stroke="#77878F"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>{" "}
        <h3>Electronics Devices</h3>
      </Navigation>
      <MainDiv>
        <LeftDiv>
          <h2>Category</h2>
          <CategoryName>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <h3>
                {" "}
                <FormControlLabel
                  className="Axad"
                  value="Electronics"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                Electronics Devices
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  value="Computer"
                  className="Axad"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                Computer & Laptop
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  value="Accessories"
                  className="Axad"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                Computer Accessories
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  value="SmartPhone"
                  className="Axad"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                SmartPhone
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  value="Headphone"
                  className="Axad"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                Headphone
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  value="Mobile"
                  className="Axad"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                Mobile Accessories
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  value="Gaming"
                  className="Axad"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                Gaming Console
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  value="Camera"
                  className="Axad"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                Camera & Photo
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  value="Homes"
                  className="Axad"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                TV & Homes Appliances
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  value="Watchs"
                  className="Axad"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                Watchs & Accessories
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  className="Axad"
                  value="GPS"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                GPS & Navigation
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  className="Axad"
                  value="Warable"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                Warable Technology
              </h3>
            </RadioGroup>
          </CategoryName>
          <div className="Line"></div>
          <h2>Price Range</h2>

          <CategoryName>
            <Box sx={{ width: 300, mt: 4 }}>
              <Slider
                value={priceRange}
                onChange={handleSliderChange}
                valueLabelDisplay="auto"
                sx={{ color: "#FA8232", marginLeft: "14px" }}
                min={1000}
                max={3000}
                step={40}
              />
            </Box>
            {/* <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <h3>
                {" "}
                <FormControlLabel
                  className="Axad"
                  value="All"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                All Price
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  className="Axad"
                  value="20"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                Under $20
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  className="Axad"
                  value="25"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                $25 to $100
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  className="Axad"
                  value="100"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                $100 to $300
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  className="Axad"
                  value="300"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                $300 to $500
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  className="Axad"
                  value="500"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                $500 to $1,000
              </h3>
              <h3>
                {" "}
                <FormControlLabel
                  className="Axad"
                  value="1000"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label=""
                />
                $1,000 to $10,000
              </h3>
            </RadioGroup> */}
            <RadioGroup>
              <RadioGroup
                value={priceRadioValue}
                onChange={handlePriceRadioChange}
              >
                <FormControlLabel
                  value="All"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label="All Price"
                />
                <FormControlLabel
                  value="20"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label="Under $20"
                />
                <FormControlLabel
                  value="25"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label="$25 to $100"
                />
                <FormControlLabel
                  value="100"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label="$100 to $300"
                />
                <FormControlLabel
                  value="300"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label="$300 to $500"
                />
                <FormControlLabel
                  value="500"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label="$500 to $1,000"
                />
                <FormControlLabel
                  value="1000"
                  control={
                    <Radio
                      sx={{
                        color: "grey",
                        "&.Mui-checked": {
                          color: "#FA8232",
                        },
                      }}
                    />
                  }
                  label="$1,000 to $10,000"
                />
              </RadioGroup>
            </RadioGroup>
          </CategoryName>
          <div className="Line"></div>
          <h2>popular Brands</h2>
          <BrandsGrid>
            {brands.map((brand) => (
              <FormControlLabel
                key={brand}
                control={
                  <Checkbox
                    name={brand}
                    checked={selectedBrands.includes(brand)}
                    onChange={handleBrandChange}
                    sx={{
                      color: "grey",
                      "&.Mui-checked": {
                        color: "#FA8232",
                      },
                    }}
                  />
                }
                label={brand}
                sx={{
                  color: "#475156",
                  "& .MuiFormControlLabel-label": {
                    transition: "color 0.3s ease",
                  },
                  "& .MuiCheckbox-root.Mui-checked + .MuiFormControlLabel-label":
                    {
                      color: "#FA8232",
                      fontWeight: 500,
                    },
                }}
              />
            ))}
          </BrandsGrid>
          <div className="Line"></div>
          <h2>Popular Tag</h2>
          <LastSort>
            {categories.map((group, groupIndex) => (
              <div className="Mainone" key={groupIndex}>
                {group.map((category) => (
                  <h2
                    key={category}
                    className={activeCategory === category ? "active" : ""}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </h2>
                ))}
              </div>
            ))}
          </LastSort>
        </LeftDiv>
        <Rightdiv>
          <TopDiv>
            <div className="INPUT">
              {" "}
              <Box
                component="form"
                sx={{ "& > :not(style)": { width: "364px" } }}
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  placeholder="Search headphones..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  label=""
                  variant="outlined"
                  sx={{
                    "& .MuiInputBase-root": {
                      height: "30px",
                      fontSize: "14px",
                    },
                    "& .MuiInputBase-input": {
                      padding: "0 8px",
                    },
                  }}
                />
              </Box>
              <img src={Loop} alt="" />
            </div>
            <div style={{ alignItems: "center" }}>
              <h2>Sort by:</h2>
              <Autocomplete
                disablePortal
                options={sortOptions}
                getOptionLabel={(option) => option.label}
                value={sortOptions.find((opt) => opt.value === sortOption)}
                onChange={(_, newValue) => {
                  if (newValue) setSortOption(newValue.value);
                }}
                sx={{
                  display: "flex",
                  width: "180px",
                  height: "44px",
                  padding: "12px 16px",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "45px",
                  backgroundColor: "white",
                  borderRadius: "8px",
                }}
                renderInput={(params) => (
                  <TextField
                    className="Text"
                    {...params}
                    size="small"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        padding: "0 8px",
                      },
                      "& .MuiInputLabel-root": {
                        fontSize: "8px",
                      },
                    }}
                  />
                )}
              />
            </div>
          </TopDiv>
          <GridDataForm>
            {currentItems.length > 0 ? (
              currentItems.map((item, index) => (
                <Wrapper key={index}>
                  <ImageTop>
                    {item.inventoryStatus && (
                      <Tag
                        className="status-tag"
                        style={{ padding: "5px" }}
                        value={item.inventoryStatus}
                        severity={getSeverity(item)}
                      />
                    )}
                    <img src={item.image} alt="" />
                  </ImageTop>

                  <TextSection>
                    <StarRating
                      numberOfRatings={item.rating}
                      rating={item.rating}
                    />
                    <h1>{item.name}</h1>
                    <h2>{item.description}</h2>
                    <h3>${item.price}</h3>
                  </TextSection>
                </Wrapper>
              ))
            ) : (
              <NoItem>
                <p>No products found.</p>
                <OrbitProgress
                  color="#d53a11"
                  size="large"
                  text="no items"
                  textColor=""
                />
              </NoItem>
            )}
          </GridDataForm>
          <PageButton>
            {/* Previous Button */}
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              Prev
            </button>

            {/* Page Numbers */}
            {Array.from({ length: totalPages }, (_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => setCurrentPage(pageNum)}
                  className={currentPage === pageNum ? "active" : ""}
                >
                  {pageNum}
                </button>
              );
            })}

            {/* Next Button */}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </PageButton>
        </Rightdiv>
      </MainDiv>
    </>
  );
};

export default SmartPhones;
