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
          <div className="grid grid-rows-[auto_auto] grid-flow-col gap-x-[28px] gap-y-[10px] text-[14px] leading-none">
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
            <span className="text-nowrap text-[14px] text-[#4F555F]">1 of 32</span>
            <div className="shrink-0 flex items-center justify-center size-[36px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF]">
              <icons.MoreVertical className="text-[#5A5F69]" size={18} />
            </div>
            <div className="h-[20px] w-[1px] bg-[#DADCE0]"></div>
            <div className="shrink-0 flex items-center justify-center h-[36px] px-[14px] gap-[7px] rounded-[8px] bg-[#356966]">
              <icons.Mail className="text-[#FFFFFF]" size={18} />
              <span className="text-[#FFFFFF] text-nowrap text-[14px]">Send Email</span>
            </div>
          </div>
        </header>
        <nav>
          <span>Personal Information</span>
          <span>Contract</span>
          <span>Payroll</span>
          <span>Time Management</span>
          <span>Assets</span>
          <span>Documents</span>
          <span>Training</span>
          <span>Finance</span>
        </nav>
        <section>
          <span>Personal Information</span>
          <span>Full Name</span>
          <span>Firstname Lastname</span>
          <span>Gender</span>
          <span>Male</span>
          <span>Marital Status</span>
          <span>Single</span>
          <span>Religion</span>
          <span>Muslim</span>
          <span>Place of Birth</span>
          <span>City</span>
          <span>Birthdate</span>
          <span>01 February 1995</span>
          <span>Blood Type</span>
          <span>B</span>
          <span>Age</span>
          <span>29</span>
        </section>
        <section>
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
        <section>
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
    </PageLayout>
  );
};
