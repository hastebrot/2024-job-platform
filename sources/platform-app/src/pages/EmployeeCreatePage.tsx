import { icons } from "../helpers/lucide";
import { PageCreateLayout } from "./PageCreateLayout";

export const EmployeeCreatePage = () => {
  const headerLeft = (
    <div>
      <span className="font-semibold text-[16px] text-[#1D212C]">Create Job</span>
    </div>
  );

  return (
    <PageCreateLayout headerLeft={headerLeft}>
      <div className="px-[35px] py-[25px] grid grid-cols-[1fr_2fr_1fr] gap-[14px]">
        <nav className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-[14px]">
            <div className="size-[18px] rounded-full bg-[#678E48] flex items-center justify-center">
              <icons.Check className="text-[#FFFFFF]" size={10} strokeWidth={4} />
            </div>
            <span className="font-medium">Job Details</span>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="size-[18px] rounded-full bg-[#F2F6EE] flex items-center justify-center">
              <span className="font-semibold text-[#356966] text-[11px]">2</span>
            </div>
            <span className="font-medium">Job Requirements</span>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="size-[18px] rounded-full bg-[#E9EDF1] flex items-center justify-center"></div>
            <span className="text-[#6C717A]">Hiring Stage</span>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="size-[18px] rounded-full bg-[#E9EDF1] flex items-center justify-center"></div>
            <span className="text-[#6C717A]">Score Card</span>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="size-[18px] rounded-full bg-[#E9EDF1] flex items-center justify-center"></div>
            <span className="text-[#6C717A]">Application Form</span>
          </div>
        </nav>

        <section className="border border-[#DEE0E4] rounded-[8px]">
          <section className="py-[24px] px-[20px]">
            <div className="font-semibold text-[14px] text-[#1D212C] flex items-center justify-between">
              <span>Job Description and Responsibilities</span>
              <div className="size-[18px] rounded-full bg-[#678E48] flex items-center justify-center">
                <icons.Check className="text-[#FFFFFF]" size={10} strokeWidth={4} />
              </div>
            </div>
            <div className="mt-[22px] font-medium text-[13px] text-[#6C717A]">About the job</div>
            <div className="mt-[7px] border border-[#DDDFE3] rounded-[6px] py-[12px] px-[10px] pb-[24px]">
              <div className="font-normal text-[13px] text-[#1D212C] leading-normal">
                We are seeking a talented React Native Mobile Developer to join our dynamic and
                innovative development team. The ideal candidate will have a strong background in
                mobile application development, with a focus on buiding cross-platform applications
                using React Native. As a React Native Mobile Developer, you will collaborate with
                a...
              </div>
            </div>
            <div className="mt-[22px] font-medium text-[13px] text-[#6C717A]">Responsibilities</div>
            <div className="mt-[7px] flex flex-col gap-[7px]">
              <div className="border border-[#DDDFE3] rounded-[6px] py-[12px] px-[10px]">
                <div className="font-normal text-[13px] text-[#1D212C] leading-normal">
                  Innovation: ...
                </div>
              </div>
              <div className="border border-[#DDDFE3] rounded-[6px] py-[12px] px-[10px]">
                <div className="font-normal text-[13px] text-[#1D212C] leading-normal">
                  Collaboration: ...
                </div>
              </div>
              <div className="border border-[#DDDFE3] rounded-[6px] py-[12px] px-[10px]">
                <div className="font-normal text-[13px] text-[#1D212C] leading-normal">
                  Project management: ...
                </div>
              </div>
            </div>
            <div className="mt-[14px] inline-flex">
              <div className="shrink-0 flex items-center justify-center h-[36px] px-[14px] gap-[7px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF]">
                <icons.Plus className="text-[#1D212C]" size={18} />
                <span className="font-medium text-[#1D212C] text-nowrap text-[13px]">
                  Add Responsibilities
                </span>
              </div>
            </div>
          </section>

          <section className="py-[24px] px-[20px] border-t border-[#DEE0E4]">
            <div className="font-semibold text-[14px] text-[#1D212C] flex items-center justify-between">
              <span>Requirements and Skills</span>
              <div className="size-[18px] rounded-full bg-[#678E48] flex items-center justify-center">
                <icons.Check className="text-[#FFFFFF]" size={10} strokeWidth={4} />
              </div>
            </div>
            <div className="mt-[22px] font-medium text-[13px] text-[#6C717A]">Skills</div>
            <div className="mt-[7px] border border-[#DDDFE3] rounded-[6px] py-[12px] px-[10px]">
              <span>Analytical Thinking</span>
              <span>Communication</span>
              <span>Data Analysis</span>
              <span>Project Management</span>
              <span>Innovation</span>
              <span>Organization</span>
            </div>
          </section>
        </section>

        <aside className="bg-[#F4F6F9] rounded-[8px] place-self-start px-[10px] py-[12px]">
          <div>Generate your job description using AI</div>
          <div>
            Save your time creating job descriptions, choose certain keywords according to the job
            and let AI arrange it afterwards.
          </div>
        </aside>
      </div>
    </PageCreateLayout>
  );
};
