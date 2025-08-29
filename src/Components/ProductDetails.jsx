import { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const [productInfo, setProductInfo] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const productsById = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/products/${id}`
        );
        const data = await response.json();
        setProductInfo(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        return "something went wrong";
      }
    };
    productsById();
  }, [id]);
  return (
    <>
      <div className="max-w-[120rem] m-auto">
        <div className="mx-10 flex">
          <div className="">
            <img src={productInfo?.thumbnail} alt={productInfo?.title} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-[3rem] font-bold text-[#333333] mt-4">
              {productInfo?.title}
            </h1>
            <h2 className="text-[1.2rem] font-semibold underline text-[#222222] mt-2">
                <span className="font-bold">Brand:</span>{" "}
              {productInfo?.brand}
            </h2>
            <span className="flex items-center gap-4">
              <p className="text-[1.2rem] line-through text-[#646464] mt-4">
                ${productInfo?.price}
              </p>
              <p className="text-[1.5rem] font-bold text-[#276943] mt-4">
                ${productInfo?.discountPercentage}
              </p>
            </span>
            <div className="mt-6">
              <p className="text-[1.2rem] text-[#333] mt-4">
                <span className="font-semibold">Description:</span>{" "}
                {productInfo?.description || "No description available."}
              </p>
            </div>
            <div className="mt-6 space-y-2">
              <p className="text-[1.1rem] text-[#333]">
                <span className="font-semibold">Warranty:</span>{" "}
                {productInfo?.warrantyInformation || "No warranty information"}
              </p>
              <p className="text-[1.1rem] text-[#333]">
                <span className="font-semibold">Shipping:</span>{" "}
                {productInfo?.shippingInformation || "No shipping information"}
              </p>
              <p className="text-[1.2rem] text-[#276943] font-semibold">
                {productInfo?.availabilityStatus || "Availability unknown"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
