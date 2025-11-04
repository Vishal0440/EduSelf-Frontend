import React, { useEffect, useState } from "react";
import { getAllBook, createBook, updateBook, deleteBook } from "../api/book";
import BookForm from "./BookForm";
import BookItem from "./BookItem";
import toast from "react-hot-toast";

export default function BookList({ onLogout }) {
  const [books, setBooks] = useState([]);
  const [editing, setEditing] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load all books
  const load = async () => {
    try {
      setLoading(true);
      const data = await getAllBook();
      setBooks(data);
      toast.success("Books loaded successfully!");
    } catch (err) {
      console.error("Error loading books:", err);
      toast.error("Failed to load books!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    load();
  }, []);

  // ✅ Create new book
  const handleCreate = async (book) => {
    try {
      const newBook = await createBook(book);
      setBooks((prev) => [newBook, ...prev]);
      toast.success("Book added successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to add book!");
    }
  };

  // ✅ Update book
  const handleUpdate = async (id, book) => {
    try {
      const updated = await updateBook(id, book);
      setBooks((prev) => prev.map((b) => (b._id === id ? updated : b)));
      setEditing(null);
      toast.success("Book updated successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update book!");
    }
  };

  // ✅ Delete book
  const handleDelete = async (id) => {
    if (!confirm("Delete this book?")) return;
    try {
      await deleteBook(id);
      setBooks((prev) => prev.filter((b) => b._id !== id));
      toast.success("Book deleted successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete book!");
    }
  };

  // ✅ Logout
  const handleLogout = () => {
    toast.success("Logged out successfully!");
    onLogout();
  };

  return (
    <div className="w-full max-w-6xl p-4 mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between p-2 bg-cyan-200">
        <h1 className="text-4xl font-bold text-center text-green-600">
          Admin Panel
        </h1>
        <button
          onClick={handleLogout}
          className="px-3 py-1 text-white transition bg-red-500 rounded-lg hover:bg-red-600"
        >
          Logout
        </button>
      </div>

      {/* Add Form */}
      <BookForm onSave={handleCreate} />

      {/* Loader */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-green-600 animate-spin"></div>
        </div>
      ) : (
        <div>
          <h2 className="p-4 mb-6 text-2xl font-bold text-center text-green-500 bg-cyan-200">
            Books Collection
          </h2>

          {books.length === 0 ? (
            <p className="italic text-center text-gray-500">No books yet.</p>
          ) : (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {books.map((book) => (
                <BookItem
                  key={book._id}
                  book={book}
                  onEdit={() => setEditing(book)}
                  onDelete={() => handleDelete(book._id)}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Edit Modal */}
      {editing && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="w-full max-w-6xl p-6 bg-white shadow-2xl rounded-xl">
            <h3 className="mb-4 text-lg font-bold text-gray-800">Edit Book</h3>
            <BookForm
              initial={editing}
              onSave={(data) => handleUpdate(editing._id, data)}
              onCancel={() => setEditing(null)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
