import Header from "../Header/Header";
import { Wrapper, ContentWrapper, FilterBar, Button } from "./Home.style";
import Product from "../Home/Product";
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../context/ProductsContext";
import UserContext from "../../context/UserContext";
import { getProducts } from "../../service/API";

export default function Home() {
  const { setProducts, products } = useContext(ProductsContext);
  const { user, setUser } = useContext(UserContext);
  const [category, setCategory] = useState("tudo");

  useEffect(() => {
    getProducts()
      .then((products) => {
        setProducts(products.data);
      })
      .catch((error) => {
        console.error(error);
      });

    if (user === "") {
      setUser(JSON.parse(localStorage.getItem("drivenespresso")));
    }
  }, []);

  if (category === "equipments") {
    return (
      <Wrapper>
        <Header />
        <ContentWrapper>
          <FilterBar>
            <button
              onClick={() => {
                setCategory("todos");
              }}
            >
              Todos
            </button>
            <button
              onClick={() => {
                setCategory("equipments");
              }}
            >
              Equipamentos
            </button>
            <button
              onClick={() => {
                setCategory("capsules");
              }}
            >
              Capsulas
            </button>
          </FilterBar>
          {products
            .filter((product) => product.category === "equipments")
            .map((product, index) => (
              <Product
                index={index}
                key={product._id}
                price={product.price}
                productImage={product.pImage}
                description={product.description}
                name={product.pName}
                id={product._id}
              />
            ))}
        </ContentWrapper>
      </Wrapper>
    );
  } else if (category === "capsules") {
    return (
      <Wrapper>
        <Header />
        <ContentWrapper>
          <FilterBar>
          <button
              onClick={() => {
                setCategory("todos");
              }}
            >
              Todos
            </button>
            <button
              onClick={() => {
                setCategory("equipments");
              }}
            >
              Equipamentos
            </button>
            <button
              onClick={() => {
                setCategory("capsules");
              }}
            >
              Capsulas
            </button>
          </FilterBar>
          {products
            .filter((product) => product.category === "capsules")
            .map((product, index) => (
              <Product
                index={index}
                key={product._id}
                price={product.price}
                productImage={product.pImage}
                description={product.description}
                name={product.pName}
                id={product._id}
              />
            ))}
        </ContentWrapper>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <Header />
        <ContentWrapper>
          <FilterBar>
          <button
              onClick={() => {
                setCategory("todos");
              }}
            >
              Todos
            </button>
            <button
              onClick={() => {
                setCategory("equipments");
              }}
            >
              Equipamentos
            </button>
            <button
              onClick={() => {
                setCategory("capsules");
              }}
            >
              Capsulas
            </button>
          </FilterBar>
          {products.map((product, index) => (
            <Product
              index={index}
              key={product._id}
              price={product.price}
              productImage={product.pImage}
              description={product.description}
              name={product.pName}
              id={product._id}
            />
          ))}
        </ContentWrapper>
      </Wrapper>
    );
  }
}
