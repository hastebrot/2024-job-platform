import { icons } from "../helpers/lucide";

export type EmployeeDetailsPersonalTabProps = {};

export const EmployeeDetailsPersonalTab = (_props: EmployeeDetailsPersonalTabProps) => {
  return (
    <div className="mt-[20px] grid gap-[18px] grid-cols-[3fr_2fr]">
      <div className="flex flex-col gap-[18px]">
        <Card>
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-[8px]">
              <icons.UserRound size={16} className="text-[#4F555F]" />
              <span className="font-semibold text-[16px] text-nowrap">Personal Information</span>
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
            <span className="underline underline-offset-[3px] font-medium flex items-center gap-[2px]">
              View on Map
              <icons.ChevronRight className="text-[#050915]" size={16} />
            </span>
          </div>
          <div className="text-[14px] leading-none gap-[10px] py-[15px] pt-[5px] grid grid-rows-[auto_auto] grid-cols-[1fr_auto] grid-flow-col">
            <span className="text-[#4F555F] text-[12px]">Notes</span>
            <span className="underline underline-offset-2 text-[#356966] font-medium">
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
            <span className="underline underline-offset-[3px] font-medium flex items-center gap-[2px]">
              View on Map
              <icons.ChevronRight className="text-[#050915]" size={16} />
            </span>
          </div>
          <div className="text-[14px] leading-none gap-[10px] py-[15px] pt-[5px] pb-0 grid grid-rows-[auto_auto] grid-cols-[1fr_auto] grid-flow-col">
            <span className="text-[#4F555F] text-[12px]">Notes</span>
            <div className="justify-self-start bg-[#F4F6F9] rounded-[5px] py-[10px] px-[10px]">
              <span>Main entry likely from Ash Drive. Check for a driveway or garage access.</span>
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
          <div className="text-[14px] py-[20px] pb-0 underline underline-offset-[3px] font-medium flex items-center gap-[2px]">
            View contract
            <icons.ChevronRight className="text-[#050915]" size={16} />
          </div>
        </Card>
      </div>
    </div>
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
