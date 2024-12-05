import { icons } from "../helpers/lucide";
import { PageLayout } from "./PageLayout";

export const EmployeeDetailsPage = () => {
  const headerLeft = (
    <div className="flex items-center gap-[8px]">
      <span className="text-[13px] font-normal text-[#FFFFFF]">Employee</span>
      <span className="text-[13px] font-normal text-[#A1A7B9]">/</span>
      <span className="text-[13px] font-normal text-[#A1A7B9]">Employee Details</span>
    </div>
  );

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
        <div className="mt-[20px] grid gap-[18px] grid-cols-[3fr_2fr]">
          <div className="flex flex-col gap-[18px]">
            <Card>
              <header className="flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                  <icons.UserRound size={16} className="text-[#4F555F]" />
                  <span className="font-semibold text-[16px] text-nowrap">
                    Personal Information
                  </span>
                </div>
                <div className="shrink-0 flex items-center justify-center h-[28px] px-[10px] gap-[7px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF] shadow-xs shadow-gray-200">
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
              <div className="text-[14px] leading-none gap-[10px] py-[15px] pb-0 grid grid-rows-[auto_auto] grid-cols-[1fr_1fr] grid-flow-col">
                <span className="text-[#4F555F] text-[12px]">Blood Type</span>
                <span>B</span>
                <span className="text-[#4F555F] text-[12px]">Age</span>
                <span>29</span>
              </div>
            </Card>
            <Card>
              <header className="flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                  <icons.MapPin size={16} className="text-[#4F555F]" />
                  <span className="font-semibold text-[16px] text-nowrap">Address Information</span>
                </div>
                <div className="shrink-0 flex items-center justify-center h-[28px] px-[10px] gap-[7px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF] shadow-xs shadow-gray-200">
                  <icons.Edit3 className="text-[#050915]" size={18} />
                  <span className="text-[#050915] text-nowrap text-[13px]">Edit</span>
                </div>
              </header>
              <div className="text-[14px] leading-none gap-[10px] py-[15px] grid grid-rows-[auto_auto] grid-cols-[1fr_auto] grid-flow-col">
                <span className="text-[#4F555F] text-[12px]">Residential Address</span>
                <span>1234 Washington Ave., Manchester, Kentucky 12345</span>
                <span className="text-[#4F555F] text-[12px]"></span>
                <span className="underline underline-offset-[3px] font-semibold flex items-center gap-[2px]">
                  View on Map
                  <icons.ChevronRight className="text-[#050915]" size={16} />
                </span>
              </div>
              <div className="text-[14px] leading-none gap-[10px] py-[15px] pt-[5px] grid grid-rows-[auto_auto] grid-cols-[1fr_auto] grid-flow-col">
                <span className="text-[#4F555F] text-[12px]">Notes</span>
                <span className="underline underline-offset-2 text-[#356966] font-semibold">
                  Add Note
                </span>
                <span className="text-[#4F555F] text-[12px]"></span>
                <span></span>
              </div>
              <div className="w-full h-[1px] bg-[#D7D9DF]"></div>
              <div className="text-[14px] leading-none gap-[10px] py-[15px] grid grid-rows-[auto_auto] grid-cols-[1fr_auto] grid-flow-col">
                <span className="text-[#4F555F] text-[12px]">Citizen ID Address</span>
                <span>1234 Ash Dr., San Jose, South Dakota 12345</span>
                <span className="text-[#4F555F] text-[12px]"></span>
                <span className="underline underline-offset-[3px] font-semibold flex items-center gap-[2px]">
                  View on Map
                  <icons.ChevronRight className="text-[#050915]" size={16} />
                </span>
              </div>
              <div className="text-[14px] leading-none gap-[10px] py-[15px] pt-[5px] pb-0 grid grid-rows-[auto_auto] grid-cols-[1fr_auto] grid-flow-col">
                <span className="text-[#4F555F] text-[12px]">Notes</span>
                <div className="justify-self-start bg-[#F4F6F9] rounded-[5px] py-[10px] px-[10px]">
                  <span>
                    Main entry likely from Ash Drive. Check for a driveway or garage access.
                  </span>
                </div>
                <span className="text-[#4F555F] text-[12px]"></span>
                <span></span>
              </div>
            </Card>
          </div>
          <div className="flex flex-col gap-[18px]">
            <Card>
              <header className="flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                  <icons.ContactRound size={16} className="text-[#4F555F]" />
                  <span className="font-semibold text-[16px] text-nowrap">Contact Information</span>
                </div>
                <div className="shrink-0 flex items-center justify-center h-[28px] px-[10px] gap-[7px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF] shadow-xs shadow-gray-200">
                  <icons.Edit3 className="text-[#050915]" size={18} />
                  <span className="text-[#050915] text-nowrap text-[13px]">Edit</span>
                </div>
              </header>
              <div className="text-[13px] font-semibold pt-[15px]">Personal Contact</div>
              <div className="text-[14px] leading-none gap-[10px] py-[15px] grid grid-rows-[auto_auto] grid-cols-[1fr_1fr] grid-flow-col">
                <span className="text-[#4F555F] text-[12px]">Phone Number</span>
                <div className="justify-self-start bg-[#E9EFF3] text-[#005BB0] py-[4px] px-[8px] rounded-[10px]">
                  <span className="text-[13px]">+12-345-678-999</span>
                </div>
                <span className="text-[#4F555F] text-[12px]">Email</span>
                <div className="justify-self-start bg-[#E9EFF3] text-[#005BB0] py-[4px] px-[8px] rounded-[10px]">
                  <span className="text-[13px]">name@domain.com</span>
                </div>
              </div>
              <div className="w-full h-[1px] bg-[#D7D9DF]"></div>
              <div className="text-[13px] font-semibold pt-[15px]">Other Contact</div>
              <div className="text-[14px] py-[10px] pb-0 text-[#AAAFBB]">Not Provided</div>
            </Card>
            <Card>
              <header className="flex items-center justify-between">
                <div className="flex items-center gap-[8px]">
                  <icons.ClipboardList size={16} className="text-[#4F555F]" />
                  <span className="font-semibold text-[16px] text-nowrap">Employment Overview</span>
                </div>
              </header>
              <div className="text-[14px] leading-none gap-[10px] py-[15px] grid grid-rows-[auto_auto] grid-cols-[1fr_1fr] grid-flow-col">
                <span className="text-[#4F555F] text-[12px]">Date Started</span>
                <span>2020-Current (4 Years)</span>
                <span className="text-[#4F555F] text-[12px]">Job Role</span>
                <span>Project Manager</span>
              </div>
              <div className="w-full h-[1px] bg-[#D7D9DF]"></div>
              <div className="text-[14px] leading-none gap-[10px] py-[15px] pb-0 grid grid-rows-[auto_auto] grid-cols-[1fr_1fr] grid-flow-col">
                <span className="text-[#4F555F] text-[12px]">Job Level</span>
                <span>Manager Level</span>
                <span className="text-[#4F555F] text-[12px]">Employment Status</span>
                <span>Fulltime</span>
              </div>
              <div className="text-[14px] py-[20px] pb-0 underline underline-offset-[3px] font-semibold flex items-center gap-[2px]">
                View contract
                <icons.ChevronRight className="text-[#050915]" size={16} />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

type CardProps = {
  children?: React.ReactNode;
};

const Card = (props: CardProps) => {
  return (
    <section className="p-[20px] bg-[#FFFFFF] rounded-[8px] shadow-sm shadow-gray-200">
      {props.children}
    </section>
  );
};
