import Header from "../Header/Header";
import { Wrapper, ContentWrapper } from "./Home.style";
import { getProducts } from "../../service/API";
import { useContext, useEffect } from "react";
import ProductsContext from "../../context/ProductsContext";
import Product from "../Product";

export default function Home() {
  const { setProducts, products } = useContext(ProductsContext);

  useEffect(() => {
    getProducts().then((products) => {
      setProducts(products.data);
    });
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
