import { icons } from "../helpers/lucide";
import { usePageTitle } from "../helpers/react";

export type PageLayoutProps = {
  children?: React.ReactNode;
  headerLeft?: React.ReactNode;
};

export const PageCreateLayout = (props: PageLayoutProps) => {
  usePageTitle("platform-app");

  return (
    <div className="grid min-h-dvh">
      <div className="grid grid-rows-[auto_1fr_auto] bg-[#FFFFFF]">
        <Header headerLeft={props.headerLeft} />
        <div className="grid grid-cols-[1fr]">
          <main>{props.children}</main>
        </div>
        <Footer />
      </div>
    </div>
  );
};

type HeaderProps = {
  headerLeft?: React.ReactNode;
};

const Header = (props: HeaderProps) => {
  return (
    <header className="h-[56px] px-[35px] flex items-center justify-between bg-[#FFFFFF] text-[#1D212C] border-b border-[#DDDFE3]">
      <div className="flex items-center gap-[20px]">
        <div className="flex items-center">
          <div className="shrink-0 flex items-center justify-center size-[36px] rounded-full border border-[#DADCE0] bg-[#FFFFFF]">
            <icons.ArrowLeft className="text-[#5A5F69]" size={18} />
          </div>
        </div>
        <div className="flex items-center gap-[14px]">
          <div className="flex items-center">
            <icons.PersonStanding className="text-[#F9D957]" />
            <span className="text-[20px] font-semibold text-[#1D212C]">tiimi</span>
          </div>
          <div className="h-[20px] w-[1px] bg-[#DDDFE3]"></div>
          {props.headerLeft && props.headerLeft}
        </div>
      </div>

      <div className="flex items-center gap-[12px]">
        <div className="shrink-0 flex items-center justify-center h-[36px] px-[14px] gap-[7px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF]">
          <icons.SquareArrowOutUpRight className="text-[#1D212C]" size={18} />
          <span className="font-medium text-[#1D212C] text-nowrap text-[13px]">Preview</span>
        </div>
        <div className="shrink-0 flex items-center justify-center size-[36px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF]">
          <icons.Clock7 className="text-[#1D212C]" size={18} />
        </div>
        <div className="h-[20px] w-[1px] bg-[#DDDFE3]"></div>
        <div className="flex items-center justify-center size-[36px] rounded-[8px] bg-[#333847]">
          <icons.CircleHelp className="text-[#FFFFFF]" size={18} />
        </div>
      </div>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="h-[62px] px-[35px] flex items-center justify-between bg-[#FFFFFF] text-[#1D212C] border-t border-[#DDDFE3]">
      <div className="flex items-center gap-[10px]">
        <div className="shrink-0 flex items-center justify-center h-[36px] px-[14px] gap-[7px] rounded-[8px]">
          <span className="font-normal text-[#1D212C] text-nowrap text-[13px]">Cancel</span>
        </div>
      </div>

      <div className="flex items-center gap-[10px]">
        <div className="shrink-0 flex items-center justify-center size-[36px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF]">
          <icons.ArrowLeft className="text-[#1D212C]" size={18} />
        </div>
        <div className="shrink-0 flex items-center justify-center h-[36px] px-[14px] gap-[7px] rounded-[8px] bg-[#356966]">
          <span className="font-normal text-[#FFFFFF] text-nowrap text-[13px]">Continue</span>
          <icons.ArrowRight className="text-[#FFFFFF]" size={18} />
        </div>
      </div>
    </footer>
  );
};
