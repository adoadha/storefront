import React from "react";
import { Card } from "../ui/card";
import { ProductType } from "@/interfaces/product";

interface DetailProductScreenProps {
  product: ProductType;
}

const DetailProductScreen = ({ product }: DetailProductScreenProps) => {
  return (
    <Card className="my-5 ">
      <div className="flex-col mx-5">
        <h1 className="text-[25px] text-[#163A50]">All Product</h1>
        <div className="flex items-center">
          <div className="flex"></div>
          <div className="flex-1 "></div>
        </div>
      </div>
      <div className="flex items-center justify-between mx-5"></div>
      <div className="mx-5 my-5">
        <div>My Post: {product.title} </div>
      </div>
    </Card>
  );
};

export default DetailProductScreen;
