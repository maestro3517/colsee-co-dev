import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Logo from './Logo';

const Header = () => {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`w-full fixed z-[999] transition-colors duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
      <div className="flex justify-between items-center px-4 sm:px-6 lg:px-8">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Logo />
        </div>
      </div>
    </div>
  );
};

export default Header;