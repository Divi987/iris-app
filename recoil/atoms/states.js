import { atom } from "recoil";

export const userState = atom({
    key: "userState",
    default: {},
});

export const userPassport = atom({
    key: "userPassport",
    default: ''
})

export const userTransactionRecordNumber = atom({
  key: "userTransactionRecordNumber",
  default: ''
})

export const userNationality = atom({
  key: "userNationality",
  default: ''
})

export const userDob = atom({
  key: "userDob",
  default: ''
})