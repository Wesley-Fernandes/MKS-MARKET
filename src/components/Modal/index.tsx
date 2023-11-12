import React, { useEffect, useState } from "react";
import * as C from "./styles";
import MiniCard from "../MiniCard";
import useCartStore from "../../store/cartStore";
import { ICartItem } from "../../types/product";

interface props {
  handleToogle: () => void;
}
export default function Modal({ handleToogle }: props) {
  const [value, setValue] = useState<number>(0);
  const { cartItems } = useCartStore();

  useEffect(() => {
    const calculate = (item: ICartItem) => {
      return item.quantity * item.product.price;
    };

    const calculateAllStore = () => {
      return cartItems.reduce((total, item) => total + calculate(item), 0);
    };

    setValue(calculateAllStore());
  }, [cartItems]);
  return (
    <C.container>
      <C.header>
        <C.title>
          Carrinho
          <br />
          de compras
        </C.title>
        <C.buttonClose onClick={handleToogle}>X</C.buttonClose>
      </C.header>

      <C.Products>
        {cartItems.map((item) => {
          return (
            <MiniCard
              key={item.product.id}
              product={item.product}
              quantity={item.quantity}
            />
          );
        })}
      </C.Products>
      <C.PriceSeparator>
        <C.PriceText>total:</C.PriceText>
        <C.PriceText>r${value.toFixed(2)}</C.PriceText>
      </C.PriceSeparator>
      <C.ButtonBuy>Finalizar compra</C.ButtonBuy>
    </C.container>
  );
}
