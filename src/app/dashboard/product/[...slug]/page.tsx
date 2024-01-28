"use client";
import DetailProductScreen from "@/components/screen/DetailProductScreen";
import { Card } from "@/components/ui/card";
import { IProduct } from "@/interfaces/product";
import { getProductById } from "@/service/http/product";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default async function DetailPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const { slug } = params;
  const id = slug[0];

  const { data: DetailsData, isLoading: isLoadingDetailsData } = useQuery({
    queryKey: ["getProductById", id],
    queryFn: getProductById,
  });

  console.log(DetailsData?.data, "DetailsData");

  return (
    <div className="w-full">
      <Card>
        {JSON.stringify(DetailsData?.data)}
        {DetailsData?.data?.product_name}
      </Card>

      <DetailProductScreen
      // data={DetailsData?.data || []}
      // isLoading={isLoadingDetailsData}
      />
      {/* {isLoadingDetailsData ? (
        <p>Loading...</p>
      ) : (
        <DetailProductScreen
          data={DetailsData}
          isLoading={isLoadingDetailsData}
        />
      )} */}
    </div>
  );
}
