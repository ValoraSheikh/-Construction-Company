import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header() {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <header className="bg-white">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setisOpen(!isOpen)}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-sm/6 font-semibold text-blue-500 underline'
                  : 'text-sm/6 font-semibold text-gray-900'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? 'text-sm/6 font-semibold text-blue-500 underline'
                  : 'text-sm/6 font-semibold text-gray-900'
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? 'text-sm/6 font-semibold text-blue-500 underline'
                  : 'text-sm/6 font-semibold text-gray-900'
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive
                  ? 'text-sm/6 font-semibold text-blue-500 underline'
                  : 'text-sm/6 font-semibold text-gray-900'
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/contactUs"
              className={({ isActive }) =>
                isActive
                  ? 'text-sm/6 font-semibold text-blue-500 underline'
                  : 'text-sm/6 font-semibold text-gray-900'
              }
            >
              Contact Us
            </NavLink>
          </div>
        </nav>

        {/* Mobile menu, show/hide based on menu open state */}
        {isOpen && (
          <div className="lg:hidden" role="dialog" aria-modal="true">
            <div className="fixed inset-0 z-10" />
            <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Your Company</span>
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                    alt=""
                  />
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setisOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <svg
                    className="size-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-500 underline hover:bg-gray-50'
                          : '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                      }
                      onClick={() => setisOpen(false)}
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/projects"
                      className={({ isActive }) =>
                        isActive
                          ? '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-500 underline hover:bg-gray-50'
                          : '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                      }
                      onClick={() => setisOpen(false)}
                    >
                      Projects
                    </NavLink>
                    <NavLink
                      to="/about"
                      className={({ isActive }) =>
                        isActive
                          ? '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-500 underline hover:bg-gray-50'
                          : '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                      }
                      onClick={() => setisOpen(false)}
                    >
                      About Us
                    </NavLink>
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        isActive
                          ? '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-500 underline hover:bg-gray-50'
                          : '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                      }
                      onClick={() => setisOpen(false)}
                    >
                      Services
                    </NavLink>
                    <NavLink
                      to="/contactUs"
                      className={({ isActive }) =>
                        isActive
                          ? '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-blue-500 underline hover:bg-gray-50'
                          : '-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50'
                      }
                      onClick={() => setisOpen(false)}
                    >
                      Contact Us
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

export default Header;