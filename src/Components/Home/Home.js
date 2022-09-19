import Header from "../Header/Header";
import { Wrapper, ContentWrapper } from "./Home.style";
import { getProducts } from "../../service/API";
import Product from "../Home/Product";
import { useContext, useEffect } from "react";
import ProductsContext from "../../context/ProductsContext";
import UserContext from "../../context/UserContext";

export default function Home() {
  const { setProducts, products } = useContext(ProductsContext);
  const { user, setUser } = useContext(UserContext);

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

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
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
