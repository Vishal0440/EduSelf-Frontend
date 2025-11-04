import React from "react";
import toast from "react-hot-toast";

export default function BookItem({ book, onEdit, onDelete }) {
  // ✅ Helper function to get proper YouTube embed URL
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
    <div className="flex flex-col overflow-hidden transition bg-white border shadow-sm rounded-xl hover:shadow-md">
      {/* Book Cover */}
      <div className="flex items-center justify-center w-full overflow-hidden bg-gray-100 h-44">
        {book.coverUrl ? (
          <img
            src={book.coverUrl}
            alt={book.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="text-sm text-gray-400">No Image</div>
        )}
      </div>
      {/* ✅ Video Preview */}
      {/* {book.videoUrl && (
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
      )} */}

      {/* ✅ Book Details */}
      <div className="flex flex-col justify-between flex-1 p-4 mb-1">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {book.title}
        </h3>
        <p className="my-1 text-sm font-medium text-slate-600">
          {book.author} • {book.year || "—"}
        </p>
        <p className="flex-wrap text-sm text-slate-700 line-clamp-4">
          {book.description?.split("\n")[0] || "No description provided."}
          {/* {book.description?.split(/\n+/).map((para, i) => (
            <p key={i}>{para}</p>
          ))} */}
        </p>
        <p className="mt-2 text-sm font-medium text-gray-700">
          Plan :{" "}
          <span
            className={
              book.plan === "Premium" ? "text-green-600" : "text-gray-500"
            }
          >
            {book.plan || "_"}
          </span>
        </p>

        <div className="flex justify-between mt-4 space-x-2">
          <button
            onClick={onEdit}
            className="flex-1 px-3 py-1.5 text-sm font-medium border rounded-lg bg-blue-50 text-blue-700 hover:bg-blue-100 transition"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="flex-1 px-3 py-1.5 text-sm font-medium border rounded-lg text-red-600 bg-red-50 hover:bg-red-100 transition"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
