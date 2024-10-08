"use client";

import Image from "next/image";
import style from "../../../components/styles.module.css";
import calImg from "../../../public/images/cal.gif";
import { useRef, useState } from "react";
import { useSetRecoilState } from "recoil";
import {
  userDob,
  userNationality,
  userPassport,
  userTransactionRecordNumber,
} from "@/recoil/atoms/states";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RetreiveApplication() {
  const transactionRecordNumberControl = useRef();
  const passportNumberControl = useRef();
  const nationalityControl = useRef();
  const dobControl = useRef();
  const [shouldFetch, setShouldFetch] = useState(false);

  const [dob, setDobValue] = useState("")

  const setUserPass = useSetRecoilState(userPassport);
  const setTranRecNum = useSetRecoilState(userTransactionRecordNumber);
  const setDob = useSetRecoilState(userDob);
  const setNationality = useSetRecoilState(userNationality);

  // setTranRecNum(transactionRecordNumberControl.current.value);
  // setUserPass(passportNumberControl.current.value);
  // setNationality(nationalityControl.current.value);
  // setDob(dobControl.current.value);

  return (
    <div className="w-4/5 p-[5px]">
      <table
        width="80%"
        cellPadding="2"
        cellSpacing="0"
        style={{ fontSize: "small" }}
      >
        <tbody>
          <tr>
            <td colSpan="2" className={style.ApplicationNote}>
              If you would like to complete your previous Visa/Preclearance
              application please provide the following information.
            </td>
          </tr>

          <tr>
            <td>&nbsp;</td>
            <td></td>
          </tr>

          <tr>
            <td colspan="2" className={style.ApplicationClientErrorText}></td>
          </tr>
          <tr>
            <td>&nbsp;</td>
            <td></td>
          </tr>
          <tr>
            <td colspan="2" className={style.mandatoryInformation}>
              * Denotes mandatory field
            </td>
          </tr>

          <tr>
            <td className={style.LabelText}>
              Transaction Record Number: <span style={{ color: "red" }}>*</span>
            </td>
            <td>
              <input
                name="ctl00$ContentPlaceHolder1$txtTransRecordID"
                type="text"
                id="ctl00_ContentPlaceHolder1_txtTransRecordID"
                className={style.TextboxText}
                ref={transactionRecordNumberControl}
                onChange={(e) => setTranRecNum(e.target.value)}
              />
              <span
                id="ctl00_ContentPlaceHolder1_rqfldTransRecNo"
                title="Please enter transaction record number."
                className={style.ApplicationClientErrorText}
                style={{ color: "Red", display: "none" }}
              >
                Please enter transaction record number.
              </span>
            </td>
          </tr>

          <tr>
            <td className="LabelText">
              Passport Number: <span style={{ color: "red" }}>*</span>
            </td>
            <td>
              <input
                name="ctl00$ContentPlaceHolder1$txtPassportNumber"
                type="text"
                id="ctl00_ContentPlaceHolder1_txtPassportNumber"
                className={style.TextboxText}
                ref={passportNumberControl}
                onChange={(e) => setUserPass(e.target.value)}
              />
              <span
                id="ctl00_ContentPlaceHolder1_rqfldPassportNo"
                title="Please enter the passport number."
                className={style.ApplicationClientErrorText}
                style={{ color: "Red", display: "none" }}
              >
                Please enter the passport number.
              </span>
            </td>
          </tr>

          <tr>
            <td className={style.LabelText}>
              Country of Nationality: <span style={{ color: "red" }}>*</span>
            </td>
            <td>
              <select
                name="ctl00$ContentPlaceHolder1$ddlNationality"
                id="ctl00_ContentPlaceHolder1_ddlNationality"
                className={style.DropdownListText}
                ref={nationalityControl}
                style={{ width:"71%", background:"#fff", color:"#000"}}
                onChange={(e) => setNationality(e.target.value)}
              >
                <option value="0">--Select--</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Anguilla">Anguilla</option>
                <option value="Antigua & Barbuda">Antigua &amp; Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Aruba">Aruba</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="Bahamas">Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bermuda">Bermuda</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia & Herzegovina">
                  Bosnia &amp; Herzegovina
                </option>
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei Darussalam">Brunei Darussalam</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Canada">Canada</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Cayman Islands">Cayman Islands</option>
                <option value="Central African Republic">
                  Central African Republic
                </option>
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Congo">Congo</option>
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Democratic Republic of Congo">
                  Democratic Republic of Congo
                </option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equitorial Guinea">Equitorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="European Commissio">European Commission</option>
                <option value="Faeroe Islands">Faeroe Islands</option>
                <option value="Federated States of Micronesi">
                  Federated States of Micronesia
                </option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Great Britain">Great Britain</option>
                <option value="Greece">Greece</option>
                <option value="Greenland">Greenland</option>
                <option value="Grenada">Grenada</option>
                <option value="Guadeloupe">Guadeloupe</option>
                <option value="Guam">Guam</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea - Bissau">Guinea - Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hong Kong">Hong Kong</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Ivory Coast">Ivory Coast</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="Kosovo - Republic of">
                  Kosovo - Republic of
                </option>
                <option value="Kosovo - UN Mission in">
                  Kosovo - UN Mission in
                </option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Macau">Macau</option>
                <option value="Macedonia">Macedonia</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Martinique">Martinique</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mayotte">Mayotte</option>
                <option value="Mexico">Mexico</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Montserrat">Montserrat</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="Netherlands Antilles">
                  Netherlands Antilles
                </option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="North Korea">North Korea</option>
                <option value="Northern Mariana Islands">
                  Northern Mariana Islands
                </option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestine">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Pitcairn Islands">Pitcairn Islands</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Puerto Rico">Puerto Rico</option>
                <option value="Qatar">Qatar</option>
                <option value="Reunion">Reunion</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome &amp; Principe">
                  Sao Tome &amp; Principe
                </option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Serbia &amp; Montenegro">
                  Serbia &amp; Montenegro
                </option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Korea">South Korea</option>
                <option value="South Pacific commission">
                  South Pacific commission
                </option>
                <option value="South Sudan">South Sudan</option>
                <option value="Soviet Union">Soviet Union</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="St Kitts - Nevis">St Kitts - Nevis</option>
                <option value="St Lucia">St Lucia</option>
                <option value="St Vincent and the Grenadines">
                  St Vincent and the Grenadines
                </option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Swaziland">Swaziland</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Taiwan">Taiwan</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Timor Leste">Timor Leste</option>
                <option value="Togo">Togo</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkemenistan">Turkemenistan</option>
                <option value="Turkey">Turkey</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates">
                  United Arab Emirates
                </option>
                <option value="United Nations">United Nations</option>
                <option value="United States of America">
                  United States of America
                </option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City">Vatican City</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Western Sahara">Western Sahara</option>
                <option value="Yemen">Yemen</option>
                <option value="Yugoslavia">Yugoslavia</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
              </select>
              <span
                id="ctl00_ContentPlaceHolder1_rqflNationality"
                title="Please enter country of nationality."
                className={style.ApplicationClientErrorText}
                style={{ color: "Red", display: "none" }}
              >
                Please enter country of nationality.
              </span>
            </td>
          </tr>

          <tr>
            <td className={style.LabelText} valign="top">
              Date of Birth: <span style={{ color: "red" }}>*</span>
            </td>
            <td>
              <span
                id="ctl00_ContentPlaceHolder1_cvtxtDOB"
                className={style.ApplicationClientErrorText}
                style={{ color: "Red", display: "none" }}
              >
                Date Required in dd/mm/yyyy format
              </span>
              <span style={{ color: "Red", display: "flex" }}>
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  onChange={(date) => setDobValue(date)}
                  selected={dob}
                  wrapperClassName={""}
                  ref={dobControl}
                  className={style.TextboxText}
                />
                {/* <input
                  name="ctl00$ContentPlaceHolder1$txtDOB"
                  type="text"
                  value="dd/mm/yyyy"
                  id="ctl00_ContentPlaceHolder1_txtDOB"
                  className={style.TextboxText}
                  onfocus='javascript:ClearDateField("ctl00_ContentPlaceHolder1_txtDOB");'
                  onkeyup='javascript:CheckDateFormat("ctl00_ContentPlaceHolder1_txtDOB");'
                  onkeypress='javascript:return DateExtender("ctl00_ContentPlaceHolder1_txtDOB", event, "1234567890");'
                  onblur='javascript:ResetWaterMark("ctl00_ContentPlaceHolder1_txtDOB");'
                  ref={dobControl}
                  onChange={(e) => setDob(e.target.value)}
                /> */}
                &nbsp;
                <Image src={calImg} alt="cal" />
              </span>

              <span
                id="ctl00_ContentPlaceHolder1_rqfldDOB"
                title="Please enter date of birth."
                className={style.ApplicationClientErrorText}
                style={{ color: "Red", display: "none" }}
              >
                Please enter date of birth.
              </span>
              <span
                id="ctl00_ContentPlaceHolder1_compareValidatorDOB"
                className={style.ApplicationClientErrorText}
                style={{ color: "Red", display: "none" }}
              >
                Date of birth must be before current date.
              </span>
              <br />
              <span
                id="ctl00_ContentPlaceHolder1_cvMinDOB"
                className={style.ApplicationClientErrorText}
                style={{ color: "Red", display: "none" }}
              >
                Please enter a valid date
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
