"use client";

import Navbar from "../components/Navbar";
import * as Scructure from "../components/Structure";
import Card from "../components/Card";
import CardLoading from "../components/CardLoading";
import ProductList from "../components/ProductList";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Scructure.Page>
        <Navbar />
        <Scructure.Container>
          <ProductList />
        </Scructure.Container>
        <Scructure.Footer>
          <Scructure.FooterText>
            MKS sistemas © Todos os direitos reservados
          </Scructure.FooterText>
        </Scructure.Footer>
      </Scructure.Page>
    </QueryClientProvider>
  );
}
