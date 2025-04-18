"use client";
import Image from "next/image";
import React, { useState } from "react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-lg">
        <div className="max-w-9xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-between pl-10 sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <Image src="/logo.svg" width={45} height={45} alt="logo" />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                  <a
                    href="/"
                    className="text-gray-900 font-semibold hover:bg-gray-100 px-3 py-2 rounded-md text-lg"
                  >
                    Home
                  </a>
                  <a
                    href="/upload"
                    className="text-gray-900 hover:bg-gray-100 px-3 py-2 rounded-md text-lg font-semibold"
                  >
                    Upload
                  </a>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:flex sm:items-center">
                <a
                  href="/files"
                  className="ml-4 bg-indigo-600 text-white px-4 py-2 rounded-md text-lg font-semibold hover:bg-indigo-700"
                >
                  Get Started
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="sm:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-8 rounded-md text-gray-900 font-bold"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="sr-only">Open main menu</span>
                  {mobileMenuOpen ? (
                    <Image
                      src="/cross.svg"
                      width={30}
                      height={30}
                      alt="cancel"
                    />
                  ) : (
                    <Image
                      src="/hamburger.svg"
                      width={30}
                      height={20}
                      alt="hamburger-menu"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="bg-gray-100 text-gray-900 block px-3 py-2 rounded-md text-lg font-semibold"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-lg font-semibold"
              >
                Upload
              </a>
              <a
                href="#"
                className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-lg font-semibold"
              >
                About Us
              </a>
              <a
                href="/files"
                className="text-gray-900 hover:bg-gray-100 block px-3 py-2 rounded-md text-lg font-semibold"
              >
                Contact Us
              </a>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex items-center px-3 space-y-2 flex-col">
                  <a
                    href="#"
                    className="block w-full text-center bg-indigo-600 text-white px-3 py-2 rounded-md text-lg font-semibold"
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Header;
