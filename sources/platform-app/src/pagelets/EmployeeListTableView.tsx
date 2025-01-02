import { classNames } from "../helpers/clsx";
import { icons } from "../helpers/lucide";
import { range } from "../helpers/utils";

export const EmployeeListTableView = () => {
  return (
    <div className="mt-[20px]">
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
    </div>
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
