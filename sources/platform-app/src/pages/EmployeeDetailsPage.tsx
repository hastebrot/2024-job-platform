import { icons } from "../helpers/lucide";
import { PageLayout } from "../layouts/PageLayout";
import { EmployeeDetailsPersonalTab } from "../pagelets/EmployeeDetailsPersonalTab";

type TabOptions = "personal" | "contract";

export const EmployeeDetailsPage = () => {
  const headerLeft = (
    <div className="flex items-center gap-[8px]">
      <span className="text-[13px] font-normal text-[#FFFFFF]">Employees</span>
      <span className="text-[13px] font-normal text-[#A1A7B9]">/</span>
      <span className="text-[13px] font-normal text-[#A1A7B9]">Employee Details</span>
    </div>
  );
  const selectedTab = "personal" as TabOptions;

  return (
    <PageLayout headerLeft={headerLeft}>
      <div className="px-[35px] py-[25px]">
        <header className="flex items-center gap-[25px]">
          <div className="flex items-center gap-[14px]">
            <div className="shrink-0 flex items-center justify-center size-[36px] rounded-full border border-[#DADCE0] bg-[#FFFFFF]">
              <icons.ArrowLeft className="text-[#5A5F69]" size={18} />
            </div>
            <div className="shrink-0 ml-[2px] flex items-center justify-center size-[52px] rounded-full bg-[#FFFFFF] overflow-clip">
              <div className="bg-[#92D4CC] w-full h-full"></div>
            </div>
            <div className="flex flex-col items-start gap-y-[8px] leading-none">
              <span className="font-semibold text-[16px] text-nowrap">Firstname Lastname</span>
              <div className="h-[24px] px-[10px] gap-[4px] rounded-[24px] flex items-center bg-[#9DC082] text-[#FFFFFF]">
                <span className="size-[6px] bg-[#FFFFFF] rounded-full"></span>
                <span className="text-[12px]">Active</span>
              </div>
            </div>
          </div>
          <div className="h-[32px] w-[1px] bg-[#DADCE0]"></div>
          <div className="grid grid-rows-[auto_auto] grid-flow-col gap-x-[28px] gap-y-[10px] text-[13px] leading-none">
            <span className="text-nowrap text-[#4F555F]">Last Clocked In</span>
            <span className="text-nowrap font-medium">A few seconds ago</span>
            <span className="text-nowrap text-[#4F555F]">Last Messaged</span>
            <span className="text-nowrap font-medium">2 days ago</span>
            <span className="text-nowrap text-[#4F555F]">Employee ID</span>
            <span className="text-nowrap font-medium">#EMP7</span>
          </div>
          <div className="ml-auto flex items-center gap-[14px]">
            <div className="flex items-center gap-[7px]">
              <div className="shrink-0 flex items-center justify-center size-[36px] rounded-full border border-[#DADCE0] bg-[#FFFFFF]">
                <icons.ChevronLeft className="text-[#5A5F69]" size={18} />
              </div>
              <div className="shrink-0 flex items-center justify-center size-[36px] rounded-full border border-[#DADCE0] bg-[#FFFFFF]">
                <icons.ChevronRight className="text-[#5A5F69]" size={18} />
              </div>
            </div>
            <span className="text-nowrap text-[13px] text-[#4F555F]">1 of 32</span>
            <div className="shrink-0 flex items-center justify-center size-[36px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF]">
              <icons.MoreVertical className="text-[#5A5F69]" size={18} />
            </div>
            <div className="h-[20px] w-[1px] bg-[#DADCE0]"></div>
            <div className="shrink-0 flex items-center justify-center h-[36px] px-[14px] gap-[7px] rounded-[8px] bg-[#356966]">
              <icons.Mail className="text-[#FFFFFF]" size={18} />
              <span className="text-[#FFFFFF] text-nowrap text-[13px]">Send Email</span>
            </div>
          </div>
        </header>
        <nav className="py-[10px] mt-[20px] flex items-center gap-[25px] text-nowrap text-[13px] text-[#4F555F] border-b border-[#D8DAE0]">
          <span className="relative flex items-center gap-[5px] text-[#20242F] font-semibold text-nowrap">
            <span className="absolute left-0 right-0 bottom-[-12px] h-[3px] bg-[#20242F]"></span>
            <icons.UserRound size={16} />
            Personal Information
          </span>
          <span className="flex items-center gap-[5px]">
            <icons.ClipboardList size={16} />
            Contract
          </span>
          <span className="flex items-center gap-[5px]">
            <icons.Banknote size={16} />
            Payroll
          </span>
          <span className="flex items-center gap-[5px]">
            <icons.Clock8 size={16} />
            Time Management
          </span>
          <span className="flex items-center gap-[5px]">
            <icons.Bolt size={16} />
            Assets
            <div className="ml-[2px] bg-[#DDDFE3] text-[#171B2C] text-[11px] py-[2px] px-[6px] rounded-[4px]">
              3
            </div>
          </span>
          <span className="flex items-center gap-[5px]">
            <icons.FileText size={16} />
            Documents
            <div className="ml-[2px] bg-[#DDDFE3] text-[#171B2C] text-[11px] py-[2px] px-[6px] rounded-[4px]">
              8
            </div>
          </span>
          <span className="flex items-center gap-[5px]">
            <icons.BookOpen size={16} />
            Training
          </span>
          <span className="flex items-center gap-[5px]">
            <icons.Wallet size={16} />
            Finance
          </span>
        </nav>
        <section className="mt-[20px]">
          {selectedTab === "personal" && <EmployeeDetailsPersonalTab />}
        </section>
      </div>
    </PageLayout>
  );
};
