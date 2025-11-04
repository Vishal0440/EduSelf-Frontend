import { Link } from "react-router-dom";

export default function CourseCard({ item }) {
  if (!item) return null;

  // console.log("courseCard", item);

  const isPremium = item.plan === "Premium";

  return (
    <Link
      to={`/book/${item._id}`} // ✅ direct link using _id
      className={`block overflow-hidden transition-all duration-300 border shadow-sm rounded-2xl hover:shadow-lg hover:-translate-y-1 ${
        isPremium
          ? "border-green-300 bg-gradient-to-br from-green-50 to-white"
          : "border-gray-200 bg-white"
      }`}
    >
      {/* Cover */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-100">
        {item.coverUrl ? (
          <img
            src={item.coverUrl}
            alt={item.title}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400">
            No image
          </div>
        )}

        {/* Plan Tag */}
        <span
          className={`absolute top-3 right-3 px-3 py-1 text-xs font-medium rounded-full shadow-sm ${
            isPremium ? "bg-green-600 text-white" : "bg-gray-800 text-gray-100"
          }`}
        >
          {isPremium ? "Premium" : "Free"}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-green-700">
          {item.title}
        </h3>
        <p className="mt-1 text-sm text-gray-500">by {item.author}</p>

        <p className="mt-3 text-sm text-gray-600 line-clamp-3">
          {item.description?.split("\n")[0] || "No description provided."}
        </p>

        <div className="flex items-center justify-between mt-5">
          <span className="text-xs text-gray-400">{item.year}</span>

          <span
            className={`text-sm font-medium transition duration-200 ${
              isPremium
                ? "text-green-600 hover:text-green-700"
                : "text-blue-600 hover:text-blue-700"
            }`}
          >
            Read More →
          </span>
        </div>
      </div>
    </Link>
  );
}
