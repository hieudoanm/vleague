import InfoIcon from "@mui/icons-material/Info";
import Button from "@mui/material/Button";
import Link from "next/link";
import React from "react";

export type ProductProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  slug: string;
  price: number;
};

const Product: React.FC<ProductProps> = ({ title, image, slug, price }) => {
  return (
    <div className="rounded-xl shadow-xl overflow-hidden border">
      <div className="relative border-b" style={{ paddingBottom: '100%' }}>
        <div
          className="absolute w-full h-full flex items-end justify-end bg-cover bg-center"
          style={{ backgroundImage: `url('${image}` }}
        />
      </div>
      <div className="p-4 border-b">
        <div className="flex items-center justify-between">
          <h2 className="text-lg capitalize">{title}</h2>
          <span className="font-bold">SOL {price}</span>
        </div>
      </div>
      <div className="p-4">
        <Link href={`/${slug}`} passHref>
          <Button type="button" variant="contained" className="w-full">
            <p className="flex items-center gap-2">
              <span>View Details</span>
              <InfoIcon fontSize="small" />
            </p>
          </Button>
        </Link>
      </div>
    </div>
  );
};

Product.displayName = "Product";

export default Product;
