import React from 'react'
import './Error.css'
export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-50 ">
      <h1 className="text-6xl font-bold text-red-500 mrg">404</h1>
      <h2 className="text-2xl font-semibold mrg">Page Not Found 🚧</h2>
      <p className="text-gray-600 mrg">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg shadow-md transition duration-300 ease-in-out btn"
      >
        ⬅ Back to Home
      </a>
    </div>
  )
}

