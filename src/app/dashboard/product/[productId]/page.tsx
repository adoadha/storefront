"use client";
import DetailProductScreen from "@/components/screen/DetailProductScreen";
import { Card } from "@/components/ui/card";
import { IProduct } from "@/interfaces/product";
import { getProductById } from "@/service/http/product";
import { useQuery } from "@tanstack/react-query";

export default function DetailPage({
  params,
}: {
  params: { productId: string };
}) {
  const { data: DetailsData, isLoading: isLoadingDetailsData } = useQuery({
    queryKey: ["getProductById", Number(params.productId)],
    queryFn: getProductById,
  });

  return (
    <div className="w-full">
      <DetailProductScreen
        data={DetailsData?.data as IProduct}
        isLoading={isLoadingDetailsData}
      />
    </div>
  );
}
