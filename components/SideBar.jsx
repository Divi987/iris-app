import Link from "next/link";
import "../app/globals.css";
import style from './styles.module.css'

export default function SideBar(){
    return(
        <div className="w-2/5 lg:w-1/5 p-[5px]">
            <ul className="text-[12px] lg:text-small">
                <li className={`${style.NormalRow}`}> <Link className="TreeLinksText" href="/"> Apply Now </Link></li>
                <li className={style.AltTableRow}><Link className="TreeLinksText" href="/AVATS/retrieveApplication.aspx"> Retreive Application</Link></li>
                <li className={style.NormalRow}><Link className="TreeLinksText" href="/AVATS/frequently-asked-questions">Frequently Asked Questions</Link></li>
                <li className={style.AltTableRow}><Link className="TreeLinksText" href="/AVATS/terms-conditions"> Terms & conditions</Link></li>
                <li className={style.NormalRow}><Link className="TreeLinksText" href="/AVATS/privacy-statement-Cookies">Privacy Statement & Cookies</Link></li>
                <li className={style.AltTableRow}><Link className="TreeLinksText" href="/AVATS/freedom-of-information">Freedom of Information</Link></li>
            </ul>
        </div>
    )
}