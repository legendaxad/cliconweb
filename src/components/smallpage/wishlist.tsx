import React, { useState } from "react";
import { DataViewLayoutOptions } from "primereact/dataview";
import { useWish } from "../context/wishlist";
import { Buttonn, MainDiv } from "../product/pages.style";
import { GridDiv, ListLine, WrapperList, Wrappergrid } from "./wishlistsyle";
import { useCart } from "../context/cart";
import redHeart from "../../assets/shop/redheart.svg";
import { motion } from "framer-motion";
import Heart from "../../assets/shop/Heart.svg";
import Eye from "../../assets/shop/Eye.svg";
import Cart from "../../assets/shop/ShoppingCartSimple.svg";
import { useNavigate } from "react-router-dom";
import { Tag } from "primereact/tag";
import { NoData } from "../compare/compare.style";
import { ThreeDot } from "react-loading-indicators";
import { Button } from "@mantine/core";

export default function WishlistData() {
  const [layout, setLayout] = useState<"grid" | "list">("grid");
  const { wishItems } = useWish();
  const { addToCart, isInCartlist, removeFromCart } = useCart();
  const goBack = () => {
    navigate(-1);
  };
  const handleAddToCart = (item: any) => {
    if (isInCartlist(item.id)) {
      removeFromCart(item.id);
    } else {
      addToCart({
        id: item.id,
        name: item.name,
        image: item.image,
        price: item.price,
        quantity: 1,
        color: item.color,
        size: item.size,
        memory: item.memory,
        rating: item.rating,
      });
    }
  };
  const getSeverity = (product: any) => {
    switch (product.inventoryStatus) {
      case "SALE":
        return "warning";

      case "HOT":
        return "success";

      case "25% OFF":
        return "danger";

      default:
        return null;
    }
  };
  const { addToWish, removeFromWish, isInWishlist } = useWish();
  const navigate = useNavigate();
  const handleClick = (id: string) => {
    navigate(`/computer-and-laptop/product/${id}`);
  };
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
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "1rem",
        }}
      >
        <DataViewLayoutOptions
          style={{ marginRight: "1rem", padding: "10px" }}
          layout={layout}
          onChange={(e) => setLayout(e.value as "grid" | "list")}
        />
      </div>

      {wishItems.length === 0 ? (
        <NoData onClick={goBack}>
          <Button>Please add items to wishlist</Button>
          <ThreeDot
            variant="bounce"
            color="#f39243"
            size="small"
            text=""
            textColor=""
          />
        </NoData>
      ) : layout === "list" ? (
        <ListLine>
          <WrapperList>
            <h1>Wishlist</h1>
            <table>
              <thead>
                <tr className="Table" style={{ backgroundColor: "#f3f3f3" }}>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Stock</th>
                  <th style={{ textAlign: "center" }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {wishItems.map((product) => (
                  <motion.tr
                    className="Table"
                    key={product.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <td>
                      <img src={product.image} alt={product.name} />
                    </td>
                    <td
                      style={{ textDecoration: "none", cursor: "pointer" }}
                      onClick={() => handleClick(product.id)}
                    >
                      {product.name}
                    </td>
                    <td>{product.category}</td>
                    <td>${product.price}</td>
                    <td>{product.inventoryStatus}</td>
                    <td>
                      <div className="Button">
                        <img
                          onClick={() => handleToggleWish(product)}
                          src={isInWishlist(product.id) ? redHeart : Heart}
                          alt={
                            isInWishlist(product.id)
                              ? "Remove from wishlist"
                              : "Add to wishlist"
                          }
                        />
                        <button onClick={() => handleAddToCart(product)}>
                          Add to Cart
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </WrapperList>
        </ListLine>
      ) : (
        <GridDiv>
          {wishItems.map((product) => (
            <motion.tr
              className="Table"
              key={product.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Wrappergrid key={product.id}>
                <img src={product.image} alt={product.name} />
                <div className="Context">
                  <h3>
                    <b>Product:</b>
                    {product.name}
                  </h3>
                  <h4>
                    <b>Info:</b>
                    {product.description}
                  </h4>
                  <p>
                    <b>Price:</b>${product.price}
                  </p>
                  <h3>
                    <b>Stock Status:</b>
                    <Tag
                      style={{ padding: "5px 15px", marginLeft: "10px" }}
                      severity={getSeverity(product)}
                    >
                      {product.inventoryStatus}
                    </Tag>
                  </h3>
                  <div className="Button">
                    <Buttonn onClick={() => handleToggleWish(product)}>
                      <img
                        src={isInWishlist(product.id) ? redHeart : Heart}
                        alt=""
                      />
                    </Buttonn>
                    <Buttonn>
                      <img
                        onClick={() => handleAddToCart(product)}
                        src={Cart}
                        alt=""
                      />
                    </Buttonn>
                    <Buttonn onClick={() => handleClick(product.id)}>
                      <img src={Eye} alt="" />
                    </Buttonn>
                  </div>
                </div>
              </Wrappergrid>
            </motion.tr>
          ))}
        </GridDiv>
      )}
    </div>
  );
}
