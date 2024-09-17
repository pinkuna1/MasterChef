import {CDN_URL} from "../utils/constant.js";

const RestaurantCard = (props) => {
    const {resData} = props;
   // console.log(resData)
    const {cloudinaryImageId,cuisines,name,avgRating,costForTwo} = resData?.info;
    return (
        <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-50 hover:bg-gray-200" >
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId } />
            <h3 className="font-bold py-2">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating} stars</h4>
           
        </div>
    );
};

export default RestaurantCard;