import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import { ProductProps } from "../../molecules/Product";

type ProductTemplateProps = {
  product: ProductProps;
};

const Description: React.FC = () => {
  return (
    <div className="border p-8 rounded-md shadow">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam a ante
      maximus, blandit lectus eu, suscipit nibh. Sed molestie at justo eget
      ornare. Nulla facilisi. Integer congue sit amet est sed aliquet. Nam elit
      quam, porta eget lorem vitae, tempor pharetra urna. Pellentesque vel augue
      auctor, rutrum metus at, cursus.
    </div>
  );
};

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
  const { title, price, image } = product;

  return (
    <>
      <section className="container mx-auto p-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl capitalize">{title}</h2>
          <div className="flex gap-4">
            <p className="text-2xl font-bold">SOL {price}</p>
            <Button type="button" variant="contained">
              <p className="flex items-center gap-2">
                <span className="hidden sm:inline">Buy Now</span>
                <ShoppingCartIcon fontSize="small" />
              </p>
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="col-span-1">
            <div className="relative" style={{ paddingBottom: "100%" }}>
              <div
                className="absolute w-full h-full flex items-end justify-end bg-cover bg-center"
                style={{ backgroundImage: `url('${image}` }}
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="flex flex-col gap-8">
              <Description />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductTemplate;
