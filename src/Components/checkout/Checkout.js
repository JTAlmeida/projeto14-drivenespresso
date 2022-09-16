import Header from "../Header/Header";
import { Wrapper, ContentWrapper, Footer, Button } from "./Checkout.style";
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../context/ProductsContext";
import CartProduct from "./CartProduct";
import { Link } from "react-router-dom";

export default function Checkout() {
  const { total, setTotal } = useContext(ProductsContext);
  const [reload, setReload] = useState(false);
  let locallySavedUserProducts = JSON.parse(localStorage.getItem("userItem"));

  useEffect(() => {
    updateTotal();
  }, [reload]);

  function updateTotal() {
    let sum = 0;
    if (locallySavedUserProducts) {
      for (let i = 0; i < locallySavedUserProducts.length; i++) {
        const newSum =
          Number(locallySavedUserProducts[i].pPrice) *
          locallySavedUserProducts[i].qtd;
        sum += newSum;
      }
    }

    setTotal(sum);
  }

  return (
    <Wrapper>
      <Header />
      <ContentWrapper>
        {JSON.parse(localStorage.getItem("userItem")) ? (
          JSON.parse(localStorage.getItem("userItem")).map((product, index) => (
            <CartProduct
              key={index}
              id={index}
              name={product.pName}
              price={product.pPrice}
              image={product.pImage}
              qtd={product.qtd}
              setTotal={setTotal}
              locallySavedUserProducts={locallySavedUserProducts}
              reload={reload}
              setReload={setReload}
            />
          ))
        ) : (
          <>
            <p>
              Carrinho vazio
              <Link to="/" >
                Adicionar itens
              </Link>
            </p>
          </>
        )}
      </ContentWrapper>
      <Footer>
        <h1>TOTAL: R${(total / 100).toFixed(2).replace(".", ",")}</h1>
        <Button>Finalizar compra</Button>
      </Footer>
    </Wrapper>
  );
}
