import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

export default function BookForm({
  initial = null,
  onSave,
  onCancel,
  onLogout,
}) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    description: "",
    year: "",
    plan: "",
    coverUrl: "",
    videoUrl: "",
  });

  useEffect(() => {
    if (initial) {
      setForm({
        title: initial.title || "",
        author: initial.author || "",
        description: initial.description || "",
        year: initial.year || "",
        plan: initial.plan || "",
        coverUrl: initial.coverUrl || "",
        videoUrl: initial.videoUrl || "",
      });
    }
  }, [initial]);

  const change = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();

    if (!form.title.trim() || !form.author.trim()) {
      toast.error("⚠️ Title and author are required!");
      return;
    }

    const payload = {
      title: form.title.trim(),
      author: form.author.trim(),
      plan: form.plan.trim(),
      description: form.description.trim(),
      year: form.year ? Number(form.year) : undefined,
      coverUrl: form.coverUrl.trim(),
      videoUrl: form.videoUrl.trim(),
    };

    onSave(payload);

    if (initial) {
      toast.success("✅ Book updated successfully!");
    } else {
      toast.success("📘 Book added successfully!");
      setForm({
        title: "",
        author: "",
        description: "",
        year: "",
        plan: "",
        coverUrl: "",
        videoUrl: "",
      });
    }
  };

  return (
    <div className="w-full mb-6 bg-white">
      <div className="p-6 mx-auto shadow-lg rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-2xl font-bold text-gray-800">
            {initial ? "Edit Book" : "Add New Book"}
          </h2>

          {/* ✅ Optional logout button in form (if admin area) */}
          {onLogout && (
            <button
              onClick={onLogout}
              type="button"
              className="px-3 py-1 text-white transition bg-red-500 rounded-lg hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>

        <form onSubmit={submit} className="space-y-4">
          {/* ✅ Title + Author */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                name="title"
                value={form.title}
                onChange={change}
                placeholder="Enter book title"
                required
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Author
              </label>
              <input
                name="author"
                value={form.author}
                onChange={change}
                placeholder="Author"
                required
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>

          {/* ✅ Year + Plan */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Year
              </label>
              <input
                name="year"
                value={form.year}
                onChange={change}
                placeholder="Year"
                type="number"
                className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">Select Plan:</label>
              <select
                name="plan"
                value={form.plan}
                onChange={change}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select plan</option>
                <option value="Free">Free</option>
                <option value="Premium">Premium</option>
              </select>
            </div>
          </div>

          {/* ✅ Description */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              value={form.description}
              onChange={change}
              placeholder="Description"
              rows={3}
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* ✅ Cover URL */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Cover Image URL
            </label>
            <input
              type="url"
              name="coverUrl"
              value={form.coverUrl}
              onChange={change}
              placeholder="https://example.com/book-cover.jpg"
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* ✅ Video URL */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Video URL (YouTube or MP4)
            </label>
            <input
              type="url"
              name="videoUrl"
              value={form.videoUrl}
              onChange={change}
              placeholder="https://youtube.com/embed/..."
              className="w-full border border-gray-300 rounded-lg p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* ✅ Buttons */}
          <div className="flex items-center justify-start pt-2 space-x-3">
            <button
              type="submit"
              className="px-4 py-2 text-white transition bg-blue-600 rounded hover:bg-blue-700"
            >
              Save
            </button>

            {onCancel && (
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 transition border rounded hover:bg-gray-100"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
