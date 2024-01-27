import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  addCategory,
  filterCategory,
  deleteCategory,
  updateCategory,
} from "../features/categorySlice";

const CategoryForm = () => {
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const [category, setCategory] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const [newName, setNewName] = useState("");
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  console.log(newName, editingCategoryId);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category.name);
    dispatch(filterCategory(category.name));
  };

  const handleEdit = (categoryId) => {
    setEditingCategoryId(categoryId);
  };

  const handleSubmitEdit = () => {
    if (newName && editingCategoryId) {
      console.log(newName, "inside editin", editingCategoryId);
      dispatch(updateCategory({ id: editingCategoryId, newName }));

      setNewName("");
      setEditingCategoryId(null);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addCategory({ name: category, id: Math.random() }));
    setCategory("");
  };

  return (
    <div className="w-1/4">
      <form onSubmit={handleSubmit} className="flex gap-4 mb-10">
        <input
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="submit"
          className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-right"
        >
          Add
        </button>
      </form>

      {/* <select
        type="text"
        placeholder="Category"
        onChange={handleCategoryChange}
        value={selectedCategory}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      >
        <option value="">Select a category</option>
        {categories.map((category, index) => (
          <option key={index} value={category.name}>
            {category.name}

            <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded text-right">
              Add
            </button>
          </option>
        ))}
        
      </select> */}
      <div className="flex flex-col gap-3 w-fit">
        <div
          onClick={() => handleCategoryChange("")}
          className="inline-block whitespace-nowrap rounded-full bg-blue-100 px-[0.65em] pb-[0.25em] py-5 pt-[0.35em]  align-baseline text-[0.75em] font-bold leading-none text-blue-700 cursor-pointer"
        >
          All{" "}
        </div>
        {categories.map((category, index) => (
          <div className="flex justify-between gap-4" key={category.id}>
            <div
              className="inline-block whitespace-nowrap rounded-full bg-blue-100 px-[0.65em] pb-[0.25em] py-5 pt-[0.35em]  align-baseline text-[0.75em] font-bold leading-none text-blue-700 cursor-pointer"
              key={index}
              onClick={() => handleCategoryChange(category)}
            >
              {category.name}
            </div>

            {/* <div className="flex gap-2">
              <button
                className="inline-block whitespace-nowrap rounded-full bg-yellow-100 px-[0.65em] pb-[0.25em] py-5 pt-[0.35em]  align-baseline text-[0.75em] font-bold leading-none text-yellow-700 cursor-pointer"
                onClick={() => dispatch(updateCategory(category.id))}
              >
                edit
              </button>
              <button
                className="inline-block whitespace-nowrap rounded-full bg-red-100 px-[0.65em] pb-[0.25em] py-5 pt-[0.35em]  align-baseline text-[0.75em] font-bold leading-none text-red-700 cursor-pointer"
                onClick={() => dispatch(deleteCategory(category.id))}
              >
                delete
              </button>
            </div> */}

            <div className="flex gap-2">
              {editingCategoryId === category.id ? (
                <>
                  <input
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <button
                    onClick={handleSubmitEdit}
                    className="inline-block whitespace-nowrap rounded-full bg-green-100 px-[0.65em] pb-[0.25em] py-5 pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none text-green-700 cursor-pointer"
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => handleEdit(category.id)}
                    className="inline-block whitespace-nowrap rounded-full bg-yellow-100 px-[0.65em] pb-[0.25em] py-5 pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none text-yellow-700 cursor-pointer"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(deleteCategory(category.id))}
                    className="inline-block whitespace-nowrap rounded-full bg-red-100 px-[0.65em] pb-[0.25em] py-5 pt-[0.35em] align-baseline text-[0.75em] font-bold leading-none text-red-700 cursor-pointer"
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryForm;
