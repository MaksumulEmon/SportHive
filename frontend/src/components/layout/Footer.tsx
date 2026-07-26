import Link from 'next/link';

const footerLinks = {
  product: [
    { href: '/events', label: 'Explore Events' },
    { href: '/events/add', label: 'Add Event' },
    { href: '/dashboard', label: 'Dashboard' },
  ],
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ],
  support: [
    { href: '/help', label: 'Help Center' },
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms & Conditions' },
  ],
  social: [
    { href: 'https://twitter.com', label: 'Twitter', icon: 'X' },
    { href: 'https://facebook.com', label: 'Facebook', icon: 'F' },
    { href: 'https://instagram.com', label: 'Instagram', icon: 'I' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center space-x-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-xl font-bold">
                S
              </div>
              <span className="text-xl font-bold">SportHive</span>
            </Link>
            <p className="mt-4 text-sm text-gray-400">
              Your ultimate platform for discovering and managing sports events.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Company
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gray-400 uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} SportHive. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              {footerLinks.social.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 transition-colors hover:text-white"
                >
                  <span className="sr-only">{link.label}</span>
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-sm font-medium">
                    {link.icon}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
