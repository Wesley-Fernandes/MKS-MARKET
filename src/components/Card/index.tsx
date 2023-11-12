"use client";
import React from "react";
import * as Component from "./styles";
import useCartStore from "../../store/cartStore";
import { IProduct } from "../../types/product";
export default function Card({
  brand,
  description,
  id,
  name,
  price,
}: IProduct) {
  const { addToCart } = useCartStore();

  const handleAdd = () => {
    addToCart({
      brand,
      description,
      id,
      name,
      price,
    });
  };
  return (
    <Component.container>
      <Component.image src="https://static.zattini.com.br/produtos/apple-watch-series-4-44mm-gps-cellular-wi-fi/64/544-9099-064/544-9099-064_zoom1.jpg?ts=1599705491" />
      <Component.Informations>
        <Component.Title>{name}</Component.Title>
        <Component.Price>R${price}</Component.Price>
      </Component.Informations>
      <Component.About>{description}</Component.About>
      <Component.Footer onClick={handleAdd}>
        <Component.FooterIcon src="/shopping-bag.svg" />
        <Component.FooterText>comprar</Component.FooterText>
      </Component.Footer>
    </Component.container>
  );
}
