import Image, { StaticImageData } from 'next/image';

interface AccountItemProps {
  icon: StaticImageData;
  name: string;
  typeAccount: string;
  balance: string;
}

export const AccountItem = ({ icon, name, typeAccount, balance }: AccountItemProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <Image src={icon} alt={`icon ${name}`} />
        <div>
          <h4 className="font-medium text-dark text-sm">{name}</h4>
          <p className="text-xs text-lightpurple">{typeAccount}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="text-sm font-semibold text-dark">R$ {balance}</p>
      </div>
    </div>
  );
};
