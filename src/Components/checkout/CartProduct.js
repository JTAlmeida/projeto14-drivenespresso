import { useState } from "react";
import { ProductWrapper, Form, Input } from "./Checkout.style";

export default function CartProduct({
  id,
  name,
  price,
  image,
  qtd,
  locallySavedUserProducts,
  reload,
  setReload,
}) {
  const [newQtd, setNewQtd] = useState(qtd);

  function changeQuantity(e) {
    e.preventDefault();
    setNewQtd(e.target.value);

    locallySavedUserProducts.forEach((product, index) => {
      if (product.id === id) {
        locallySavedUserProducts[index] = {
          id,
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
      <h3>R$ {(price/100).toFixed(2).replace(".", ",")}</h3>
      <Form>
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
      </Form>
    </ProductWrapper>
  );
}
