import { useState, useContext, useEffect } from "react";
import { ProductWrapper, Form, Input } from "./Checkout.style";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";
import ProductsContext from "../../context/ProductsContext";
import styled from "styled-components";

export default function CartProduct({
  pId,
  name,
  price,
  image,
  qtd,
  locallySavedUserProducts,
  reload,
  setReload,
}) {
  
  const [newQtd, setNewQtd] = useState(qtd);

  const { setCartItems } = useContext(ProductsContext);

  useEffect(() => {
    setCartItems(locallySavedUserProducts);
  }, []);

  function changeQuantity(e) {

    e.preventDefault();
    setNewQtd(e.target.value);

    locallySavedUserProducts.forEach((product, index) => {

      if (product.pId === pId) {

        locallySavedUserProducts[index] = {
          pId: locallySavedUserProducts[index].pId,
          pImage: image,
          pName: name,
          pPrice: price,
          qtd: Number(e.target.value),
        };
        localStorage.removeItem("userItem");
        localStorage.setItem(
          "userItem",
          JSON.stringify(locallySavedUserProducts)
        );
      }
    });

    setReload(!reload);
  }

  return (
    <ProductWrapper>
      <img src={image} alt="product image" />
      <h1>{name}</h1>
      <h3>R$ {(price / 100).toFixed(2).replace(".", ",")}</h3>
      <Form>
        <img
          src={minus}
          alt="-"
          onClick={() => {
            if (Number(newQtd) === 1) {
              alert(
                "Caso deseje remover o item clique no botão 'Remover item'"
              );
              return;
            }

            setNewQtd(Number(newQtd) - 1);

            locallySavedUserProducts.forEach((product, index) => {
              if (product.pId === pId) {
                locallySavedUserProducts[index] = {
                  pId: locallySavedUserProducts[index].pId,
                  pImage: image,
                  pName: name,
                  pPrice: price,
                  qtd: Number(newQtd - 1),
                };
                localStorage.removeItem("userItem");
                localStorage.setItem(
                  "userItem",
                  JSON.stringify(locallySavedUserProducts)
                );
              }
            });

            setReload(!reload);
          }}
        />
        <Input
          placeholder={qtd}
          name="amount"
          type="number"
          min="0"
          max="100"
          value={newQtd}
          required
          onChange={changeQuantity}
        />
        <img
          src={plus}
          alt="+"
          onClick={() => {
            {
              if (Number(newQtd) === 100) {
                return alert("Não é possível adicionar mais de 100 itens.");
              }
              setNewQtd(Number(newQtd) + 1);
              locallySavedUserProducts.forEach((product, index) => {
                if (product.pId === pId) {
                  locallySavedUserProducts[index] = {
                    pId: locallySavedUserProducts[index].pId,
                    pImage: image,
                    pName: name,
                    pPrice: price,
                    qtd: Number(newQtd + 1),
                  };
                  localStorage.removeItem("userItem");
                  localStorage.setItem(
                    "userItem",
                    JSON.stringify(locallySavedUserProducts)
                  );
                }
              });

              setReload(!reload);
            }
          }}
        />
        <Button
          onClick={() => {
            let confirmation = window.confirm(
              "Tem certeza que deseja remover este item?"
            );
            if (!confirmation) {
              return;
            }

            locallySavedUserProducts = locallySavedUserProducts.filter(
              (product) => product.pId !== pId
            );

            localStorage.removeItem("userItem");
            localStorage.setItem(
              "userItem",
              JSON.stringify(locallySavedUserProducts)
            );
            setReload(!reload);
          }}
        >
          Remover item
        </Button>
      </Form>
    </ProductWrapper>
  );
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50%;
  min-width: 20%;
  background-color: #988c51;
  border-radius: 10px;
  color: #fafafa;
  font-size: 20px;
  font-weight: 700;
  cursor: pointer;
`;
