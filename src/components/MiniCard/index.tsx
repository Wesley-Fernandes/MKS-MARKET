"use client";
import React from "react";
import * as C from "./styles";
import { ICartItem, IProduct } from "../../types/product";
import useCartStore from "../../store/cartStore";
export default function MiniCard({ product, quantity }: ICartItem) {
  const { increaseQuantity, decreaseQuantity, removeFromCart} = useCartStore();

  const handleIncresent = () => {
    increaseQuantity(product.id);
  };
  const handleDecresent = () => {
    decreaseQuantity(product.id);
  };

  const handleRemove = () => {
    removeFromCart(product.id);
  };

  return (
    <C.container>
      <C.CloseButton onClick={handleRemove}>X</C.CloseButton>
      <C.image src="https://static.zattini.com.br/produtos/apple-watch-series-4-44mm-gps-cellular-wi-fi/64/544-9099-064/544-9099-064_zoom1.jpg?ts=1599705491" />

      <C.title>{product.name}</C.title>
      <C.containerChanger>
        <C.ChangerLabel>Qtd: </C.ChangerLabel>
        <C.changerAbover>
          <C.ChangerButton onClick={handleDecresent}>-</C.ChangerButton>
          <C.ChangerDivisor />
          <C.ChangerHud>{quantity}</C.ChangerHud>
          <C.ChangerDivisor />
          <C.ChangerButton onClick={handleIncresent}>+</C.ChangerButton>
        </C.changerAbover>
      </C.containerChanger>
      <C.price>R${product.price}</C.price>
    </C.container>
  );
}
