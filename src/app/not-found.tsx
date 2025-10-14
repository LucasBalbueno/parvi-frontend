import Image from 'next/image';

import HandsCoin from '@/public/images/HandsCoin.svg';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col sm:flex-row gap-14 p-4 sm:gap-32 items-center justify-center">
        <Image src={HandsCoin} alt="Mão segurando moeda" className="w-3/12" />
        <div className="w-10/12 sm:w-4/12 flex flex-col gap-8 items-center justify-center">
          <span className="font-title text-8xl text-gradient-purple">404</span>
          <h1 className="text-3xl text-gradient-purple font-semibold text-center">
            Oops! Page not found
          </h1>
          <p className="text-2xl text-dark text-center">
            Sorry, the page you're looking for doesn't exist, please go back to the home!
          </p>
          <Link
            href={'/'}
            className="w-full h-16 bg-gradient-purple rounded-xl cursor-pointer flex items-center justify-center text-light font-medium"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
