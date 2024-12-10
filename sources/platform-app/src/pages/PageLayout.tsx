import { icons } from "../helpers/lucide";
import { usePageTitle } from "../helpers/react";

export type PageLayoutProps = {
  children?: React.ReactNode;
  headerLeft?: React.ReactNode;
  headerCenter?: React.ReactNode;
};

export const PageLayout = (props: PageLayoutProps) => {
  usePageTitle("platform-app");

  return (
    <div className="grid min-h-dvh">
      <div className="grid grid-rows-[auto_1fr] bg-[#F4F6F9]">
        <Header slotLeft={props.headerLeft} slotCenter={props.headerCenter} />
        <div className="grid grid-cols-[auto_1fr_auto]">
          <NavigationBar />
          <main>{props.children}</main>
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

type HeaderProps = {
  slotLeft?: React.ReactNode;
  slotCenter?: React.ReactNode;
};

const Header = (props: HeaderProps) => {
  return (
    <header className="h-[56px] px-[20px] flex items-center justify-between bg-[#1D212C] text-[#FFFFFF]">
      <div className="flex items-center gap-[14px]">
        <div className="flex items-center">
          <icons.PersonStanding className="text-[#F9D957]" />
          <span className="text-[20px] font-semibold text-[#FFFFFF]">tiimi</span>
        </div>
        <div className="h-[20px] w-[1px] bg-[#353B4A]"></div>
        {props.slotLeft && props.slotLeft}
      </div>

      {props.slotCenter && props.slotCenter}

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

const NavigationBar = () => {
  return (
    <nav className="w-[62px] bg-[#FFFFFF] flex flex-col items-stretch justify-between shadow-sm shadow-gray-200">
      <div className="py-[14px] flex flex-col items-center gap-[4px]">
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.Home className="text-[#9096A6]" size={18} />
        </div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.Calendar className="text-[#9096A6]" size={18} />
        </div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.MessageSquare className="text-[#9096A6]" size={18} />
        </div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.UserRoundSearch className="text-[#9096A6]" size={18} />
        </div>
        <div className="w-[28px] h-[1px] bg-[#D7D9DF] my-[10px]"></div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px] bg-[#EDF3F7]">
          <icons.UserRound className="text-[#333847]" size={18} />
        </div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.Clock3 className="text-[#9096A6]" size={18} />
        </div>
        <div className="w-[28px] h-[1px] bg-[#D7D9DF] my-[10px]"></div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.Banknote className="text-[#9096A6]" size={18} />
        </div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.Building className="text-[#9096A6]" size={18} />
        </div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.Clipboard className="text-[#9096A6]" size={18} />
        </div>
      </div>

      <div className="py-[14px] flex flex-col items-center gap-[4px] border-t border-[#DBDDE3]">
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.Settings className="text-[#9096A6]" size={18} />
        </div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.HelpCircle className="text-[#9096A6]" size={18} />
        </div>
      </div>
    </nav>
  );
};

const Sidebar = () => {
  return (
    <nav className="w-[56px] bg-[#F4F6F9] flex flex-col items-stretch justify-between border-l border-[#D8DAE0]">
      <div className="flex flex-col items-center border-b border-[#DBDDE3]">
        <div className="flex items-center justify-center size-[55px]">
          <icons.Plus className="text-[#9096A6]" size={18} />
        </div>
      </div>

      <div className="py-[14px] flex flex-col items-center gap-[4px]">
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.ListChecks className="text-[#9096A6]" size={18} />
        </div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.FileText className="text-[#9096A6]" size={18} />
        </div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px]">
          <icons.FolderClosed className="text-[#9096A6]" size={18} />
        </div>
      </div>

      <div className="flex flex-col items-center border-t border-[#DBDDE3]">
        <div className="flex items-center justify-center size-[55px]">
          <icons.ChevronLeft className="text-[#9096A6]" size={18} />
        </div>
      </div>
    </nav>
  );
};
