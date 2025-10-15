import { ContainerContent } from '../shared/ui/containerContent';

import { FaCirclePlus, FaCircleMinus, FaEyeSlash, FaMoneyBillTransfer } from 'react-icons/fa6';

export default function Home() {
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

          <ContainerContent width="calc(33.333% - 0.5rem)" title="Accounts" isCollapsible={true}>
            <p>Conteúdo...</p>
          </ContainerContent>

          <ContainerContent
            width="calc(66.666% - 0.5rem)"
            title="Credit Cards"
            isCollapsible={true}
          >
            <p>Conteúdo...</p>
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
