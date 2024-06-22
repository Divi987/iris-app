import Link from "next/link";
import "../app/globals.css";
import style from './styles.module.css'

export default function SideBar(){
    return(
        <div className="w-1/5">
            <ul style={{ fontSize: "small"}}>
                <li className={style.NormalRow}> <Link className="TreeLinksText" href="#"> Apply Now </Link></li>
                <li className={style.AltTableRow}><Link className="TreeLinksText" href="/AVATS/retrieveApplication.aspx"> Retreive Application</Link></li>
                <li className={style.NormalRow}><Link className="TreeLinksText" href="#">Frequently Asked Questions</Link></li>
                <li className={style.AltTableRow}><Link className="TreeLinksText" href="#"> Terms & conditions</Link></li>
                <li className={style.NormalRow}><Link className="TreeLinksText" href="#">Privacy Statement & Cookies</Link></li>
                <li className={style.AltTableRow}><Link className="TreeLinksText" href="#">Freedom of Information</Link></li>
            </ul>
        </div>
    )
}