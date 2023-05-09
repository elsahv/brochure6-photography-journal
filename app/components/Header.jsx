"use client";
import Link from "next/link";

const Header = () => {
  return (
    <div className="sticky top-0 z-10 w-full flex justify-center border-b-2 border-onyx bg-white">
      <div className="flex p-5">
        <ul className="flex">
          <Link href="/" className="mx-2 text-lg">
            <h1 className="font-bold text-2xl mr-3">Laughing Coyote</h1>
          </Link>
          <Link href="/services" className="mx-2 pt-1">
            Services
          </Link>

          {/* //todo MAKE VISIBLE WHEN READY... */}
          {/* <Link href="/work" className="mx-2">
            Work Process
          </Link> */}
          <Link href="/gallery" className="mx-2 pt-1">
            Gallery
          </Link>

          {/* //todo MAKE VISIBLE WHEN READY... */}
          {/* <Link href="/creative-projects" className="mx-2">
            Creative Projects
          </Link> */}
          <Link
            href="/contact"
            className="ml-5 pt-0.5 px-3 drop-shadow-lg border border-black bg-munsell hover:bg-aquamarine hover:text-munsell"
          >
            Contact
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;