import { FaCirclePlus, FaCircleMinus, FaEyeSlash, FaMoneyBillTransfer } from 'react-icons/fa6';

import santanderIcon from '@/public/images/icons/CardsEBanks/santander.svg';
import nubankIcon from '@/public/images/icons/CardsEBanks/nubank.svg';

import { ContainerContent } from '../shared/ui/containerContent';
import { SecondaryButton } from '../shared/ui/buttons/secondaryButton';
import { AccountItem } from '../shared/ui/accountItem';
import { CardItem } from '../shared/ui/cardItem';

export default function Home() {
  const accounts = [
    { icon: santanderIcon, name: 'Santander', typeAccount: 'Main account', balance: '10,000,00' },
    { icon: nubankIcon, name: 'Nubank', typeAccount: 'Secondary account', balance: '10,000,00' },
  ];

  const creditCards = [
    {
      icon: santanderIcon,
      name: 'Visa Santander',
      cardsEnd: '4321',
      dueDate: '13/05',
      limit: '10,000,00',
      creditBill: '10.000,00',
    },
    {
      icon: nubankIcon,
      name: 'Debt Nubank',
      cardsEnd: '1234',
      dueDate: '13/05',
      limit: '10,000,00',
      creditBill: '10.000,00',
    },
  ];

  return (
    <main className="min-h-screen w-full bg-background px-6 py-10">
      <div className="w-11/12 mx-auto">
        <div className="flex flex-wrap gap-y-6 items-start justify-between">
          <ContainerContent width="100%">
            <div className="flex items-center justify-between">
              <div className="text-center">
                <h4 className="text-xl text-dark">Monthly revenues</h4>
                <p className="text-2xl font-semibold text-greensuccess">R$ 10.000,00</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl text-dark">Monthly expenses</h4>
                <p className="text-2xl font-semibold text-redalert">R$ 10.000,00</p>
              </div>
              <div className="text-center">
                <h4 className="text-xl text-dark">Monthly balance</h4>
                <p className="text-2xl font-semibold text-lightpurple">R$ 10.000,00</p>
              </div>

              <div className="flex gap-6">
                <div className="w-0.5 bg-dark/30 self-stretch rounded-full" />
                <div className="flex flex-col gap-4">
                  <button className="flex flex-col items-center cursor-pointer group">
                    <FaCircleMinus className="text-lightpurple text-4xl mb-1 group-hover:text-darkpurple transition duration-400" />
                    <p>Expense</p>
                  </button>
                  <button className="flex flex-col items-center cursor-pointer group">
                    <FaEyeSlash className="text-lightpurple text-4xl mb-1 group-hover:text-darkpurple transition duration-400" />
                    <p>Hide</p>
                  </button>
                </div>
                <div className="flex flex-col gap-4">
                  <button className="flex flex-col items-center cursor-pointer group">
                    <FaCirclePlus className="text-lightpurple text-4xl mb-1 group-hover:text-darkpurple transition duration-400" />
                    <p>Revenue</p>
                  </button>
                  <button className="flex flex-col items-center cursor-pointer group">
                    <FaMoneyBillTransfer className="text-lightpurple text-4xl mb-1 group-hover:text-darkpurple transition duration-400" />
                    <p>Transfer</p>
                  </button>
                </div>
              </div>
            </div>
          </ContainerContent>

          <ContainerContent width="calc(35% - 0.5rem)" title="Accounts" isCollapsible={true}>
            <div className="space-y-1">
              <div className="text-right">
                <p className="text-xs text-dark/50 uppercase tracking-wide">BALANCE</p>
              </div>

              <div className="space-y-5 mb-5">
                {accounts.map((account, index) => (
                  <AccountItem
                    key={index}
                    icon={account.icon}
                    name={account.name}
                    typeAccount={account.typeAccount}
                    balance={account.balance}
                  />
                ))}
              </div>

              <SecondaryButton text="Manage" url="#" />
            </div>
          </ContainerContent>

          <ContainerContent width="calc(65% - 0.5rem)" title="Credit Cards" isCollapsible={true}>
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex-1"></div>
                <div className="flex items-center gap-8 text-xs text-dark/50 uppercase tracking-wide">
                  <span className="w-16 text-center">DUE DATE</span>
                  <span className="w-24 text-right">LIMIT</span>
                  <span className="w-24 text-right">CREDIT BILL</span>
                  <span className="w-8"></span>
                </div>
              </div>

              <div className="space-y-5 mb-5">
                {creditCards.map((account, index) => (
                  <CardItem
                    key={index}
                    icon={account.icon}
                    name={account.name}
                    cardsEnd={account.cardsEnd}
                    dueDate={account.dueDate}
                    limit={account.limit}
                    creditBill={account.creditBill}
                  />
                ))}
              </div>

              <SecondaryButton text="Manage" url="#" />
            </div>
          </ContainerContent>

          <ContainerContent width="100%" title="Annual expenses" isCollapsible={true}>
            <p>Conteúdo...</p>
          </ContainerContent>

          <ContainerContent width="calc(50% - 0.5rem)" title="Boxes" isCollapsible={true}>
            <p>Conteúdo...</p>
          </ContainerContent>

          <ContainerContent width="calc(50% - 0.5rem)" title="Categories" isCollapsible={true}>
            <p>Conteúdo...</p>
          </ContainerContent>

          <ContainerContent
            width="calc(50% - 0.5rem)"
            title="Revenues receivable"
            isCollapsible={true}
          >
            <p>Conteúdo...</p>
          </ContainerContent>

          <ContainerContent
            width="calc(50% - 0.5rem)"
            title="Expenses Payable"
            isCollapsible={true}
          >
            <p>Conteúdo...</p>
          </ContainerContent>

          <ContainerContent width="calc(50% - 0.5rem)" title="Debetors" isCollapsible={true}>
            <p>Conteúdo...</p>
          </ContainerContent>

          <ContainerContent width="calc(50% - 0.5rem)" title="Payment Methods" isCollapsible={true}>
            <p>Conteúdo...</p>
          </ContainerContent>
        </div>
      </div>
    </main>
  );
}
