import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteHotel, updateHotel } from "../features/hotelSlice";
const HotelList = () => {
  const dispatch = useDispatch();

  const [editHotelId, setEditHotelId] = useState(null);
  const [newHotelData, setNewHotelData] = useState({
    name: "",
    country: "",
    address: "",
  });
  const { hotels } = useSelector((state) => state.hotels);
  const { filteredCategory } = useSelector((state) => state.categories);

  const filteredHotels = filteredCategory
    ? hotels.filter((hotel) => hotel.category.name === filteredCategory)
    : hotels;

  const handleEdit = (hotelId) => {
    setEditHotelId(hotelId);
  };

  const handleUpdate = () => {
    dispatch(updateHotel({ id: editHotelId, updatedHotel: newHotelData }));
    // Reset the editing state
    setEditHotelId(null);
    setNewHotelData({ name: "", country: "", address: "" });
  };

  return (
    <div className="w-3/4 border border-b-0">
      <ul>
        {filteredHotels.length === 0 && (
          <div className="flex justify-center mt-20">
            <span className="bg-green-100 font-mono text-green-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
              No hotels added
            </span>
          </div>
        )}

        <div className="grid grid-cols-3 gap-3">
          {filteredHotels.map((hotel, index) => (
            <li key={index}>
              <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 w-fit">
                <div
                  className=" overflow-hidden bg-cover bg-no-repeat"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg w-96"
                    src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
                    alt=""
                  />
                </div>
                <div className="p-6">
                  <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                    {editHotelId === hotel.id ? (
                      <>
                        <input
                          type="text"
                          value={newHotelData.name}
                          placeholder="hotel name"
                          className="text-black"
                          onChange={(e) =>
                            setNewHotelData({
                              ...newHotelData,
                              name: e.target.value,
                            })
                          }
                        />
                      </>
                    ) : (
                      hotel.name
                    )}
                  </h5>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {editHotelId === hotel.id ? (
                      <>
                        <input
                          type="text"
                          className="text-black"
                          placeholder="hotel country"
                          value={newHotelData.country}
                          onChange={(e) =>
                            setNewHotelData({
                              ...newHotelData,
                              country: e.target.value,
                            })
                          }
                        />
                      </>
                    ) : (
                      hotel.country
                    )}
                  </p>
                  <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {editHotelId === hotel.id ? (
                      <>
                        <input
                          type="text"
                          value={newHotelData.address}
                          placeholder="hotel address"
                          className="text-black"
                          onChange={(e) =>
                            setNewHotelData({
                              ...newHotelData,
                              address: e.target.value,
                            })
                          }
                        />
                      </>
                    ) : (
                      hotel.address
                    )}
                  </p>
                  <span className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                    {hotel.category.name}
                  </span>
                </div>

                <div className="p-6 flex gap-5">
                  {editHotelId === hotel.id ? (
                    <button
                      type="button"
                      className="inline-block rounded bg-blue-400 px-6 pb-2 pt-2.5 cursor-pointer"
                      onClick={handleUpdate}
                    >
                      Save
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="inline-block rounded bg-blue-400 px-6 pb-2 pt-2.5 cursor-pointer"
                      onClick={() => handleEdit(hotel.id)}
                    >
                      Edit
                    </button>
                  )}

                  <button
                    type="button"
                    className="inline-block rounded bg-red-400 px-6 pb-2 pt-2.5 cursor-pointer"
                    onClick={() => dispatch(deleteHotel(hotel.id))}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </li>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default HotelList;
