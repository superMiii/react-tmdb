import { BellIcon, SearchIcon } from "@heroicons/react/solid";
import { useEffect, useState } from "react";
import { Search } from "./Search";

function Header({ handleLogout }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [seacrh, setSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "bg-[#141414]"} bg-gradient-to-t`}>
      <div className="flex items-center space-x-2 md:space-x-10">
        <img
          src="https://rb.gy/ulxxee"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
          alt=""
        />

        <ul className="hidden space-x-4 md:flex">
          <li className="headerLink">Home</li>
          <li className="headerLink">TV Shows</li>
          <li className="headerLink">Movies</li>
          <li className="headerLink">New & Popular</li>
          <li className="headerLink">My List</li>
        </ul>
      </div>

      <div className="flex items-center space-x-4 text-sm font-light">
        {seacrh && <Search />}
        <SearchIcon
          className="hidden cursor-pointer h-6 w-6 sm:inline"
          onClick={() => setSearch(!seacrh)}
        />
        <BellIcon className="h-6 w-6 cursor-pointer" />
        {/* <Link href="/account"> */}
        <img
          src="https://rb.gy/g1pwyx"
          alt=""
          className="cursor-pointer rounded"
          onClick={handleLogout}
        />
        {/* </Link> */}
      </div>
    </header>
  );
}

export default Header;
