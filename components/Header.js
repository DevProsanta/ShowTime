import Image from "next/image";
import HeaderItems from "./HeaderItems";
import {
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  HomeIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";

function Header() {
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItems title="HOME" Icon={HomeIcon} />
        <HeaderItems title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItems title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItems title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItems title="SEARCH" Icon={SearchIcon} />
        <HeaderItems title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain cursor-pointer"
        src="/showtime.png"
        width={240}
        height={120}
        alt="logo"
      />
    </header>
  );
}

export default Header;
