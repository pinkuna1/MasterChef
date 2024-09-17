import useRestaurantMenu from "../utils/useRestaurantMenu";
import ResCategory from "./ResCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const {resId} = useParams();
   
    const resInfo = useRestaurantMenu(resId);
    if(resInfo===null){return <Shimmer/>};
    
    const {name, cuisines, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info ;
    // const {itemCard}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    console.log(categories);
    if(itemCards===null){
      console.log("no item available");
    }
    return (
        <div className ="text-center">
          <h1 className="my-4 text-2xl font-bold">{name}</h1> 
          <h2 className="font-bold text-2xl">Menu</h2>
          <p className="font-bold text-lg">
            {cuisines.join(", ")}-{costForTwoMessage}
          </p>
          {
            categories.map((category)=>(
              <ResCategory data={category?.card?.card} />
            ))
          }
          
        
        </div>
    );
};
export default RestaurantMenu;