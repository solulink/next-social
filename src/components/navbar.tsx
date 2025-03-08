import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      <div className='md:hidden lg:block w-[20%]'>
        {/* LEFT */}
        <Link href="/" className="font-bold text-xl text-yellow-600">SOCIALNAIL</Link>
      </div>
      <div className='hidden md:flex w-[50%]'>
        {/* CENTER */}
        {/*LINK*/}
        <div className="flex gap-6 text-gray-600"></div>
        <Link href='/' className="flex gap-2">
          <Image src="/home.png" alt="Homepage" width={16} height={16} />
          <span>Homepage</span>
        </Link>
        <Link href='/' className="flex gap-2">
          <Image src="/friends.png" alt="Friends" width={16} height={16} />
          <span>Friends</span>
        </Link>
        <Link href='/' className="flex gap-2">
          <Image src="/stories.png" alt="Stories" width={16} height={16} />
          <span>Stories</span>
        </Link>

      </div>
      <div className='w-30%'>
        {/* RIGHT */}
        <MobileMenu/>
      </div>
    </div>
  )
}

export default Navbar