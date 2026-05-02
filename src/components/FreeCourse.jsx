import React, { useEffect, useState, useMemo } from "react";
import { getAllBook } from "../api/book";
import CourseCard from "./CourseCard";
import ClipLoader from "react-spinners/ClipLoader";

export default function CoursesGrid() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const [sortType, setSortType] = useState("");
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const loadBooks = async () => {
    try {
      const data = await getAllBook();

      if (Array.isArray(data)) {
        const freeBooks = data.filter((b) => b.plan !== "Premium");
        setBooks(freeBooks);
      }
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBooks();
  }, []);

  // ✅ Search + Filter + Sort pipeline
  const processedBooks = useMemo(() => {
    let items = [...books];

    // 🔍 SEARCH
    if (search) {
      items = items.filter((b) =>
        b.title.toLowerCase().includes(search.toLowerCase()),
      );
    }

    // 🔃 SORT
    switch (sortType) {
      case "az":
        items.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "za":
        items.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }

    return items;
  }, [books, search, category, sortType]);

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

        {/* ✅ Controls */}
        <div className="flex flex-wrap gap-4 mb-6">
          {/* 🔍 Search */}
          <input
            type="text"
            placeholder="Search courses..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          />

          {/* 🔃 Sort */}
          <select
            value={sortType}
            onChange={(e) => setSortType(e.target.value)}
            className="px-4 py-2 border rounded-lg"
          >
            <option value="">Sort By</option>
            <option value="az">A → Z</option>
            <option value="za">Z → A</option>
          </select>
        </div>

        {/* Cards */}
        {processedBooks.length === 0 ? (
          <p className="text-gray-500">No matching courses found.</p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processedBooks.map((book) => (
              <CourseCard key={book._id} item={book} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
