import Image from "next/image";
import logo from '../public/images/justice-logo.png'

export default function Header(){
    return(
        <header className="header">
            <div className="td p-px">
                <div className="logoDiv m-2.5">
                    <Image src={logo} alt="logo" />
                </div>
            </div>
        </header>
    )
}