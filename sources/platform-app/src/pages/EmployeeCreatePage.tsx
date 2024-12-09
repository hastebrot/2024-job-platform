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
      <div className="px-[35px] py-[25px] grid grid-cols-[1fr_2fr_1fr] gap-[14px] mr-[10%]">
        <nav className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-[14px]">
            <div className="size-[18px] rounded-full bg-[#678E48] flex items-center justify-center">
              <icons.Check className="text-[#FFFFFF]" size={10} strokeWidth={4} />
            </div>
            <span className="font-medium text-[13px]">Job Details</span>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="relative size-[18px] rounded-full bg-[#F2F6EE] flex items-center justify-center">
              <div className="absolute inset-[-4px] border-[2px] border-[#315F5C] rounded-full"></div>
              <span className="font-semibold text-[#356966] text-[11px]">2</span>
            </div>
            <span className="font-medium text-[13px]">Job Requirements</span>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="size-[18px] rounded-full bg-[#E9EDF1] flex items-center justify-center"></div>
            <span className="text-[#6C717A] text-[13px]">Hiring Stage</span>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="size-[18px] rounded-full bg-[#E9EDF1] flex items-center justify-center"></div>
            <span className="text-[#6C717A] text-[13px]">Score Card</span>
          </div>
          <div className="flex items-center gap-[14px]">
            <div className="size-[18px] rounded-full bg-[#E9EDF1] flex items-center justify-center"></div>
            <span className="text-[#6C717A] text-[13px]">Application Form</span>
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
            <div className="mt-[7px] border border-[#DDDFE3] rounded-[6px] p-[12px]">
              <div className="font-normal text-[13px] text-[#1D212C] leading-normal">
                We are seeking a talented React Native Mobile Developer to join our dynamic and
                innovative development team. The ideal candidate will have a strong background in
                mobile application development, with a focus on buiding cross-platform applications
                using React Native. As a React Native Mobile Developer, you will collaborate with
                a...
              </div>
              <div className="flex items-end justify-between mt-[20px]">
                <div className="flex items-center gap-[20px]">
                  <icons.Bold className="text-[#1D212C]" size={14} />
                  <icons.Italic className="text-[#1D212C]" size={14} />
                  <icons.Underline className="text-[#1D212C]" size={14} />
                  <icons.List className="text-[#1D212C]" size={14} />
                  <icons.ListOrdered className="text-[#1D212C]" size={14} />
                  <icons.Undo2 className="text-[#1D212C]" size={14} />
                  <icons.Redo2 className="text-[#1D212C]" size={14} />
                </div>
                <div className="shrink-0 flex items-center justify-center h-[28px] p-[10px] gap-[7px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF] shadow-xs shadow-gray-200">
                  <icons.Sparkles className="text-[#1D212C]" size={14} />
                  <span className="font-medium text-[#1D212C] text-nowrap text-[13px]">
                    Generate
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-[22px] font-medium text-[13px] text-[#6C717A]">Responsibilities</div>
            <div className="mt-[7px] flex flex-col gap-[7px]">
              <div className="flex items-center">
                <div className="border border-[#DDDFE3] rounded-[6px] p-[12px]">
                  <div className="font-normal text-[13px] text-[#1D212C] leading-normal">
                    Innovation: Develop and test new IT solutions, products, and services through
                    creative experimentation and prototyping.
                  </div>
                </div>
                <div className="mr-[-20px] shrink-0 size-[40px] flex items-center justify-center">
                  <icons.X className="text-[#6C717A]" size={18} />
                </div>
              </div>
              <div className="flex items-center">
                <div className="border border-[#DDDFE3] rounded-[6px] p-[12px]">
                  <div className="font-normal text-[13px] text-[#1D212C] leading-normal">
                    Collaboration: Work closely with cross-functional teams providing technical
                    expertise and insights.
                  </div>
                </div>
                <div className="mr-[-20px] shrink-0 size-[40px] flex items-center justify-center">
                  <icons.X className="text-[#6C717A]" size={18} />
                </div>
              </div>
              <div className="flex items-center">
                <div className="border border-[#DDDFE3] rounded-[6px] p-[12px]">
                  <div className="font-normal text-[13px] text-[#1D212C] leading-normal">
                    Project management: Manage R&D projects, ensuring they are completed on time and
                    within budget.
                  </div>
                </div>
                <div className="mr-[-20px] shrink-0 size-[40px] flex items-center justify-center">
                  <icons.X className="text-[#6C717A]" size={18} />
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
            <div className="mt-[7px] border border-[#DDDFE3] rounded-[6px] p-[12px] pb-[36px] flex flex-wrap gap-[7px]">
              <span className="inline-flex items-center h-[24px] bg-[#F2F6EE] rounded-full px-[10px] text-[13px]">
                Analytical Thinking
              </span>
              <span className="inline-flex items-center h-[24px] bg-[#F2F6EE] rounded-full px-[10px] text-[13px]">
                Communication
              </span>
              <span className="inline-flex items-center h-[24px] bg-[#F2F6EE] rounded-full px-[10px] text-[13px]">
                Data Analysis
              </span>
              <span className="inline-flex items-center h-[24px] bg-[#F2F6EE] rounded-full px-[10px] text-[13px]">
                Project Management
              </span>
              <span className="inline-flex items-center h-[24px] bg-[#F2F6EE] rounded-full px-[10px] text-[13px]">
                Innovation
              </span>
              <span className="inline-flex items-center h-[24px] bg-[#F2F6EE] rounded-full px-[10px] text-[13px]">
                Organization
              </span>
            </div>
          </section>
        </section>

        <aside className="bg-[#F4F6F9] rounded-[8px] place-self-start p-[12px] gap-[12px] flex flex-col">
          <div className="font-medium text-[13px]">Generate your job description using AI</div>
          <div className="font-normal text-[13px] text-[#6C717A]">
            Save your time creating job descriptions, choose certain keywords according to the job
            and let AI arrange it afterwards.
          </div>
        </aside>
      </div>
    </PageCreateLayout>
  );
};
