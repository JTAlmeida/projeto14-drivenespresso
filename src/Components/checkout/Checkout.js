import Header from "../Header/Header";
import { Wrapper, ContentWrapper, Footer, Button } from "./Checkout.style";
import { useContext, useEffect, useState } from "react";
import ProductsContext from "../../context/ProductsContext";
import CartProduct from "./CartProduct";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


export default function Checkout() {
  const { total, setTotal } = useContext(ProductsContext);
  const [reload, setReload] = useState(false);

  let locallySavedUserProducts = JSON.parse(localStorage.getItem("userItem"));
  const locallySavedUserData = localStorage.getItem("drivenespresso");
  const navigate = useNavigate();


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

  function checkUser(){
    
    if (locallySavedUserData === null){
      Swal.fire({
        icon: 'info',
        title: 'Oops...',
        text: 'Faça login para finalizar as compras :)',
      });
      navigate('/sign-in');
    } else{
      navigate('/payment')
    }
  }

  return (
    <Wrapper>
      <Header />  
      <ContentWrapper>
        {JSON.parse(localStorage.getItem("userItem")) ? (
          JSON.parse(localStorage.getItem("userItem")).map((product, index) => (
            <CartProduct
              key={index}
              pId={product.pId}
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
        <Footer>
        <h1>TOTAL: R${(total / 100).toFixed(2).replace(".", ",")}</h1>
        <Button onClick={()=> checkUser()} >Finalizar compra</Button>
      </Footer>
      </ContentWrapper> 
    </Wrapper>
  );
}