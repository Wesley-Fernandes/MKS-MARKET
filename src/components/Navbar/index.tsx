"use client";
import { useState } from "react";
import * as Nav from "./styles";
import Modal from "../Modal";
import useCartStore from "../../store/cartStore";

export default function Navbar() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const { cartItems } = useCartStore();
  const handleToogle = () => {
    switch (showModal) {
      case true:
        setShowModal(false);
        break;
      case false:
        setShowModal(true);
        break;
      default:
        setShowModal(false);
        break;
    }
  };
  return (
    <Nav.Container>
      <Nav.Titles>
        <Nav.Title>mks</Nav.Title>
        <Nav.SubTitle>Sistemas</Nav.SubTitle>
      </Nav.Titles>

      <Nav.CartButton onClick={handleToogle}>
        <Nav.CartIcon src="/cart.svg" />
        <Nav.CartText>{cartItems.length}</Nav.CartText>
      </Nav.CartButton>
      {showModal && <Modal handleToogle={handleToogle} />}
    </Nav.Container>
  );
}
