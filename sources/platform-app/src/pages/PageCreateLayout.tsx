import { icons } from "../helpers/lucide";
import { usePageTitle } from "../helpers/react";

export type PageLayoutProps = {
  children?: React.ReactNode;
};

export const PageCreateLayout = (props: PageLayoutProps) => {
  usePageTitle("platform-app");

  return (
    <div className="grid min-h-dvh">
      <div className="grid grid-rows-[auto_1fr] bg-[#F4F6F9]">
        <Header />
        <div className="grid grid-cols-[1fr]">
          <main>{props.children}</main>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <header className="h-[56px] px-[20px] flex items-center justify-between bg-[#1D212C] text-[#FFFFFF]">
      <div className="flex items-center gap-[14px]">
        <div className="flex items-center">
          <icons.PersonStanding className="text-[#F9D957]" />
          <span className="text-[20px] font-semibold text-[#FFFFFF]">tiimi</span>
        </div>
        <div className="h-[20px] w-[1px] bg-[#353B4A]"></div>
        <div className="flex items-center gap-[8px]">
          <span className="text-[13px] font-normal text-[#FFFFFF]">Employee</span>
          <span className="text-[13px] font-normal text-[#A1A7B9]">/</span>
          <span className="text-[13px] font-normal text-[#A1A7B9]">Employee Details</span>
        </div>
      </div>

      <div className="flex items-center gap-[12px]">
        <div className="flex items-center justify-center size-[36px] rounded-[8px] bg-[#F9D957]">
          <icons.Plus className="text-[#1D212C]" size={18} />
        </div>
        <div className="h-[20px] w-[1px] bg-[#353B4A]"></div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px] bg-[#333847]">
          <icons.Search className="text-[#FFFFFF]" size={18} />
        </div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px] bg-[#333847]">
          <icons.Bell className="text-[#FFFFFF]" size={18} />
        </div>
        <div className="ml-[2px] flex items-center justify-center size-[36px] rounded-full bg-[#FFFFFF] border-[1px] border-[#FFFFFF] overflow-clip">
          <div className="bg-[#92D4CC] w-full h-full"></div>
        </div>
      </div>
    </header>
  );
};
