import { icons } from "lucide-react";
import { Employee } from "../helpers/faker";

export type EmployeeListCardViewProps = {
  employeeList: Employee[];
};

export const EmployeeListCardView = (props: EmployeeListCardViewProps) => {
  return (
    <div className="mt-[20px] grid grid-cols-3 xl:grid-cols-4 gap-[14px]">
      {props.employeeList.map((employee, index) => (
        <Card key={index}>
          <header className="m-[18px] mb-0">
            <div className="flex items-center justify-between">
              <div>
                {employee.status === "active" && (
                  <div className="h-[24px] px-[10px] gap-[4px] rounded-[24px] inline-flex items-center bg-[#9DC082] text-[#FFFFFF]">
                    <span className="shrink-0 size-[6px] bg-[#FFFFFF] rounded-full"></span>
                    <span className="text-nowrap text-[12px]">Active</span>
                  </div>
                )}
                {employee.status === "invited" && (
                  <div className="h-[24px] px-[10px] gap-[4px] rounded-[24px] inline-flex items-center bg-[#1D212C] text-[#FFFFFF]">
                    <span className="shrink-0 size-[6px] bg-[#FFFFFF] rounded-full"></span>
                    <span className="text-nowrap text-[12px]">Invited</span>
                  </div>
                )}
                {employee.status === "inactive" && (
                  <div className="h-[24px] px-[10px] gap-[4px] rounded-[24px] inline-flex items-center bg-[#B7BBC6] text-[#FFFFFF]">
                    <span className="shrink-0 size-[6px] bg-[#FFFFFF] rounded-full"></span>
                    <span className="text-nowrap text-[12px]">Inactive</span>
                  </div>
                )}
              </div>
              <icons.Ellipsis className="text-[#989EAD]" size={18} />
            </div>
            <div className="flex flex-col items-center">
              <div className="my-[14px] size-[60px] bg-[#92D4CC] rounded-full"></div>
              <div className="font-medium">{employee.name}</div>
              <div className="text-[#7A7F87] text-[14px]">{employee.role}</div>
            </div>
          </header>

          <section className="m-[18px] p-[18px] bg-[#F4F6F9] rounded-[8px] border border-[#DEE2E8] flex flex-col gap-[14px]">
            <div className="text-[14px] leading-none flex items-center gap-[7px]">
              <icons.Hash className="text-[#1D212C] shrink-0" size={14} />
              {employee.number}
            </div>
            <div className="text-[14px] leading-none flex items-center gap-[7px]">
              <icons.Building className="text-[#1D212C] shrink-0" size={14} />
              <span>{employee.department}</span>
              <>&middot;</>
              <icons.History className="text-[#1D212C] shrink-0" size={14} />
              <span>Fulltime</span>
            </div>
            <div className="text-[14px] leading-none flex items-center gap-[7px]">
              <icons.Mail className="text-[#1D212C] shrink-0" size={14} />
              <span className="text-nowrap border border-[#DFE1E5] text-[#1777BD] bg-[#FFFFFF] rounded-full px-[8px] h-[18px]">
                {employee.contactEmail}
              </span>
            </div>
          </section>

          <footer className="m-[18px] mt-0 flex items-center justify-between">
            <div className="text-[14px]">
              <span className="text-[#7A7F87]">Joined on</span> {employee.joinedDate}
            </div>
            <div className="text-[14px] underline underline-offset-[3px] font-medium flex items-center gap-[2px]">
              <span className="text-nowrap">View details</span>
              <icons.ChevronRight className="text-[#050915]" size={16} />
            </div>
          </footer>
        </Card>
      ))}
    </div>
  );
};

type CardProps = {
  children?: React.ReactNode;
};

const Card = (props: CardProps) => {
  return (
    <div className="grid bg-[#FFFFFF] rounded-[8px] shadow-xs shadow-gray-300">
      {props.children}
    </div>
  );
};
