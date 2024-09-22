'use client'
import { usePathname } from 'next/navigation';
import style from './styles.module.css';
import { useRecoilValue } from 'recoil';
import { userDobStateSelector, userNationalityStateSelector, userPassportStateSelector, userTranRecordNumberStateSelector } from '@/recoil/selectors/selectors';

export default function ApplicationButton(){
    const pathName = usePathname();

    const passportRecoilValue = useRecoilValue(userPassportStateSelector);
    const transactionRecoNumberValue = useRecoilValue(userTranRecordNumberStateSelector);
    const dobValues = useRecoilValue(userDobStateSelector);
    const nationalityValue = useRecoilValue(userNationalityStateSelector);

    const handleSubmit = () => {
        console.log(transactionRecoNumberValue, passportRecoilValue, dobValues, nationalityValue);
    }

    return(
        <div className={style.applicationButtonBar}>
            <div className="p-px">
                <button onClick={handleSubmit} className={`${pathName !== '/AVATS/retrieveApplication.aspx' ? 'hidden' : `inline-block box-border  ${style.ApplicationButtons}`}`} >submit</button>
            </div>
        </div>
    )
}