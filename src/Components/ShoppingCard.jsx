import { GrFavorite } from "react-icons/gr";
import { NavLink } from "react-router";

const ShoppingCard = ({productData}) => {
  
  return (
    <div>
      <div className="w-[20rem]">
        <div className="ShoppingCardContainer">
          <NavLink className={"text-center"} to={`/product/${productData.id}`}>
            <img
              className="w-[20rem] transition-transform duration-300 ease-in-out hover:scale-105"
              src={productData?.thumbnail }
              alt="shopping card image"
            />
            <h3 className="text-[1.2rem] font-semibold text-[#333333] mt-4">
              {productData?.title}
            </h3>
            <p className="text-[1rem] font-bold text-[#276943] mt-2">${productData?.price}</p>
          </NavLink>
          <div className="flex items-center gap-4 justify-between w-full mt-4">
            <button className="AddToCartButton">Add to Cart</button>
            <button className="p-3 bg-[#333333] cursor-pointer rounded-full">
              <GrFavorite color="white" size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCard;
