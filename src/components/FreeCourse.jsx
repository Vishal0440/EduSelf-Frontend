import React, { useEffect, useState } from "react";
import { getAllBook } from "../api/book";
import CourseCard from "./CourseCard";
import ClipLoader from "react-spinners/ClipLoader";

export default function CoursesGrid() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBooks = async () => {
    try {
      const data = await getAllBook();
      // console.log("Fetched books:", data);

      if (Array.isArray(data)) {
        // filter free courses and limit to 6
        const freeBooks = data.filter((b) => b.plan !== "Premium").slice(0, 6);
        setBooks(freeBooks);
      }
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false); //  loading stops
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
    <section className="p-4 py-12 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="mb-6 text-3xl font-bold text-gray-800">
          Free Courses Collection
        </h2>

        {books.length === 0 ? (
          <p className="text-gray-500">No free books available.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <CourseCard key={book._id} item={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
