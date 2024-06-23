import Image from 'next/image';
import style from '../../../components/styles.module.css'
import calImg from '../../../public/images/cal.gif'

export default function RetreiveApplication() {
  return (
    <div className="w-4/5 p-[5px]">
      <table width="80%" cellpadding="2" cellspacing="0" style={{ fontSize: "small"}}>
        <tbody>
          <tr>
            <td colspan="2" class={style.ApplicationNote}>
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
              Transaction Record Number: <span style={{color: "red"}}>*</span>
            </td>
            <td>
              <input
                name="ctl00$ContentPlaceHolder1$txtTransRecordID"
                type="text"
                id="ctl00_ContentPlaceHolder1_txtTransRecordID"
                className={style.TextboxText}
              />
              <span
                id="ctl00_ContentPlaceHolder1_rqfldTransRecNo"
                title="Please enter transaction record number."
                className={style.ApplicationClientErrorText}
                style={{color: "Red", display: "none"}}
              >
                Please enter transaction record number.
              </span>
            </td>
          </tr>

          <tr>
            <td class="LabelText">
              Passport Number: <span style={{color: "red"}}>*</span>
            </td>
            <td>
              <input
                name="ctl00$ContentPlaceHolder1$txtPassportNumber"
                type="text"
                id="ctl00_ContentPlaceHolder1_txtPassportNumber"
                className={style.TextboxText}
              />
              <span
                id="ctl00_ContentPlaceHolder1_rqfldPassportNo"
                title="Please enter the passport number."
                className={style.ApplicationClientErrorText}
                style={{color: "Red", display: "none"}}
              >
                Please enter the passport number.
              </span>
            </td>
          </tr>

          <tr>
            <td className={style.LabelText}>
              Country of Nationality: <span style={{color: "red"}}>*</span>
            </td>
            <td>
              <select
                name="ctl00$ContentPlaceHolder1$ddlNationality"
                id="ctl00_ContentPlaceHolder1_ddlNationality"
                className={style.DropdownListText}
              >
                <option value="0">--Select--</option>
                <option value="3">Afghanistan</option>
                <option value="409">Albania</option>
                <option value="58">Algeria</option>
                <option value="1">Andorra</option>
                <option value="8">Angola</option>
                <option value="5">Anguilla</option>
                <option value="4">Antigua and Barbuda</option>
                <option value="10">Argentina</option>
                <option value="6">Armenia</option>
                <option value="649">Aruba</option>
                <option value="13">Australia</option>
                <option value="12">Austria</option>
                <option value="15">Azerbaijan</option>
                <option value="29">Bahamas</option>
                <option value="22">Bahrain</option>
                <option value="18">Bangladesh</option>
                <option value="17">Barbados</option>
                <option value="33">Belarus</option>
                <option value="19">Belgium</option>
                <option value="34">Belize</option>
                <option value="24">Benin</option>
                <option value="25">Bermuda</option>
                <option value="30">Bhutan</option>
                <option value="27">Bolivia</option>
                <option value="652">Bonaire, St Eustatius, Saba</option>
                <option value="16">Bosnia and Herzegovina</option>
                <option value="32">Botswana</option>
                <option value="28">Brazil</option>
                <option value="26">Brunei Darussalam</option>
                <option value="21">Bulgaria</option>
                <option value="20">Burkina Faso</option>
                <option value="23">Burundi</option>
                <option value="111">Cambodia</option>
                <option value="43">Cameroon</option>
                <option value="35">Canada</option>
                <option value="49">Cape Verde</option>
                <option value="118">Cayman Islands</option>
                <option value="37">Central African Republic</option>
                <option value="205">Chad</option>
                <option value="42">Chile</option>
                <option value="45">Colombia</option>
                <option value="113">Comoros</option>
                <option value="568">Congo</option>
                <option value="38">Congo Democratic Republic of</option>
                <option value="46">Costa Rica</option>
                <option value="40">Cote D'Ivoire (Ivory Coast)</option>
                <option value="94">Croatia (Hrvatska)</option>
                <option value="48">Cuba</option>
                <option value="651">Curacao</option>
                <option value="51">Cyprus</option>
                <option value="52">Czech Republic</option>
                <option value="55">Denmark</option>
                <option value="54">Djibouti</option>
                <option value="56">Dominica</option>
                <option value="57">Dominican Republic</option>
                <option value="59">Ecuador</option>
                <option value="61">Egypt</option>
                <option value="201">El Salvador</option>
                <option value="84">Equatorial Guinea</option>
                <option value="63">Eritrea</option>
                <option value="60">Estonia</option>
                <option value="203">Eswatini</option>
                <option value="65">Ethiopia</option>
                <option value="68">Falkland Islands (Malvinas)</option>
                <option value="70">Faroe Islands</option>
                <option value="67">Fiji</option>
                <option value="66">Finland</option>
                <option value="71">France</option>
                <option value="73">Gabon</option>
                <option value="81">Gambia</option>
                <option value="76">Georgia</option>
                <option value="53">Germany</option>
                <option value="78">Ghana</option>
                <option value="79">Gibraltar</option>
                <option value="561">
                  Great Britain (UK) - Dependent Citizen
                </option>
                <option value="562">
                  Great Britain (UK) - National (overseas)
                </option>
                <option value="563">
                  Great Britain (UK) - Overseas citizen
                </option>
                <option value="564">
                  Great Britain (UK) - Protected Person
                </option>
                <option value="565">Great Britain (UK) - Subject</option>
                <option value="85">Greece</option>
                <option value="80">Greenland</option>
                <option value="75">Grenada</option>
                <option value="87">Guatemala</option>
                <option value="82">Guinea</option>
                <option value="89">Guinea-Bissau</option>
                <option value="90">Guyana</option>
                <option value="95">Haiti</option>
                <option value="570">Holy See</option>
                <option value="93">Honduras</option>
                <option value="91">Hong Kong (SAR)</option>
                <option value="96">Hungary</option>
                <option value="104">Iceland</option>
                <option value="100">India</option>
                <option value="97">Indonesia</option>
                <option value="103">Iran</option>
                <option value="102">Iraq</option>
                <option value="98">Ireland</option>
                <option value="99">Israel</option>
                <option value="105">Italy</option>
                <option value="106">Jamaica</option>
                <option value="108">Japan</option>
                <option value="107">Jordan</option>
                <option value="119">Kazakhstan</option>
                <option value="109">Kenya</option>
                <option value="112">Kiribati</option>
                <option value="115">Korea (North)</option>
                <option value="116">Korea (South)</option>
                <option value="643">Kosovo</option>
                <option value="117">Kuwait</option>
                <option value="110">Kyrgyzstan</option>
                <option value="120">Laos</option>
                <option value="129">Latvia</option>
                <option value="121">Lebanon</option>
                <option value="126">Lesotho</option>
                <option value="125">Liberia</option>
                <option value="130">Libya</option>
                <option value="123">Liechtenstein</option>
                <option value="127">Lithuania</option>
                <option value="128">Luxembourg</option>
                <option value="140">Macau (SAR)</option>
                <option value="134">Madagascar</option>
                <option value="148">Malawi</option>
                <option value="150">Malaysia</option>
                <option value="147">Maldives</option>
                <option value="137">Mali</option>
                <option value="145">Malta</option>
                <option value="135">Marshall Islands</option>
                <option value="644">Martinique</option>
                <option value="143">Mauritania</option>
                <option value="146">Mauritius</option>
                <option value="149">Mexico</option>
                <option value="69">Micronesia</option>
                <option value="133">Moldova</option>
                <option value="132">Monaco</option>
                <option value="139">Mongolia</option>
                <option value="526">Montenegro</option>
                <option value="144">Montserrat</option>
                <option value="131">Morocco</option>
                <option value="151">Mozambique</option>
                <option value="435">Myanmar</option>
                <option value="152">Namibia</option>
                <option value="161">Nauru</option>
                <option value="160">Nepal</option>
                <option value="158">Netherlands, Kingdom of</option>
                <option value="575">New Zealand</option>
                <option value="157">Nicaragua</option>
                <option value="154">Niger</option>
                <option value="156">Nigeria</option>
                <option value="136">North Macedonia, Republic of</option>
                <option value="159">Norway</option>
                <option value="165">Oman</option>
                <option value="171">Pakistan</option>
                <option value="177">Palau</option>
                <option value="566">Palestinian National Authority</option>
                <option value="166">Panama</option>
                <option value="169">Papua New Guinea</option>
                <option value="178">Paraguay</option>
                <option value="44">People's Republic of China</option>
                <option value="167">Peru</option>
                <option value="170">Philippines</option>
                <option value="174">Pitcairn</option>
                <option value="172">Poland</option>
                <option value="176">Portugal</option>
                <option value="645">Puerto Rico</option>
                <option value="179">Qatar</option>
                <option value="181">Romania</option>
                <option value="182">Russian Federation</option>
                <option value="183">Rwanda</option>
                <option value="114">Saint Kitts and Nevis</option>
                <option value="122">Saint Lucia</option>
                <option value="228">Saint Vincent and the Grenadines</option>
                <option value="235">Samoa</option>
                <option value="195">San Marino</option>
                <option value="199">Sao Tome and Principe</option>
                <option value="184">Saudi Arabia</option>
                <option value="196">Senegal</option>
                <option value="560">Serbia</option>
                <option value="186">Seychelles</option>
                <option value="194">Sierra Leone</option>
                <option value="189">Singapore</option>
                <option value="650">Sint Maarten</option>
                <option value="579">Slovakia</option>
                <option value="191">Slovenia</option>
                <option value="185">Solomon Islands</option>
                <option value="197">Somalia</option>
                <option value="239">South Africa</option>
                <option value="646">South Sudan</option>
                <option value="64">Spain</option>
                <option value="124">Sri Lanka</option>
                <option value="647">Stateless</option>
                <option value="187">Sudan</option>
                <option value="198">Suriname</option>
                <option value="188">Sweden</option>
                <option value="39">Switzerland</option>
                <option value="202">Syrian Arab Republic</option>
                <option value="218">Taiwan Province of China</option>
                <option value="209">Tajikistan</option>
                <option value="208">Thailand</option>
                <option value="319">Timor-Leste</option>
                <option value="207">Togo</option>
                <option value="213">Tonga</option>
                <option value="216">Trinidad and Tobago</option>
                <option value="212">Tunisia</option>
                <option value="215">Turkiye</option>
                <option value="211">Turkmenistan</option>
                <option value="204">Turks and Caicos Islands</option>
                <option value="217">Tuvalu</option>
                <option value="221">Uganda</option>
                <option value="220">Ukraine</option>
                <option value="2">United Arab Emirates</option>
                <option value="577">
                  United Kingdom (Great Britain &amp; Northern Ireland)
                </option>
                <option value="219">United Republic of Tanzania</option>
                <option value="322">United States of America</option>
                <option value="223">
                  United States of America Minor Outlying Islands
                </option>
                <option value="225">Uruguay</option>
                <option value="200">USSR (former)</option>
                <option value="226">Uzbekistan</option>
                <option value="233">Vanuatu</option>
                <option value="229">Venezuela</option>
                <option value="232">Viet Nam</option>
                <option value="230">Virgin Islands (British)</option>
                <option value="231">Virgin Islands (U.S.)</option>
                <option value="236">Yemen</option>
                <option value="240">Zambia</option>
                <option value="242">Zimbabwe</option>
              </select>
              <span
                id="ctl00_ContentPlaceHolder1_rqflNationality"
                title="Please enter country of nationality."
                className={style.ApplicationClientErrorText}
                style={{color: "Red", display: "none"}}
              >
                Please enter country of nationality.
              </span>
            </td>
          </tr>

          <tr>
            <td className={style.LabelText} valign="top">
              Date of Birth: <span style={{color: "red"}}>*</span>
            </td>
            <td>
              <span
                id="ctl00_ContentPlaceHolder1_cvtxtDOB"
                className={style.ApplicationClientErrorText}
                style={{color: "Red", display: "none"}}
              >
                Date Required in dd/mm/yyyy format
              </span>
              <input
                name="ctl00$ContentPlaceHolder1$txtDOB"
                type="text"
                value="dd/mm/yyyy"
                id="ctl00_ContentPlaceHolder1_txtDOB"
                className={style.TextboxText}
                onfocus='javascript:ClearDateField("ctl00_ContentPlaceHolder1_txtDOB");'
                onkeyup='javascript:CheckDateFormat("ctl00_ContentPlaceHolder1_txtDOB");'
                onkeypress='javascript:return DateExtender("ctl00_ContentPlaceHolder1_txtDOB", event, "1234567890");'
                onblur='javascript:ResetWaterMark("ctl00_ContentPlaceHolder1_txtDOB");'
              />
              &nbsp;
              <Image src={calImg} alt="cal" />

              <span
                id="ctl00_ContentPlaceHolder1_rqfldDOB"
                title="Please enter date of birth."
                class={style.ApplicationClientErrorText}
                style={{color: "Red", display: "none"}}
              >
                Please enter date of birth.
              </span>
              <span
                id="ctl00_ContentPlaceHolder1_compareValidatorDOB"
                className={style.ApplicationClientErrorText}
                style={{color: "Red", display: "none"}}
              >
                Date of birth must be before current date.
              </span>
              <br />
              <span
                id="ctl00_ContentPlaceHolder1_cvMinDOB"
                className={style.ApplicationClientErrorText}
                style={{color: "Red", display: "none"}}
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
