import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <footer className="bg-white rounded-lg shadow-sm">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Flowbite
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
              <li>
                <Link to="/about" className="hover:underline me-4 md:me-6">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:underline me-4 md:me-6">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:underline me-4 md:me-6">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contactUs" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Flowbite™
            </a>
            . All Rights Reserved.{"-- "}
          <span>Developed by <a  className="hover:underline" href="https://www.linkedin.com/in/valorant-aman-238a73335/">Aman</a></span>
          </span>
        </div>
      </footer>
    </>
  )
}

export default Footer