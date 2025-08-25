import { GrFavorite } from "react-icons/gr";
import { NavLink } from "react-router";

const ShoppingCard = ({productData}) => {
  
  return (
    <div>
      <div className="w-[20rem]">
        <div className="ShoppingCardContainer">
          <NavLink className={"text-center"} to="/product/1">
            <img
              className="w-[20rem] transition-transform duration-300 ease-in-out hover:scale-105"
              src={productData?.thumbnail }
              alt="shopping card image"
            />
            <h3 className="text-[1.2rem] font-semibold text-[#333333] mt-4">
              Product Name
            </h3>
            <p className="text-[1rem] text-[#525252] mt-2">$49.99</p>
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
