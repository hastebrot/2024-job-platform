import { randEmail, randFirstName, randLastName } from "@ngneat/falso";

export const randomEmployee = () => {
  const firstName = randFirstName({ withAccents: false });
  const lastName = randLastName({ withAccents: false });
  const email = randEmail({
    firstName,
    lastName,
    provider: "mail",
    suffix: "com",
  });

  return {
    firstName,
    lastName,
    email,
  };
};
