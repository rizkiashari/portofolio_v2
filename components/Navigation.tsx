import Link from "next/link";
import { useRouter } from "next/router";

const Navigation: React.FC = () => {
  const { pathname } = useRouter();

  console.log(pathname);

  return (
    <nav className='flex justify-between items-center px-4 py-2 container flex-wrap'>
      <Link passHref href='/'>
        Rizki Ashari
      </Link>
      <ul className='flex items-center'>
        <li
          className={`px-2 mx-2 text-sm ${
            pathname === "/" ? "text-primary-300" : "text-gray-200"
          }`}>
          <Link href='/'>Home</Link>
        </li>
        <li
          className={`px-2 mx-2 text-sm ${
            pathname === "/about-me" ? "text-primary-300" : "text-gray-200"
          }`}>
          <Link href='/about-me'>About me</Link>
        </li>
        <li
          className={`px-2 mx-2 text-sm ${
            pathname === "/portfolio" ? "text-primary-300" : "text-gray-200"
          }`}>
          <Link href='/portfolio'>Portfolio</Link>
        </li>
        <li className='btn-primary'>
          <Link href='/hire-me'>Hire Me</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
