import { icons } from "../helpers/lucide";
import { PageLayout } from "./PageLayout";

export const IndexPage = () => {
  return (
    <PageLayout>
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
            <span className="text-nowrap font-semibold">A few seconds ago</span>
            <span className="text-nowrap text-[#4F555F]">Last Messaged</span>
            <span className="text-nowrap font-semibold">2 days ago</span>
            <span className="text-nowrap text-[#4F555F]">Employee ID</span>
            <span className="text-nowrap font-semibold">#EMP7</span>
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
        <div className="mt-[20px] grid gap-[15px] grid-cols-[2fr_1fr]">
          <div className="flex flex-col gap-[15px]">
            <section className="p-[20px] bg-[#FFFFFF] rounded-[8px] shadow-sm shadow-gray-200">
              <header className="flex items-center justify-between">
                <span className="font-semibold text-[16px] text-nowrap">Personal Information</span>
                <div className="shrink-0 flex items-center justify-center h-[28px] px-[10px] gap-[7px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF]">
                  <icons.Edit3 className="text-[#050915]" size={18} />
                  <span className="text-[#050915] text-nowrap text-[13px]">Edit</span>
                </div>
              </header>
              <div className="text-[14px] leading-none gap-[10px] py-[15px] grid grid-rows-[auto_auto] grid-cols-[1fr_1fr] grid-flow-col">
                <span className="text-[#4F555F] text-[12px]">Full Name</span>
                <span>Firstname Lastname</span>
                <span className="text-[#4F555F] text-[12px]">Gender</span>
                <span>Male</span>
              </div>
              <div className="w-full h-[1px] bg-[#D7D9DF]"></div>
              <div className="text-[14px] leading-none gap-[10px] py-[15px] grid grid-rows-[auto_auto] grid-cols-[1fr_1fr] grid-flow-col">
                <span className="text-[#4F555F] text-[12px]">Marital Status</span>
                <span>Single</span>
                <span className="text-[#4F555F] text-[12px]">Religion</span>
                <span>Muslim</span>
              </div>
              <div className="w-full h-[1px] bg-[#D7D9DF]"></div>
              <div className="text-[14px] leading-none gap-[10px] py-[15px] grid grid-rows-[auto_auto] grid-cols-[1fr_1fr] grid-flow-col">
                <span className="text-[#4F555F] text-[12px]">Place of Birth</span>
                <span>City</span>
                <span className="text-[#4F555F] text-[12px]">Birthdate</span>
                <span>01 February 1995</span>
              </div>
              <div className="w-full h-[1px] bg-[#D7D9DF]"></div>
              <div className="text-[14px] leading-none gap-[10px] py-[15px] mb-[-15px] grid grid-rows-[auto_auto] grid-cols-[1fr_1fr] grid-flow-col">
                <span className="text-[#4F555F] text-[12px]">Blood Type</span>
                <span>B</span>
                <span className="text-[#4F555F] text-[12px]">Age</span>
                <span>29</span>
              </div>
            </section>
            <section className="p-[20px] bg-[#FFFFFF] rounded-[8px] shadow-sm shadow-gray-200">
              <span>Address Information</span>
              <span>Residential Address</span>
              <span>1234 Washington Ave., Manchester, Kentucky 12345</span>
              <span>Notes</span>
              <span>Add Note</span>
              <span>Citizen ID Address</span>
              <span>1234 Ash Dr., San Jose, South Dakota 12345</span>
              <span>Notes</span>
              <span>Main entry likely from Ash Drive. Check for a driveway or garage access.</span>
            </section>
          </div>
          <div className="flex flex-col gap-[15px]">
            <section className="p-[20px] bg-[#FFFFFF] rounded-[8px] shadow-sm shadow-gray-200">
              <span>Contact Information</span>
              <span>Personal Contact</span>
              <span>Phone Number</span>
              <span>+12-345-678-999</span>
              <span>Email</span>
              <span>name@domain.com</span>
              <span>Other Contact</span>
              <span>Not Provided</span>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};
