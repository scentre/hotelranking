import React, { useState } from "react";
import HotelForm from "./components/HotelForm";
import HotelList from "./components/HotelList";
import CategoryForm from "./components/CategoryForm";

const App = () => {
  const [hotels, setHotels] = useState([]);
  const [filteredCategory, setFilteredCategory] = useState("");

  const deleteHotels = (id) => {
    setHotels(hotels.filter((each) => each.id !== id));
  };
  // const editHotels = (id) => {
  //   setHotels(hotels.map(each => each.id== id ?));
  // };

  const filterHotelsByCategory = (category) => {
    setFilteredCategory(category);
  };

  const filteredHotels = filteredCategory
    ? hotels.filter((hotel) => hotel.category === filteredCategory)
    : hotels;

  return (
    <div className="p-10">
      <h1 className="text-center">Hotels Ranking App</h1>
      <HotelForm />

      <div className="flex gap-20  mt-20">
        <CategoryForm onSubmit={filterHotelsByCategory} />
        <HotelList
          hotels={filteredHotels}
          deleteHotels={deleteHotels}
          // editHotels={editHotels}
        />
      </div>
    </div>
  );
};

export default App;
