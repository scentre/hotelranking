import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../features/countrySlice";
import { addHotel } from "../features/hotelSlice";

const HotelForm = () => {
  const dispatch = useDispatch();

  const { countries } = useSelector((state) => state.countries);
  const { categories } = useSelector((state) => state.categories);

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [category, setCategory] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addHotel({
        name,
        country,
        address,
        category: JSON.parse(category),
        id: Math.random(),
      })
    );

    setName("");
    setCountry("");
    setAddress("");
    setCategory("");
  };

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className=" bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 flex gap-10"
      >
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <select
          type="text"
          placeholder="Country"
          value={country}
          onChange={handleCountryChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a country</option>
          {countries?.map((country, index) => (
            <option key={index} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
        <select
          type="text"
          placeholder="Category"
          // value={category ? JSON.stringify(category) : ""}
          onChange={handleCategoryChange}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="">Select a category</option>
          {categories?.map((category, index) => {
            return (
              <option key={index} value={JSON.stringify(category)}>
                {category.name}
              </option>
            );
          })}
        </select>
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default HotelForm;
