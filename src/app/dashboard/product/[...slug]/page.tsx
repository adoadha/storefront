import DetailProductScreen from "@/components/screen/DetailProductScreen";
import { ProductType } from "@/interfaces/product";
import axios from "axios";

const getDetailById = async (productId: number) => {
  const result = await axios.get(
    `https://fakestoreapi.com/products/${productId}`
  );
  return result.data as ProductType;
};

export default async function DetailPage({
  params,
}: {
  params: { slug: string[] };
}) {
  const product = await getDetailById(Number(params.slug[0]));

  return (
    <div className="w-full">
      <DetailProductScreen product={product} />
    </div>
  );
}
