import { useEffect, useState } from "react";
import { Employee, randomEmployee } from "../helpers/faker";
import { icons } from "../helpers/lucide";
import { range } from "../helpers/utils";
import { PageLayout } from "../layouts/PageLayout";
import { EmployeeListCardView } from "../pagelets/EmployeeListCardView";
import { EmployeeListTableView } from "../pagelets/EmployeeListTableView";

type ViewOptions = "table" | "card";

export const EmployeeListPage = () => {
  const headerLeft = (
    <div className="flex items-center gap-[8px]">
      <span className="text-[18px] font-semibold text-[#FFFFFF]">People</span>
    </div>
  );
  const headerCenter = (
    <div className="flex items-center gap-[4px]">
      <div className="flex items-center h-[34px] rounded-[8px] gap-[4px] px-[14px] bg-[#333847]">
        <span className="text-[13px] font-medium text-[#FFFFFF]">Employees</span>
        <div className="ml-[2px] mr-[-4px] text-[11px] py-[2px] px-[6px] rounded-[4px]">3</div>
      </div>
      <div className="flex items-center h-[34px] rounded-[8px] gap-[4px] px-[14px]">
        <span className="text-[13px] font-normal text-[#989EAD]">Contracts</span>
        <div className="ml-[2px] mr-[-4px] bg-[#E64B0C] text-[#FFFFFF] text-[11px] py-[2px] px-[6px] rounded-[4px]">
          51
        </div>
      </div>
      <div className="flex items-center h-[34px] rounded-[8px] gap-[4px] px-[14px]">
        <span className="text-[13px] font-normal text-[#989EAD]">Departments</span>
        <div className="ml-[2px] mr-[-4px] bg-[#E64B0C] text-[#FFFFFF] text-[11px] py-[2px] px-[6px] rounded-[4px]">
          3
        </div>
      </div>
      <div className="flex items-center h-[34px] rounded-[8px] gap-[4px] px-[14px]">
        <span className="text-[13px] font-normal text-[#989EAD]">Manpower Planning</span>
      </div>
      <div className="flex items-center h-[34px] rounded-[8px] gap-[4px] px-[14px]">
        <span className="text-[13px] font-normal text-[#989EAD]">Organization Structure</span>
      </div>
    </div>
  );
  const selectedView = "card" as ViewOptions;
  const [employeeList, setEmployeeList] = useState<Employee[]>([]);
  useEffect(() => {
    const employeeList = range(0, 10).map(() => {
      return randomEmployee();
    });
    setEmployeeList(employeeList);
  }, []);

  return (
    <PageLayout headerLeft={headerLeft} headerCenter={headerCenter}>
      <div className="px-[35px] py-[25px]">
        <header className="flex items-center gap-[25px] justify-between">
          <div className="font-semibold text-[20px] tracking-[2%]">Employees</div>
          <div className="flex items-center gap-[10px]">
            <div className="shrink-0 flex items-center justify-center h-[36px] px-[14px] gap-[7px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF]">
              <icons.LogIn className="text-[#1D212C] rotate-180" size={18} />
              <span className="font-medium text-[#1D212C] text-nowrap text-[13px]">Import</span>
            </div>
            <div className="shrink-0 flex items-center justify-center h-[36px] px-[14px] gap-[7px] rounded-[8px] border border-[#DADCE0] bg-[#FFFFFF]">
              <icons.LogOut className="text-[#1D212C]" size={18} />
              <span className="font-medium text-[#1D212C] text-nowrap text-[13px]">Export</span>
            </div>
            <div className="shrink-0 flex items-center justify-center h-[36px] px-[14px] gap-[7px] rounded-[8px] bg-[#356966]">
              <icons.UserPlus2 className="text-[#FFFFFF]" size={18} />
              <span className="font-medium text-[#FFFFFF] text-nowrap text-[13px]">
                Add Employee
              </span>
            </div>
          </div>
        </header>

        <section className="mt-[10px] flex items-center gap-[7px]">
          <div className="h-[24px] px-[5px] gap-[4px] rounded-[24px] inline-flex items-center">
            <span className="shrink-0 size-[6px] bg-[#9DC082] rounded-full"></span>
            <span className="text-nowrap text-[12px] text-[#1D212C]">Active 28</span>
          </div>
          <div className="h-[24px] px-[5px] gap-[4px] rounded-[24px] inline-flex items-center">
            <span className="shrink-0 size-[6px] bg-[#1D212C] rounded-full"></span>
            <span className="text-nowrap text-[12px] text-[#1D212C]">Invited 1</span>
          </div>
          <div className="h-[24px] px-[5px] gap-[4px] rounded-[24px] inline-flex items-center">
            <span className="shrink-0 size-[6px] bg-[#989EAD] rounded-full"></span>
            <span className="text-nowrap text-[12px] text-[#989EAD]">Inactive 4</span>
          </div>
        </section>

        <section className="mt-[32px] flex items-center justify-between gap-[7px]">
          <div className="flex items-center gap-[7px]">
            <div className="flex items-center px-[10px] gap-[7px] w-[190px] h-[28px] border border-[#DDDFE3] rounded-[8px] bg-[#FFFFFF]">
              <icons.Search className="text-[#989EAD]" size={16} />
              <span className="font-normal text-[#999FAD] text-[12px] text-nowrap">Search</span>
            </div>
            <div className="flex items-center px-[10px] gap-[7px] h-[28px] rounded-[8px] bg-[#E9EDF1]">
              <icons.Shapes className="text-[#989EAD]" size={16} />
              <span className="font-normal text-[12px] text-nowrap">Type</span>
              <div className="flex items-center justify-center size-[18px] rounded-[4px] bg-[#FFFFFF]">
                <icons.ChevronDown className="text-[#989EAD]" size={14} />
              </div>
            </div>
            <div className="flex items-center px-[10px] gap-[7px] h-[28px] rounded-[8px] bg-[#E9EDF1]">
              <icons.ChartLine className="text-[#989EAD]" size={16} />
              <span className="font-normal text-[12px] text-nowrap">Status</span>
              <div className="flex items-center justify-center size-[18px] rounded-[4px] bg-[#FFFFFF]">
                <icons.ChevronDown className="text-[#989EAD]" size={14} />
              </div>
            </div>
            <div className="flex items-center px-[10px] gap-[7px] h-[28px] rounded-[8px] bg-[#E9EDF1]">
              <icons.BriefcaseBusiness className="text-[#989EAD]" size={16} />
              <span className="font-normal text-[12px] text-nowrap">Role</span>
              <div className="flex items-center justify-center size-[18px] rounded-[4px] bg-[#FFFFFF]">
                <icons.ChevronDown className="text-[#989EAD]" size={14} />
              </div>
            </div>
            <div className="flex items-center px-[10px] gap-[7px] h-[28px] rounded-[8px] bg-[#E9EDF1]">
              <icons.Filter className="text-[#989EAD]" size={16} />
              <span className="font-normal text-[12px] text-nowrap">Advanced Filter</span>
              <div className="flex items-center justify-center size-[18px] rounded-[4px] bg-[#FFFFFF]">
                <icons.ChevronDown className="text-[#989EAD]" size={14} />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-[10px]">
            <div className="flex items-center px-[10px] gap-[7px] h-[28px] rounded-[8px]">
              <icons.UserPlus2 className="text-[#1D212C]" size={16} />
              <span className="font-medium text-[12px] text-[#1D212C] text-nowrap">
                Transfer Employee
              </span>
            </div>
            <div className="h-[20px] w-[1px] bg-[#DADCE0]"></div>
            <div className="h-[28px] w-[56px] bg-[#DDDFE3] rounded-[6px] flex items-center justify-between px-[2px]">
              <div className="flex items-center justify-center size-[24px] rounded-[4px] bg-[#FFFFFF] shadow-sm shadow-gray-300">
                <icons.LayoutList className="text-[#1D212C]" size={14} />
              </div>
              <div className="flex items-center justify-center size-[24px] rounded-[4px]">
                <icons.Grid2X2 className="text-[#1D212C]" size={14} />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-[20px]">
          {selectedView === "table" && <EmployeeListTableView employeeList={employeeList} />}
          {selectedView === "card" && <EmployeeListCardView employeeList={employeeList} />}
        </section>
      </div>
    </PageLayout>
  );
};
