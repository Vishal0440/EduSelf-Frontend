import React, { useEffect, useState } from "react";
import { getAllBook } from "../api/book";
import CourseCard from "./CourseCard";
import ClipLoader from "react-spinners/ClipLoader";

const AllCourse = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBooks = async () => {
    try {
      const data = await getAllBook();
      // console.log(data);
      setBooks(data);
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false); // ✅ ensures loading stops
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading..
        <ClipLoader color="#2563eb" size={60} />
      </div>
    );
  }
  return (
    <div className="p-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">All Courses</h2>
        {books.length === 0 ? (
          <p className="text-gray-500">No books available.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <CourseCard key={book._id} item={book} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCourse;
