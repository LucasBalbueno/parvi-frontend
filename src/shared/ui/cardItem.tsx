import Image, { StaticImageData } from 'next/image';
import { FaList } from 'react-icons/fa6';

interface CardItemProps {
  icon: StaticImageData;
  name: string;
  cardsEnd: string;
  dueDate: string;
  limit: string;
  creditBill: string;
}

export const CardItem = ({ icon, name, cardsEnd, dueDate, limit, creditBill }: CardItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={icon} alt={`Icon ${name}`} />
        <div>
          <h4 className="font-medium text-dark text-sm">{name}</h4>
          <p className="text-xs text-lightpurple">Card's end {cardsEnd}</p>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <span className="w text-right text-sm font-semibold">{dueDate}</span>
        <span className="w-24 text-right text-sm font-semibold">R$ {limit}</span>
        <span className="w-24 text-right text-sm font-semibold">R$ {creditBill}</span>

        <button className="w-8 h-8 bg-lightpurple hover:bg-darkpurple transition-colors duration-400 rounded flex items-center justify-center cursor-pointer">
          <FaList className="text-white text-xs" />
        </button>
      </div>
    </div>
  );
};
