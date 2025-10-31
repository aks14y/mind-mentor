import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand + Social */}
        <div>
          <div className="text-2xl font-extrabold text-white">MindMentor</div>
          <p className="mt-4 text-gray-400">Follow us</p>
          <div className="mt-4 flex items-center gap-4">
            {/* Social icons */}
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2 6.35 2 1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.43 9.93v-7.02H7.9v-2.9h2.39V9.41c0-2.36 1.4-3.66 3.55-3.66 1.03 0 2.1.18 2.1.18v2.32h-1.18c-1.17 0-1.53.73-1.53 1.49v1.79h2.61l-.42 2.9h-2.19V22c4.77-.75 8.43-4.91 8.43-9.93Z" />
              </svg>
            </a>
            <a href="#" aria-label="X" className="hover:text-white">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M17.53 2H20l-6.28 7.17L21.5 22H14l-4.67-6.28L4 22H1.5L8.3 14.3 2.5 2H10l4.2 5.93L17.53 2Z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M6.94 6.5A2.44 2.44 0 1 1 6.93 1.6a2.44 2.44 0 0 1 0 4.9ZM2.88 22V7.87h8.2V22h-8.2Zm10.16 0V7.87h7.85v2.76h.11c1.09-1.94 3.76-3.99 7.74-3.99v7.85c0 6.13-3.25 8.51-7.59 8.51-2.81 0-4.64-1.53-5.42-2.94h-.1V22h-2.59Z" />
              </svg>
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M23.5 7.2s-.23-1.68-.93-2.42c-.9-.93-1.9-.93-2.36-.98C16.73 3.5 12 3.5 12 3.5h-.01s-4.73 0-8.2.3c-.46.05-1.46.05-2.36.98C.73 5.52.5 7.2.5 7.2S.25 9.08.25 10.97v1.99c0 1.88.25 3.77.25 3.77s.23 1.68.93 2.42c.9.93 2.08.9 2.61 1 1.9.18 8 .24 8 .24s4.73-.01 8.2-.31c.46-.05 1.46-.05 2.36-.98.7-.74.93-2.42.93-2.42s.25-1.88.25-3.77v-1.99c0-1.89-.25-3.77-.25-3.77ZM9.75 14.5V7.94l6.27 3.28-6.27 3.28Z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.95.24 2.56.4.64.17 1.18.39 1.71.92.53.53.75 1.07.92 1.71.16.61.35 1.39.4 2.56.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.24 1.95-.4 2.56-.17.64-.39 1.18-.92 1.71-.53.53-1.07.75-1.71.92-.61.16-1.39.35-2.56.4-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.95-.24-2.56-.4-.64-.17-1.18-.39-1.71-.92-.53-.53-.75-1.07-.92-1.71-.16-.61-.35-1.39-.4-2.56C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.24-1.95.4-2.56.17-.64.39-1.18.92-1.71.53-.53 1.07-.75 1.71-.92.61-.16 1.39-.35 2.56-.4C8.42 2.21 8.8 2.2 12 2.2Zm0 1.8c-3.18 0-3.55.01-4.81.07-1.03.05-1.59.22-1.96.36-.49.19-.83.41-1.2.78-.37.37-.59.71-.78 1.2-.14.37-.31.93-.36 1.96-.06 1.26-.07 1.63-.07 4.81s.01 3.55.07 4.81c.05 1.03.22 1.59.36 1.96.19.49.41.83.78 1.2.37.37.71.59 1.2.78.37.14.93.31 1.96.36 1.26.06 1.63.07 4.81.07s3.55-.01 4.81-.07c1.03-.05 1.59-.22 1.96-.36.49-.19.83-.41 1.2-.78.37-.37.59-.71.78-1.2.14-.37.31-.93.36-1.96.06-1.26.07-1.63.07-4.81s-.01-3.55-.07-4.81c-.05-1.03-.22-1.59-.36-1.96-.19-.49-.41-.83-.78-1.2-.37-.37-.71-.59-1.2-.78-.37-.14-.93-.31-1.96-.36-1.26-.06-1.63-.07-4.81-.07Zm0 3.3a5.7 5.7 0 1 1 0 11.4 5.7 5.7 0 0 1 0-11.4Zm0 1.8a3.9 3.9 0 1 0 0 7.8 3.9 3.9 0 0 0 0-7.8Zm5.88-2.13a1.33 1.33 0 1 1 0 2.67 1.33 1.33 0 0 1 0-2.67Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Company */}
        <div>
          <div className="text-white font-semibold mb-4">Company</div>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="#">Careers</Link>
            </li>
            <li>
              <Link href="#">News</Link>
            </li>
            <li>
              <Link href="#">Leadership</Link>
            </li>
            <li>
              <Link href="#">Awards</Link>
            </li>
            <li>
              <Link href="#">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <div className="text-white font-semibold mb-4">Popular Resources</div>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="#">Communities</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
            <li>
              <Link href="#">Guides & Articles</Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <div className="text-white font-semibold mb-4">
            Subscribe to newsletter
          </div>
          <form className="flex rounded-xl overflow-hidden bg-gray-800 ring-1 ring-gray-700 max-w-md">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 bg-transparent px-4 py-3 text-gray-200 placeholder-gray-500 outline-none"
            />
            <button
              type="submit"
              className="px-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold"
            >
              →
            </button>
          </form>
          <p className="mt-3 text-xs text-gray-500 max-w-md">
            By subscribing you agree to our Terms and acknowledge our Privacy
            Statement. You can unsubscribe any time.
          </p>
        </div>
      </div>

      {/* Legal bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} MindMentor. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="#" className="hover:text-white">
              Legal
            </Link>
            <Link href="#" className="hover:text-white">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
