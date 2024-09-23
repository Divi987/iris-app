'use client'
import { usePathname } from 'next/navigation';
import style from './styles.module.css';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { userDobStateSelector, userNationalityStateSelector, userPassportStateSelector, userTranRecordNumberStateSelector } from '@/recoil/selectors/selectors';
import { fetchItemDetails } from '@/lib/api/fetchReq';
import { setCookie } from 'cookies-next';
import { userState } from '@/recoil/atoms/states';
import { useState } from 'react';
import { useRouter } from 'next/navigation' 

export default function ApplicationButton(){
    const pathName = usePathname();

    const passportRecoilValue = useRecoilValue(userPassportStateSelector);
    const transactionRecoNumberValue = useRecoilValue(userTranRecordNumberStateSelector);
    const dobValues = useRecoilValue(userDobStateSelector);
    const nationalityValue = useRecoilValue(userNationalityStateSelector);
    const setUsers = useSetRecoilState(userState);
    const [message, setMessage] = useState("");
    let router = useRouter();


    const handleSubmit = async () => {

        console.log(transactionRecoNumberValue, passportRecoilValue, dobValues, nationalityValue);

        let fetchData = await fetchItemDetails(passportRecoilValue);
        console.log(fetchData);
        // setShouldFetch(true);
    
        if (fetchData.user) {
            const result = fetchData.user;
            if (
                result.grantNumber === transactionRecoNumberValue &&
                result.passportNumber === passportRecoilValue &&
                result.passportNationality === nationalityValue
              ) {
                setUsers(fetchData.user);
                const cookieJson = fetchData.user;
                setCookie("cookieKey", JSON.stringify(fetchData.user), {maxAge: 60*10 });
                setCookie("pKey", JSON.stringify(result.passportNumber), {maxAge: 60*10 });
                router.push("/AVATS/VisaStatus");
              } else {
                setMessage("Record not found!");
              }
        } else {
            setMessage("Record Not Found!");
        }
    

    }

    return(
        <>
        {message}
        <div className={style.applicationButtonBar}>
            <div className="p-px">
                <button onClick={handleSubmit} className={`${pathName !== '/AVATS/retrieveApplication.aspx' ? 'hidden' : `inline-block box-border  ${style.ApplicationButtons}`}`} >submit</button>
            </div>
        </div>
        </>
    )
}