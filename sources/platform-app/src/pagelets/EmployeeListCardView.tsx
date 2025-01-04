import { Employee } from "../helpers/faker";

export type EmployeeListCardViewProps = {
  employeeList: Employee[];
};

export const EmployeeListCardView = (props: EmployeeListCardViewProps) => {
  return (
    <div className="mt-[20px] grid grid-cols-4 gap-[14px]">
      {props.employeeList.map((employee, index) => (
        <Card key={index}>
          <header>{employee.name}</header>
          <section>content</section>
          <footer>footer</footer>
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
    <div className="rounded-[8px] border border-[#DFE1E5] overflow-clip">
      <div className="bg-[#FFFFFF] w-full h-full">{props.children}</div>
    </div>
  );
};
