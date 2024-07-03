import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { fetchCategories, createCategory, updateCategory, deleteCategory } from '../../../Redux/Category/categoriesSlice';

const sharedClasses = {
  border: 'border-[1px] border-gray-400',
  primary: 'border-[1px] border-black text-gray-700',
  secondary: 'bg-blue-500 font-medium',
  muted: 'hover:bg-[--muted]',
};

const Categories = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories.categories);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    id: '',
    name: '',
    parentCategory: '',
    level: 0,
  });
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    dispatch(fetchCategories())
      .catch(err => setError(err.message)); // Handle errors when fetching categories
  }, [dispatch]);

  const openModal = (
    category = { id: '', name: '', parentCategory: '', level: 0 }
  ) => {
    setForm(category);
    setIsEditing(!!category.id);
    setShowModal(true);
  };

  const updateModal = (category = { id: '', name: '', parentCategory: '', level: 0 }) => {
    setForm({
      id: category._id || '', // Ensure _id is used
      name: category.name || '',
      parentCategory: form.parentCategory === '' ? null : form.parentCategory,
      level: category.level || 0,
    });
    setIsEditing(!!category._id);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setForm({ id: '', name: '', parentCategory: '', level: 0 });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Convert empty string to null for parentCategory
      const processedForm = {
        ...form,
        parentCategory: form.parentCategory === '' ? null : form.parentCategory,
      };
      if (isEditing) {
        dispatch(updateCategory(processedForm));
      } else {
        dispatch(createCategory(processedForm));
      }
      closeModal();
    } catch (err) {
      setError(err.message); // Handle errors during form submission
    }
  };
  

  const handleDelete = async (id) => {
    try {
      dispatch(deleteCategory(id));
    } catch (err) {
      setError(err.message); // Handle errors during deletion
    }
  };

  return (
    <div className="bg-transparent">
      <div className="m-9 rounded-lg p-4 bg-white text-[--foreground]">
        <div className="flex justify-between items-center mb-9">
          <h1 className="text-2xl font-bold">Categories</h1>
          <button
            onClick={() => openModal()}
            className={`px-4 py-2 rounded-lg ${sharedClasses.primary} hover:${sharedClasses.secondary}`}
          >
            + Add new
          </button>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>} {/* Display errors */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[--card] text-[--card-foreground]">
            <thead className="bg-gray-500 rounded-lg">
              <tr>
                <th className={`p-2 ${sharedClasses.border}`}>Category</th>
                <th className={`p-2 ${sharedClasses.border}`}>Parent Category</th>
                <th className={`p-2 ${sharedClasses.border}`}>Level</th>
                <th className={`p-2 ${sharedClasses.border}`}>Quantity</th>
                <th className={`p-2 ${sharedClasses.border}`}>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category) => (
                <tr key={category._id} className={sharedClasses.muted}>
                  <td className={`p-2 ${sharedClasses.border}`}>{category.name}</td>
                  <td className={`p-2 ${sharedClasses.border}`}>
                    {category.parentCategory ? category.parentCategory.name : 'None'}
                  </td>
                  <td className={`p-2 ${sharedClasses.border}`}>{category.level}</td>
                  <td className={`p-2 ${sharedClasses.border}`}>{category.level}</td>
                  <td className={`p-2 ${sharedClasses.border} flex space-x-3 p-4`}>
                    <button
                      onClick={() => updateModal(category)}
                      className="text-[--accent] hover:text-[--accent]/80"
                      aria-label="Edit category"
                    >
                      <img
                        aria-hidden="true"
                        alt="edit-icon"
                        src="https://openui.fly.dev/openui/16x16.svg?text=✏️"
                      />
                    </button>
                    <button
                      onClick={() => handleDelete(category._id)}
                      className="text-[--destructive] hover:text-[--destructive]/80"
                      aria-label="Delete category"
                    >
                      <img
                        aria-hidden="true"
                        alt="delete-icon"
                        src="https://openui.fly.dev/openui/16x16.svg?text=🗑️"
                      />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Modal
          isOpen={showModal}
          onRequestClose={closeModal}
          style={{
            overlay: {
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              zIndex: 1000,
            },
            content: {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '-50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 1001,
              borderRadius: '10px',
              width: '500px',
              padding: '20px',
            },
          }}
        >
          <div className="p-4 bg-[--background] text-[--foreground]">
            <h2 className="text-xl font-bold mb-4">
              {isEditing ? 'Edit Category' : 'Add Category'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className={`w-full p-2 ${sharedClasses.border}`}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="parentCategory">
                  Parent Category
                </label>
                <select
                  id="parentCategory"
                  name="parentCategory"
                  value={form.parentCategory}
                  onChange={handleChange}
                  className={`w-full p-2 ${sharedClasses.border}`}
                >
                  <option value="">None</option>
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2" htmlFor="level">
                  Level
                </label>
                <input
                  type="number"
                  id="level"
                  name="level"
                  value={form.level}
                  onChange={handleChange}
                  className={`w-full p-2 ${sharedClasses.border}`}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="mr-2 px-4 py-2 bg-gray-300 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-4 py-2 rounded-lg ${sharedClasses.primary}`}
                >
                  {isEditing ? 'Update' : 'Add'}
                </button>
              </div>
            </form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default Categories;
