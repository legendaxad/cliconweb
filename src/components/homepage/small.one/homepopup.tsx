import React, { useState } from "react";
import { mockData } from "../../mock/datapop";
import {
  Container,
  Leftone,
  MainPOPUP,
  Popup,
  Rightone,
  TabContent,
} from "./popup.style";
import { Link } from "react-router-dom";
import { slugify } from "../../utils/slug";

// Right Arrow component
const RightArrow = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <path
      d="M4.5 2.25L8.25 6L4.5 9.75"
      stroke="#191C1F"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Categories list
const categories = [
  "Computer & Laptop",
  "Computer Accessories",
  "Smart Phones",
  "HeadPhone",
  "Mobile Accessories",
  "Gaming Console",
  "Camera & Photo",
  "TV & Home Appliances",
  "Watch & Accessories",
  "GPS & Navigation",
  "Wearable Technology",
];

// Define the prop types for CategoryList
interface CategoryListProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CategoryList: React.FC<CategoryListProps> = ({ isOpen, setIsOpen }) => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleCategoryClick = (category: string) => {
    setSelected((prevSelected) =>
      prevSelected === category ? null : category
    );
  };

  return (
    <Container>
      <Popup>
        {categories.map((category) => {
          return (
            <Link
              style={{ textDecoration: "none" }}
              key={category}
              to={`/${slugify(category)}`}
            >
              <h2
                onClick={() => {
                  handleCategoryClick(category);
                  setIsOpen(false); // Close the dropdown when a category is clicked
                }}
              >
                {category} {selected === category && <RightArrow />}
              </h2>
            </Link>
          );
        })}
      </Popup>

      {selected && (
        <MainPOPUP>
          <TabContent>
            <h2>{selected}</h2>
            {mockData[selected] ? (
              mockData[selected].map((item, index) => (
                <div
                  key={index}
                  style={{ display: "flex", gap: 30, margin: 10 }}
                >
                  <Leftone>
                    <img src="" alt="" />
                  </Leftone>
                  <Rightone>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <h4>Price: {item.price}</h4>
                  </Rightone>
                </div>
              ))
            ) : (
              <p>No data available for this category.</p>
            )}
          </TabContent>
          <div className="axad">
            {mockData[selected] && mockData[selected].length > 0 && (
              <div>
                <div className="Image">
                  <img src="" alt="" />
                </div>
                <div className="Bottom">
                  <h3>{mockData[selected][0].title}</h3>
                  <p>{mockData[selected][0].description}</p>
                  <h4>
                    Starting price: <b>{mockData[selected][0].price}</b>
                  </h4>
                  <Link to={`/${slugify(selected)}`}>
                    <button>
                      <h2>shop now</h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M3.125 10H16.875"
                          stroke="white"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M11.25 4.375L16.875 10L11.25 15.625"
                          stroke="white"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </MainPOPUP>
      )}
    </Container>
  );
};

export default CategoryList;
