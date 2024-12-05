import { useEffect } from "react";
import { classNames } from "../helpers/clsx";
import { randomEmployee } from "../helpers/faker";
import { icons } from "../helpers/lucide";
import { range } from "../helpers/utils";
import { PageLayout } from "./PageLayout";

export const EmployeeListPage = () => {
  useEffect(() => {
    const employee = randomEmployee();
    console.log({ employee });
  });

  return (
    <PageLayout>
      <div className="px-[35px] py-[25px]">
        <header className="flex items-center gap-[25px] justify-between">
          <div className="font-semibold text-[20px] tracking-[2%]">Employee</div>
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
          <div className="h-[24px] px-[10px] gap-[4px] rounded-[24px] inline-flex items-center">
            <span className="shrink-0 size-[6px] bg-[#9DC082] rounded-full"></span>
            <span className="text-nowrap text-[12px] text-[#1D212C]">Active 28</span>
          </div>
          <div className="h-[24px] px-[10px] gap-[4px] rounded-[24px] inline-flex items-center">
            <span className="shrink-0 size-[6px] bg-[#1D212C] rounded-full"></span>
            <span className="text-nowrap text-[12px] text-[#1D212C]">Invited 1</span>
          </div>
          <div className="h-[24px] px-[10px] gap-[4px] rounded-[24px] inline-flex items-center">
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
          <Table>
            <thead>
              <tr className="h-[34px] bg-[#E9EDF1]">
                <TableHeaderCell isSortable icon={icons.Hash}>
                  <span>ID</span>
                </TableHeaderCell>
                <TableHeaderCell isSortable icon={icons.User2}>
                  <span>Name</span>
                </TableHeaderCell>
                <TableHeaderCell isSortable icon={icons.BriefcaseBusiness}>
                  <span>Role</span>
                </TableHeaderCell>
                <TableHeaderCell isSortable icon={icons.Building}>
                  <span>Department</span>
                </TableHeaderCell>
                <TableHeaderCell isSortable icon={icons.ChartLine}>
                  <span>Status</span>
                </TableHeaderCell>
                <TableHeaderCell isSortable icon={icons.ContactRound}>
                  <span>Contact</span>
                </TableHeaderCell>
                <TableHeaderCell isFullWidth isSortable icon={icons.Calendar}>
                  <span>Joined</span>
                </TableHeaderCell>
                <TableHeaderCell></TableHeaderCell>
                <TableHeaderCell isAddable></TableHeaderCell>
              </tr>
            </thead>
            <tbody>
              {range(1, 11).map((index) => (
                <tr key={index} className="h-[48px] bg-[#FFFFFF]">
                  <TableCell>
                    <span className="text-nowrap">#EMP{index}</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-nowrap border-b border-[#EAEBEE] pb-[1px]">
                      Firstname Lastname
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-nowrap">Project Manager</span>
                  </TableCell>
                  <TableCell>
                    <span className="text-nowrap truncate">Human Resources</span>
                  </TableCell>
                  <TableCell>
                    {
                      [
                        <div className="h-[24px] px-[10px] gap-[4px] rounded-[24px] inline-flex items-center bg-[#9DC082] text-[#FFFFFF]">
                          <span className="shrink-0 size-[6px] bg-[#FFFFFF] rounded-full"></span>
                          <span className="text-nowrap text-[12px]">Active</span>
                        </div>,
                        <div className="h-[24px] px-[10px] gap-[4px] rounded-[24px] inline-flex items-center bg-[#1D212C] text-[#FFFFFF]">
                          <span className="shrink-0 size-[6px] bg-[#FFFFFF] rounded-full"></span>
                          <span className="text-nowrap text-[12px]">Invited</span>
                        </div>,
                        <div className="h-[24px] px-[10px] gap-[4px] rounded-[24px] inline-flex items-center bg-[#B7BBC6] text-[#FFFFFF]">
                          <span className="shrink-0 size-[6px] bg-[#FFFFFF] rounded-full"></span>
                          <span className="text-nowrap text-[12px]">Inactive</span>
                        </div>,
                      ][Math.floor(3 * Math.random())]
                    }
                  </TableCell>
                  <TableCell>
                    <span className="text-nowrap border border-[#DFE1E5] text-[#1777BD] rounded-full px-[8px] h-[18px]">
                      username@mail.com
                    </span>
                  </TableCell>
                  <TableCell>
                    <span className="text-nowrap">01 Feb, 2003</span>
                  </TableCell>
                  <TableCell>
                    <icons.Ellipsis className="text-[#989EAD]" size={18} />
                  </TableCell>
                </tr>
              ))}
            </tbody>
          </Table>
        </section>
      </div>
    </PageLayout>
  );
};

type TableProps = {
  children?: React.ReactNode;
};

const Table = (props: TableProps) => {
  return (
    <div className="rounded-[8px] border border-[#DFE1E5] overflow-clip">
      <table className="bg-[#FFFFFF] w-full border-collapse table-auto">{props.children}</table>
    </div>
  );
};

type TableHeaderCellProps = {
  children?: React.ReactNode;
  icon?: icons.LucideIcon;
  isFullWidth?: boolean;
  isSortable?: boolean;
  isAddable?: boolean;
};

const TableHeaderCell = (props: TableHeaderCellProps) => {
  return (
    <th
      className={classNames(
        "px-[16px] text-[13px] font-normal text-left",
        "border border-t-0 first:border-l-0 last:border-r-0 border-[#DFE1E5]",
        props.isFullWidth && "w-full"
      )}
    >
      <div className="flex items-center gap-[4px]">
        {props.icon && <props.icon className="text-[#1D212C]" size={14} />}
        <span>{props.children}</span>
        {props.isSortable && <icons.ChevronsUpDown className="ml-auto text-[#B7BBC6]" size={14} />}
        {props.isAddable && <icons.Plus className="ml-auto text-[#B7BBC6]" size={14} />}
      </div>
    </th>
  );
};

type TableCellProps = {
  children?: React.ReactNode;
};

const TableCell = (props: TableCellProps) => {
  return (
    <td className="px-[16px] text-[13px] font-normal border border-[#F4F6F9]">{props.children}</td>
  );
};
