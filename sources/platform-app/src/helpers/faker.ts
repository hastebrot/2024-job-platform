import {
  randEmail,
  randFirstName,
  randJobArea,
  randJobTitle,
  randLastName,
  randNumber,
  randPastDate,
  randPhoneNumber,
} from "@ngneat/falso";
import { pick } from "./utils";

export type Employee = {
  firstName: string;
  lastName: string;
  number: string;
  name: string;
  role: string;
  department: string;
  status: string;
  contactEmail: string;
  contactTelephone: string;
  joinedDate: string;
};

export const randomEmployee = (): Employee => {
  const number = `EMP${randNumber({ min: 1, max: 100 })}`;
  const firstName = randFirstName({ withAccents: false });
  const lastName = randLastName({ withAccents: false });
  const name = `${firstName} ${lastName}`;
  const contactEmail = randEmail({
    firstName,
    lastName: "",
    provider: "company",
    suffix: "com",
    nameSeparator: "none",
  });
  const contactTelephone = randPhoneNumber();
  const role = randJobTitle();
  const department = randJobArea();
  const status = pick(Math.floor(3 * Math.random()), ["active", "invited", "inactive"]);
  const joinedDate = randPastDate().toDateString();

  return {
    number,
    firstName,
    lastName,
    name,
    role,
    department,
    status,
    contactEmail,
    contactTelephone,
    joinedDate,
  };
};
