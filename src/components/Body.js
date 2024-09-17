import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from "react"; 
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants , setListOfRestaurants] = useState([]);
  const [filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  },[]);
  const fetchData =async () => {
    const data =await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.51800&lng=88.38320&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    //console.log(json);
    setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
  const onlineStatus=useOnlineStatus();
  if(onlineStatus===false){
    return(
      <h1>
        looks like you're offline!!please cheack your internet connection;
      </h1>
    );
  };

    return listOfRestaurants.length === 0 ? ( <Shimmer /> ) : (
     <div className="body">
        <div className = "flex justify-between  ">
          <div className="m-4 p-4">
            <input type ="text" className="border border-solid border-black" value = {searchText} onChange={(e)=> {setSearchText(e.target.value)}} />
            <button className="px-5 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter(
                (res) => res.info.name.toLowerCase().includes(searchText)
              );
              setFilteredRestaurant(filteredRestaurant);

            }}>Search</button>
          </div>
          <div className="flex items-center px-5 py-5 bg-green-100 m-4 my-10 rounded-lg">
          <button  
            onClick = {() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4.5
              );
              setFilteredRestaurant(filteredList);

            }}
            >
              top-rated-restaurants
            </button>
            </div>
        </div>

        <div className="flex flex-wrap gap-1 px-10"> 
           {filteredRestaurant.map((Restaurant) => (<Link  key = {Restaurant.info.id} to={"/restaurants/"+Restaurant.info.id}><RestaurantCard resData={Restaurant}/></Link>
           ))}
        </div>         
     </div>
    );
};
 export default Body;