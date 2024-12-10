import React, { useContext, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from '../provider/AuthProvider';

const AddReview = () => {
    const {user} = useContext(AuthContext);
  const [formValues, setFormValues] = useState({
    gameCover: '',
    gameTitle: '',
    reviewDescription: '',
    rating: '',
    publishingYear: '',
    genre: '',
    email: user?.email || '',
    displayName: user?.displayName || '',
  });

  const [errors, setErrors] = useState({});

  const genres = ['Action', 'RPG', 'Adventure', 'Simulation', 'Strategy'];

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    if (!formValues.gameCover) newErrors.gameCover = 'Game cover URL is required';
    // else if (!/^https?:\/\/.+\.(jpg|jpeg|png|gif|webp)$/.test(formValues.gameCover))
    //   newErrors.gameCover = 'Enter a valid image URL';

    if (!formValues.gameTitle) newErrors.gameTitle = 'Game title is required';
    else if (formValues.gameTitle.length < 3)
      newErrors.gameTitle = 'Game title should be at least 3 characters long';

    if (!formValues.reviewDescription)
      newErrors.reviewDescription = 'Review description is required';
    else if (formValues.reviewDescription.length < 10)
      newErrors.reviewDescription = 'Review should be at least 10 characters long';

    if (!formValues.rating) newErrors.rating = 'Rating is required';
    else if (formValues.rating < 1 || formValues.rating > 10)
      newErrors.rating = 'Rating must be between 1 and 10';

    if (!formValues.publishingYear) newErrors.publishingYear = 'Publishing year is required';
    else if (formValues.publishingYear < 1980 || formValues.publishingYear > new Date().getFullYear())
      newErrors.publishingYear = 'Enter a valid publishing year';

    if (!formValues.genre) newErrors.genre = 'Genre is required';

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error('Please fix the errors before submitting.');
      return;
    }

    setErrors({});
    try {
      // Mock saving data
      await saveReview(formValues);
      toast.success('Review submitted successfully!');
      setFormValues({
        gameCover: '',
        gameTitle: '',
        reviewDescription: '',
        rating: '',
        publishingYear: '',
        genre: '',
        email: user?.email || '',
        displayName: user?.displayName|| '',
      });
    } catch (error) {
      toast.error('Error submitting review. Please try again.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //getting the data
  const saveReview = (data) => {
    fetch('http://localhost:5000/addreview',{
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
  
  };

  return (
    <div className="max-w-2xl mx-auto p-10 bg-orange-100 shadow-lg my-10 rounded">
      <h2 className="text-2xl font-bold mb-4 text-green-700 text-center">Add New Review</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="gameCover" className="block text-gray-700">
            Game Cover Image URL
          </label>
          <input
            type="text"
            name="gameCover"
            value={formValues.gameCover}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.gameCover && <p className="text-red-500 text-sm">{errors.gameCover}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="gameTitle" className="block text-gray-700">
            Game Title
          </label>
          <input
            type="text"
            name="gameTitle"
            value={formValues.gameTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.gameTitle && <p className="text-red-500 text-sm">{errors.gameTitle}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="reviewDescription" className="block text-gray-700">
            Review Description
          </label>
          <textarea
            name="reviewDescription"
            value={formValues.reviewDescription}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.reviewDescription && (
            <p className="text-red-500 text-sm">{errors.reviewDescription}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="rating" className="block text-gray-700">
            Rating (1-10)
          </label>
          <input
            type="number"
            name="rating"
            value={formValues.rating}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.rating && <p className="text-red-500 text-sm">{errors.rating}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="publishingYear" className="block text-gray-700">
            Publishing Year
          </label>
          <input
            type="number"
            name="publishingYear"
            value={formValues.publishingYear}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.publishingYear && (
            <p className="text-red-500 text-sm">{errors.publishingYear}</p>
          )}
        </div>

        <div className="mb-4">
          <label htmlFor="genre" className="block text-gray-700">
            Genre
          </label>
          <select
            name="genre"
            value={formValues.genre}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded"
          >
            <option value="">Select Genre</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>
          {errors.genre && <p className="text-red-500 text-sm">{errors.genre}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">User Email</label>
          <input
            type="email"
            name="email"
            value={formValues.email}
            className="w-full px-4 py-2 border rounded bg-gray-200"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">User Name</label>
          <input
            type="text"
            name="displayName"
            value={formValues.displayName}
            className="w-full px-4 py-2 border rounded bg-gray-200"
            readOnly
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 px-4 rounded hover:bg-green-500 hover:font-semibold"
        >
          Submit Review
        </button>
      </form>
      <Toaster />
    </div>
  );
};

// Mock saving function




export default AddReview;
