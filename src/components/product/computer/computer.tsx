import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  BrandsGrid,
  Buttonn,
  ButtonsWrapper,
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
import redHeart from "../../../assets/shop/redheart.svg";

import Heart from "../../../assets/shop/Heart.svg";
import Eye from "../../../assets/shop/Eye.svg";
import Cart from "../../../assets/shop/ShoppingCartSimple.svg";
import Loop from "../../../assets/navbar/MagnifyingGlass.svg";
import Shop from "../../../assets/shop/House.svg";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { Autocomplete, TextField } from "@mui/material";
import StarRating from "../../homepage/small.one/starRating";
import { Tag } from "primereact/tag";
import { DataType } from "../../type/type";
import { OrbitProgress } from "react-loading-indicators";
import { laptopsData } from "../../mock/laptop";
import { CartItem, useCart } from "../../context/cart";
import { useWish } from "../../context/wishlist";
import axios from "axios";

const brands = [
  "Acer",
  "Alienware",
  "Apple",
  "Asus",
  "Dell",
  "Gigabyte",
  "HP",
  "Huawei",
  "LG",
  "Lenovo",
  "Microsoft",
  "MSI",
  "Razer",
  "Samsung",
  "Others",
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
const Computer = () => {
  const { addToCart, isInCartlist, removeFromCart } = useCart();
  // const categoryName = "Smart Phones";
  // const products = smartphonesData;
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [products, setProducts] = useState<DataType[]>([]);
  const [loading, setLoading] = useState(true);

  const [sortOption, setSortOption] = useState("default");
  const [sortedData, setSortedData] = useState<DataType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  //brand
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  //price for
  const [priceRange, setPriceRange] = useState<number[]>([1000, 3000]);
  const [priceRadioValue, setPriceRadioValue] = useState<string>("All");
  const handleAddToCart = (item: any) => {
    const transformedItem = {
      id: item._id, // ✅ ensure it's the MongoDB ObjectId
      name: item.name,
      image: item.image,
      price: item.price,
      quantity: 1,
      color: item.color,
      size: item.size,
      memory: item.memory,
      storage: item.storage,
      rating: item.rating,
    };

    if (isInCartlist(transformedItem.id)) {
      removeFromCart(transformedItem.id);
    } else {
      addToCart(transformedItem);
    }
  };
  const { addToWish, removeFromWish, isInWishlist } = useWish();

  const handleToggleWish = (item: any) => {
    if (isInWishlist(item.id)) {
      removeFromWish(item.id);
    } else {
      addToWish({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: 1,
        color: item.color,
        size: item.size,
        memory: item.memory,
        storage: item.storage,
        rating: item.rating,
        description: item.description,
        inventoryStatus: item.inventoryStatus,
        category: item.category,
      });
    }
  };

  //id detail
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/computer-and-laptop/product/${id}`);
  };
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
      case "1000":
        setPriceRange([1000, 1300]);
        break;
      case "1300":
        setPriceRange([1301, 1600]);
        break;
      case "1600":
        setPriceRange([1601, 2000]);
        break;
      case "2000":
        setPriceRange([2001, 2500]);
        break;
      case "2500":
        setPriceRange([2501, 3000]);
        break;
      default:
        setPriceRange([1000, 3000]);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/laptop/all");
        setProducts(data);
      } catch (err) {
        console.error("Fetch error:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  useEffect(() => {
    let filtered = products;

    // Search
    if (searchTerm) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    //brand
    if (selectedBrands.length > 0) {
      filtered = filtered.filter((product) => {
        if (selectedBrands.includes("Others")) {
          return (
            selectedBrands.includes(product.brand) ||
            !brands.includes(product.brand)
          );
        } else {
          return selectedBrands.includes(product.brand);
        }
      });
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
  }, [searchTerm, sortOption, selectedBrands, priceRange, products]);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Navigation>
        <div className="one">
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
        </div>{" "}
      </Navigation>
      <MainDiv>
        <LeftDiv>
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
                step={50}
              />
            </Box>

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
                      "&.Mui-checked": { color: "#FA8232" },
                    }}
                  />
                }
                label="All Prices"
              />
              <FormControlLabel
                value="1000"
                control={
                  <Radio
                    sx={{
                      color: "grey",
                      "&.Mui-checked": { color: "#FA8232" },
                    }}
                  />
                }
                label="$1000 – $1300"
              />
              <FormControlLabel
                value="1300"
                control={
                  <Radio
                    sx={{
                      color: "grey",
                      "&.Mui-checked": { color: "#FA8232" },
                    }}
                  />
                }
                label="$1301 – $1600"
              />
              <FormControlLabel
                value="1600"
                control={
                  <Radio
                    sx={{
                      color: "grey",
                      "&.Mui-checked": { color: "#FA8232" },
                    }}
                  />
                }
                label="$1601 – $2000"
              />
              <FormControlLabel
                value="2000"
                control={
                  <Radio
                    sx={{
                      color: "grey",
                      "&.Mui-checked": { color: "#FA8232" },
                    }}
                  />
                }
                label="$2001 – $2500"
              />
              <FormControlLabel
                value="2500"
                control={
                  <Radio
                    sx={{
                      color: "grey",
                      "&.Mui-checked": { color: "#FA8232" },
                    }}
                  />
                }
                label="$2501 – $3000"
              />
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
              currentItems.map((item) => (
                <Wrapper key={item.id}>
                  <div>
                    <ImageTop>
                      {item.inventoryStatus && (
                        <Tag
                          className="status-tag"
                          style={{ padding: "5px" }}
                          value={item.inventoryStatus}
                          severity={getSeverity(item)}
                        />
                      )}
                      <img src={item.image} alt={item.name} />
                    </ImageTop>

                    <ButtonsWrapper className="buttons">
                      <Buttonn onClick={() => handleToggleWish(item)}>
                        <img
                          src={isInWishlist(item.id) ? redHeart : Heart}
                          alt=""
                        />
                      </Buttonn>
                      <Buttonn>
                        <img
                          onClick={() => handleAddToCart(item)}
                          src={Cart}
                          alt=""
                        />
                      </Buttonn>
                      <Buttonn onClick={() => handleClick(item.id)}>
                        <img src={Eye} alt="" />
                      </Buttonn>
                    </ButtonsWrapper>

                    <TextSection>
                      <StarRating
                        numberOfRatings={item.rating}
                        rating={item.rating}
                      />
                      <h1>{item.name}</h1>
                      <h2>{item.description}</h2>
                      <h3>${item.price}</h3>
                    </TextSection>
                  </div>
                </Wrapper>
              ))
            ) : (
              <NoItem>
                <p>No products found.</p>
                <OrbitProgress color="#d53a11" size="large" text="no items" />
              </NoItem>
            )}
          </GridDataForm>
          {currentItems.length > 0 && (
            <PageButton>
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
          )}
        </Rightdiv>
      </MainDiv>
      <ToastContainer />
    </>
  );
};

export default Computer;
