"use client";

import { User } from "next-auth";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface UserButtonProps {
  user: User;
}

export function UserButton({ user }: UserButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        className="flex items-center space-x-2 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name || "User"}
            width={32}
            height={32}
            className="rounded-full"
          />
        ) : (
          <div className="w-8 h-8 rounded-full bg-lime-500 flex items-center justify-center text-white font-medium">
            {user.name?.[0]?.toUpperCase() || user.email?.[0]?.toUpperCase()}
          </div>
        )}
        <span className="text-gray-300 text-sm font-medium hidden md:block">
          {user.name || user.email}
        </span>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu"
          >
            <Link
              href="/profile"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Your Profile
            </Link>
            <Link
              href="/settings"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Settings
            </Link>
            <Link
              href="/api/auth/signout"
              className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              Sign out
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
