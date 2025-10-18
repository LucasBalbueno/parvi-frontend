import Link from 'next/link';

interface SecondaryButtonProps {
  text: string;
  url: string;
  className?: string;
}

export const SecondaryButton = ({ text, url, className }: SecondaryButtonProps) => {
  return (
    <Link
      href={url}
      className={`block text-center bg-graybutton hover:bg-lightpurple group transition duration-400 rounded-sm cursor-pointer ${className}`}
    >
      <span className="text-lightpurple text-sm font-semibold uppercase tracking-wide group-hover:text-light transition duration-400">
        {text}
      </span>
    </Link>
  );
};
