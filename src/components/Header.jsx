import { useState } from "react";
import React from "react";

import { FiMenu } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import clsx from "clsx";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));
const Header = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <main className="border- border-b ">
      <nav className="flex   justify-evenly px-8 items-center py-6    ">
        <div className="flex items-center gap-8">
          <section className="flex lg:basis-2/6 lg:justify-between  gap-4">
            {/* menu */}
            <FiMenu
              onClick={() => setMenu(true)}
              className="text-3xl cursor-pointer lg:hidden"
            />
            {/* logo */}
            <h2 className="text-4xl font-bold">Exclusive</h2>
          </section>
        </div>
        <ul className="hidden   lg:flex lg:gap-20   text-gray-400 hover:text-black">
          <li className="top-list-menu">
            <a href="">Home</a>
          </li>
          <li className="top-list-menu">
            <a href="">Contact</a>
          </li>
          <li className="top-list-menu">
            <a href="">About</a>
          </li>
          <li className="top-list-menu">
            <a href="">Sign Up</a>
          </li>
        </ul>

        {/* sidebar mobile menu */}
        <div
          className={clsx(
            " fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all ",
            isSideMenuOpen && "translate-x-0"
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />
            <li className="top-list-menu list-none	">
              <a href="">Home</a>
            </li>
            <li className="top-list-menu list-none	">
              <a href="">Contact</a>
            </li>
            <li className="top-list-menu list-none	">
              <a href="">About</a>
            </li>
            <li className="top-list-menu list-none	">
              <a href="">Sign Up</a>
            </li>
          </section>
        </div>

        {/* last section */}
        <section className="flex items-center gap-4">
          {/* cart icon */}
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={4} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>

          <div className="relative inline-block text-left">
            <img
              id="avatarButton"
              type="button"
              data-dropdown-toggle="userDropdown"
              data-dropdown-placement="bottom-start"
              className="w-10 h-10 rounded-full cursor-pointer"
              src="data:image/jpeg;base64,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"
              alt="User dropdown"
              onClick={toggleDropdown}
            />

            {isOpen && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-44 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 z-50"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="userDropdownButton"
              >
                <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div>Bonnie Green</div>
                  <div className="font-medium truncate">name@flowbite.com</div>
                </div>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Earnings
                    </a>
                  </li>
                </ul>
                <div className="py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                  >
                    Sign out
                  </a>
                </div>
              </div>
            )}
          </div>
        </section>
      </nav>
    </main>
  );
};

export default Header;
