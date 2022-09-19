import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductsContext from "../../context/ProductsContext";
import { postProducts } from "../../service/API";
import { ProductWrapper, Form, Input, Button } from "./Home.style";
import minus from "../../assets/minus.png";
import plus from "../../assets/plus.png";

export default function Product({
  price,
  productImage,
  description,
  name,
  id,
}) {
  let locallySavedUserProducts =
    JSON.parse(localStorage.getItem("userItem")) || [];
  const { cartItems, setCartItems } = useContext(ProductsContext);
  const navigate = useNavigate();
  const [qtd, setQtd] = useState(0);

  /*if (cartItems && cartItems.length === 0 && locallySavedUserProducts) {
    setCartItems(locallySavedUserProducts);
  }*/

  function handleSubmit(e) {
    e.preventDefault();
    setQtd(qtd);
  }

  function addItemToCart(name, price, image, id) {
    if (qtd === 0) {
      alert("A quantidade deve ser maior que 0.");
    }

    if (locallySavedUserProducts.length > 0) {
      locallySavedUserProducts.forEach((product, index) => {
        if (product.pId === id) {
          locallySavedUserProducts[index].qtd = Number(product.qtd + qtd);
          console.log(locallySavedUserProducts);
          localStorage.removeItem("userItem");
          localStorage.setItem(
            "userItem",
            JSON.stringify(locallySavedUserProducts)
          );
          setQtd(0);
        } else {
          localStorage.setItem(
            "userItem",
            JSON.stringify([
              ...locallySavedUserProducts,
              {
                pId: id,
                pName: name,
                pImage: productImage,
                pPrice: price,
                qtd: Number(qtd),
              },
            ])
          );
        }
      });
    } else {
      localStorage.setItem(
        "userItem",
        JSON.stringify([
          ...locallySavedUserProducts,
          {
            pId: id,
            pName: name,
            pImage: productImage,
            pPrice: price,
            qtd: Number(qtd),
          },
        ])
      );
    }

    setCartItems([
      ...cartItems,
      {
        pId: id,
        pName: name,
        pImage: productImage,
        pPrice: price,
        qtd: Number(qtd),
      },
    ]);

    const body = {
      pName: name,
      pImage: image,
      pPrice: price,
      qtd: qtd,
    };

    /*postProducts(body)
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });*/
    setQtd(0);
  }

  function valuePrice(price) {
    const newValue = (price / 100).toFixed(2).replace(".", ",");
    return newValue;
  }
  return (
    <>
      <ProductWrapper>
        <img src={productImage} alt="produto" />
        <h1>{name}</h1>
        <h2>{description}</h2>
        <h3>R${valuePrice(price)}</h3>
        <Form onSubmit={handleSubmit}>
          <img
            src={minus}
            alt="-"
            onClick={() => {
              if (Number(qtd) === 0) {
                return;
              }
              setQtd(Number(qtd) - 1);
            }}
          />
          <Input
            placeholder="0"
            name="amount"
            type="number"
            min="0"
            max="100"
            required
            value={qtd}
            onChange={(e) => setQtd(e.target.value)}
          />
          <img
            src={plus}
            alt="+"
            onClick={() => {
              {
                if (Number(qtd) === 100) {
                  return alert("Não é possível adicionar mais de 100 itens.");
                }
                setQtd(Number(qtd) + 1);
              }
            }}
          />

          <Button
            type="submit"
            onClick={() => {
              addItemToCart(name, price, productImage, id);
            }}
          >
            Adicionar ao carrinho
          </Button>
        </Form>
      </ProductWrapper>
    </>
  );
}
