import { selector } from "recoil";
import { userDob, userNationality, userPassport, userState, userTransactionRecordNumber } from "../atoms/states";

export const userStateSelector = selector({
  key: "userStateSelector",
  get: ({ get }) => get(userState),
});

export const userPassportStateSelector = selector({
  key: "userPassportStateSelector",
  get: ({ get }) => get(userPassport),
});

export const userNationalityStateSelector = selector({
  key: "userNationalityStateSelector",
  get: ({ get }) => get(userNationality),
});

export const userTranRecordNumberStateSelector = selector({
  key: "userTranRecordNumberStateSelector",
  get: ({ get }) => get(userTransactionRecordNumber),
});

export const userDobStateSelector = selector({
  key: "userDobStateSelector",
  get: ({ get }) => get(userDob),
});