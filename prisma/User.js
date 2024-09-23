import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export const createUserData = async (
  grantNumber,
  referenceNumber,
  visaType,
  visaCategory,
  visaIssueDate,
  visaValidDate,
  passportNumber,
  dob,
  passportNationality,
  surname,
  givenName,
  pdfLink
) => {
  const user = await prisma.user.create({
    grantNumber: grantNumber,
    referenceNumber: referenceNumber,
    visaType: visaType,
    visaCategory: visaCategory,
    visaIssueDate: visaIssueDate,
    visaValidDate: visaValidDate,
    passportNumber: passportNumber,
    dob: dob,
    passportNationality: passportNationality,
    surname: surname,
    givenName: givenName,
    pdfLink: pdfLink
  });
  return user;
};

export const getUserData = async (id) => {
    const user = await prisma.user.findUnique({
      where: {
        id: id
      }
    })
    return user;
  }
  
  export const getAllUser = async () => {
    const users = await prisma.User.findMany()
    return users;
  }
  
