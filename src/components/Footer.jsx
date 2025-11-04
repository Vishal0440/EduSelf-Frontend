export default function Footer() {
  return (
    <footer className="mt-12 bg-white border-t">
      <div className="max-w-6xl px-4 py-6 mx-auto text-sm text-center text-gray-600">
        © {new Date().getFullYear()} Eduself — All rights reserved
      </div>
    </footer>
  );
}
