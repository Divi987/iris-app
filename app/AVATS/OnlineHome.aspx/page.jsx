import Link from "next/link";
import style from '../../../components/styles.module.css'

export default function Home() {
    return (
        <div className="w-4/5 p-[5px]">
            <div className="text-center">
                <div>
                    <div className="h-14" />
                </div>
                <div style={{ fontSize: "small" }}>
                    <p className={`${style.MainHeadersText} my-4`}>Welcome to our AVATS Online Application facility.</p>
                    <p className="my-3.5 text-left">This Online Visa/Preclearance Application Facility is available worldwide and must be used by all applicants for an Irish Visa/Preclearance. The technology guides you through the Visa/Preclearance application process, step by step.</p>
                    <p className="my-3.5 text-left">Please check the website of the Immigration Service Delivery at &nbsp;
                        <Link href="http://www.irishimmigration.ie" target="_blank" className="TreeLinkMainText">www.irishimmigration.ie</Link> to see if you require a Visa/Preclearance to Ireland.
                    </p>
                    <p className="my-3.5 text-left">If you require a Visa/Preclearance please click on the link below to begin your application.</p>
                    <p className="my-3.5 text-left">A step-by-step guide on how to use this online application system can be found &nbsp;
                        <Link href="https://www.irishimmigration.ie/coming-to-visit-ireland/giving-your-details-on-avats-for-a-visa-preclearance-application/" className="TreeLinkMainText">here</Link>
                    </p>
                    <p className="text-right">
                    <input type="submit" className="px-1 py-px border border-black rounded" name="ctl00$ContentPlaceHolder1$applyNow" value="Continue" id="ctl00_ContentPlaceHolder1_applyNow" />
                    </p>
                </div>
            </div>
            </div>
    )
}