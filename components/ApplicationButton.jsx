'use client'
import { usePathname } from 'next/navigation';
import style from './styles.module.css';

export default function ApplicationButton(){
    const pathName = usePathname();

    console.log(pathName)
    return(
        <div className={style.applicationButtonBar}>
            <div className="p-px">
                <button className={`${pathName !== '/AVATS/retrieveApplication.aspx' ? 'hidden' : `inline-block box-border  ${style.ApplicationButtons}`}`} >submit</button>
            </div>
        </div>
    )
}