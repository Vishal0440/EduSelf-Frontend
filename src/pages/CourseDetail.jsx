import axios from "axios";
import React, { useEffect, useState } from "react";
import { getBook } from "../api/book";
import { useParams } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";

export default function CourseDetail() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadBooks = async () => {
    try {
      const data = await getBook(id);
      // console.log("Fetched books:", data);
      setBook(data);
    } catch (err) {
      console.error("Error fetching books:", err);
    } finally {
      setLoading(false); //  loading stops
    }
  };

  useEffect(() => {
    loadBooks();
  }, [id]);
  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        Loading..
        <ClipLoader color="#2563eb" size={60} />
      </div>
    );
  }

  if (!book)
    return <div className="p-10 text-center text-red-500">Book not found.</div>;

  // youtube
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";
    const short = url.match(/youtu\.be\/([^?]+)/);
    const standard = url.match(/v=([^&]+)/);
    const embed = url.match(/embed\/([^?]+)/);
    const id = short?.[1] || standard?.[1] || embed?.[1];
    return id ? `https://www.youtube.com/embed/${id}` : url;
  };

  // ✅ Helper function to detect YouTube link
  const isYouTube = (url) =>
    url && (url.includes("youtube.com") || url.includes("youtu.be"));
  return (
    <div className="max-w-5xl px-4 py-6 mx-auto">
      {/* Title + Badge */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-gray-900">{book.title}</h1>
        {book.plan === "Premium" ? (
          <span className="px-3 py-1 text-sm font-semibold text-green-800 bg-green-100 rounded-full">
            Premium
          </span>
        ) : (
          <span className="px-3 py-1 text-sm font-semibold text-gray-700 bg-gray-100 rounded-full">
            Free
          </span>
        )}
      </div>

      {/* ✅ Video Preview */}
      {book.videoUrl && (
        <div className="flex items-center justify-center w-full bg-black aspect-video">
          {isYouTube(book.videoUrl) ? (
            <iframe
              src={getYouTubeEmbedUrl(book.videoUrl)}
              title="Book Video"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <video
              controls
              muted
              autoPlay
              className="object-cover w-full h-full"
              src={book.videoUrl}
            >
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      )}

      {/* Details */}
      <div className="p-6 mt-10 bg-white shadow-md rounded-xl">
        <h2 className="mb-2 text-2xl font-semibold text-gray-800">
          {book.author}
        </h2>
        <p className="text-gray-600 whitespace-pre-line">{book.description}</p>

        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-500">Published Year: {book.year}</p>
        </div>
      </div>
    </div>
  );
}
