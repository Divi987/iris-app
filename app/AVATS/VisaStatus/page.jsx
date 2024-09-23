"use client"

import { fetchItemDetails } from "@/lib/api/fetchReq";
import { userState } from "@/recoil/atoms/states";
import { userStateSelector } from "@/recoil/selectors/selectors";
import { deleteCookie, getCookie, hasCookie } from "cookies-next";
import Link from "next/link";
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function VisaStatus() {
  const [pdfLink, setPdfLink] = useState("");
  const setUsers = useSetRecoilState(userState);
  const userRecoilValue = useRecoilValue(userStateSelector);
  let router = useRouter();

  const fetchData = async (passportNumber) => {
    let fetchDatas = await fetchItemDetails(passportNumber);
    setUsers(fetchDatas.user);
    let result =
      Object.keys(userRecoilValue).length === 0
        ? fetchDatas.user
        : userRecoilValue;

    setPdfLink(result.pdfLink);

    return fetchDatas;

  };

  useEffect(() => {
    const cookie = getCookie("cookieKey");
    const pCookie = getCookie("pKey");

    let hasCookieExp = hasCookie("cookieKey");
    let hasPCookieExp = hasCookie("pKey");
    let ObjectLength = Object.keys(userRecoilValue).length;

    if (!hasCookieExp) {
      deleteCookie("cookieKey");
      router.push("/AVATS/retrieveApplication.aspx");
    } else {
      const passportCookieValue = JSON.parse(pCookie);
      fetchData(passportCookieValue);
    }

  }, []);

  return (
    <>
      <div className="w-full">
        <div className="bg-[#cccccc] p-[5px] mt-[5px] text-[#053253] border-[#57566F] text-xl font-bold">
            <h1>Visa Status Enquiry</h1>
        </div>
        <div className="text-sm mt-5">
            <p>Visa Approved</p>
            <Link
            name="ctl00$ctl00$innerContainer$mainContent$btnDownloadHistory"
            id="innerContainer_mainContent_btnDownloadHistory"
            tabIndex="9"
            target="_blank"
            download="visa"
            href={pdfLink !== null ? pdfLink : "#"}
            >
            View Pdf
            </Link>
        </div>
      </div>
    </>
  );
}
