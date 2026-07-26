'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Explore Events' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const dashboardLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Explore Events' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/events/add', label: 'Add Ground' },
  { href: '/events/manage', label: 'Manage Events' },
  { href: '/purchases', label: 'My Purchases' },
];

const adminLinks = [
  { href: '/', label: 'Home' },
  { href: '/events', label: 'Explore Events' },
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/admin', label: 'Admin' },
  { href: '/events/add', label: 'Add Event' },
  { href: '/events/manage', label: 'Manage Events' },
  { href: '/purchases', label: 'My Purchases' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();

  const isAuthenticated = !!user;

  const links = user?.role === 'admin' ? adminLinks : isAuthenticated ? dashboardLinks : navLinks;

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    router.push('/');
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold text-white">
              S
            </div>
            <span className="text-xl font-bold text-gray-900">SportHive</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors ${
                  pathname === link.href ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/profile"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Logout
                </button>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:text-blue-600 md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t md:hidden">
          <div className="space-y-1 px-4 pt-2 pb-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block rounded-md px-3 py-2 text-base font-medium ${
                  pathname === link.href
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {isAuthenticated ? (
              <>
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-2 text-base font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Logout
                </button>
              </>
            ) : (
              <div className="mt-4 space-y-2">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg border border-blue-600 px-4 py-2 text-center text-base font-medium text-blue-600 hover:bg-blue-50"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  onClick={() => setIsOpen(false)}
                  className="block rounded-lg bg-blue-600 px-4 py-2 text-center text-base font-medium text-white hover:bg-blue-700"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
