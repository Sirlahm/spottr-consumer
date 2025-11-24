import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";

const Terms = () => {
  const navigate = useNavigate();
  return (
    <div className="relative overflow-x-hidden min-h-[100vh] sm:pt-[200px] pt-[300px]">
      <div>
        <div
          className={`
         bg-[#102954]
        fixed top-0 w-[100%] z-[100000000]`}
        >
          <Header />
          <p className="text-center text-[#fff] font-[600] sm:text-[30px] text-[25px] my-[30px]">
            SpottR Terms And Conditions Of Service
          </p>
        </div>
        <div className="bg-[#f4f9ff] p-[10%]">
          <p className="text-center hidden">
            Please read these terms carefully as you are bound by them By
            downloading our app and signing up, you accept our terms and
            conditions of service.{" "}
          </p>
          <p className="text-center m-auto pt-3 text-[16px]">
            Document effective 1st of June, 2020{" "}
          </p>
        </div>
        <div className="mt-5 mb-5 px-[8%] py-[2%]">
          <p className="sm:text-[24px] text-[20px] font-[600] text-[#102954] leading-[2px] mb-[40px]">
            1. Introduction
          </p>
          <p className="sm:text-[18px] text-[14px] mb-[60px]">
            SpottR is a productivity platform available online and through
            mobile applications.
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            1.1 Purpose
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            The SpottR app helps users to find economic opportunities globally
            by joining the main ecosystem. Opportunities include, but is not
            limited to, goods & services for sale, jobs, business opportunities,
            events, information and other wealth creating opportunities.
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            1.2 Agreement
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            When you access our website at www.thespottrapp.com and/or our
            mobile application(s) as a User and Client, you agree to be bound by
            the following Terms of Use. Therefore, please, take the time to read
            the following binding Terms of Use below.{" "}
          </p>
          <p className="sm:text-[18px] text-[14px] mb-[15px]">
            For the purpose of this agreement
          </p>
          <p className="my-[20px] sm:text-[18px] text-[14px]">
            a User is an individual who uses our website or mobile application
            to evaluate our service or for educational purposes
          </p>
          <p className="mb-[20px] sm:text-[18px] text-[14px]">
            a Client is an individual who signs up to the SpottR service that
            entitles the Client to find opportunities and engage in
            transactions.
          </p>
          <p className="mb-[20px] sm:text-[18px] text-[14px]">
            This Agreement, alongside our Privacy Policy, applies to both Users
            and Clients. If you elect to become a Client, you will be subject to
            these Terms of Use, our Client Agreement, our Privacy Policy and any
            additional terms to which you agree to when you create or initiate
            any transaction(s).{" "}
          </p>
          <p className="sm:sm:text-[24px] text-[20px] font-[600] text-[#102954] leading-[2px] mb-[40px]">
            2. Obligations
          </p>
          <p className="sm:text-[18px] text-[14px] mb-[60px]">
            You must be 18 or older to access our website or mobile
            applications.{" "}
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            2.1 Eligibility
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            SpottR is intended solely for individuals who are 18 or older. Any
            access to or use of SpottR by anyone under the age of 18 is
            unauthorized, unlicensed, and in violation of these Terms of Use. By
            accessing or using SpottR, you represent and warrant that you are 18
            or older.
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            2.2 Your Access
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            In order to access certain features of SpottR, you must register to
            create an account ("User Account"). When you register, you will be
            asked to choose a password, which will be required to access your
            User Account at any time. SpottR has physical, electronic and
            procedural safeguards that comply with regulatory standards to guard
            Users' and Clients' non-public personal information (see Privacy
            Policy). You are responsible for safeguarding your password and
            other User Account information. You agree not to disclose your
            password to any third party and you will notify SpottR immediately
            if your password is lost or stolen or if you suspect any
            unauthorized use of your User Account. As a User you agree that you
            shall be solely responsible for any activities or actions under your
            User Account, whether or not you have authorized such activities or
            actions. You agree that the information you provide to us on account
            registration through our website or mobile application(s) will be
            true, accurate, current, and complete. If you wish to develop
            enhancements to the SpottR service then you must do so via our
            "Partner Program" API. As used in these Terms, "APIs" means
            programmatic web APIs and associated tools and documentation that
            provide access to certain data displayed on our website or in our
            mobile applications. Access to our APIs requires you meet our
            Partner Program eligibility criteria and enter into a signed
            partnership agreement with SpottR. You may not scrape or copy
            information through any means (including crawlers, browser plugins
            and add-ons, and any other technology or manual work) as explained
            in Section 6.2. If you wish to learn more about becoming a Partner,
            please contact
            <span className="text-[#102954] cursor-pointer">
              {" "}
              partner@theSpottrapp.com
            </span>
          </p>
          {/* <p className="terms-body blue">partner@theSpottrapp.com</p> */}
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            By creating a User Account, you automatically sign up for various
            types of alerts via e-mail and mobile notifications. We never
            include your password in these communications, but we may include
            your name, or email address and information about your portfolio(s)
            if you are a Client. Anyone with access to your e-mail or mobile
            device will be able to view these alerts. You may unsubscribe from
            marketing-oriented emails at any time.
          </p>
          <p className="sm:sm:text-[24px] text-[20px] font-[600] text-[#102954] leading-[2px] mb-[40px]">
            3. Disclaimer and Limit of Liability
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            SpottR cannot be held responsible for any opportunity insights or
            recommendations provided to users.
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            For the purpose of this agreement
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            3.1 For a User who is not a Client
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            You understand and acknowledge that the investment results you could
            obtain from investment information and financial insights provided
            by SpottR cannot be guaranteed and that SpottR cannot be held
            responsible. All investments entail a risk of loss and that you may
            lose money. Investment management services may be offered to
            individuals who become clients, at the sole discretion of SpottR.
            Your election to engage our wealth creating services are subject to
            your explicit enrollment and acceptance of this Terms of Use. You
            agree and understand that your use of SpottR is for educational
            purposes only and is not intended to provide legal, tax or financial
            planning advice. You agree as a User that you are responsible for
            your own business and investment research and decisions, that SpottR
            is only one of many tools you may use as part of a comprehensive
            business and investment education process, that you should not and
            will not rely on SpottR as the primary basis of your business and
            investment decisions and, except as otherwise provided for herein,
            SpottR will not be liable for decisions/actions you take or
            authorize third parties to take on your behalf based on information
            you receive as a User of SpottR or information you otherwise see on
            our website.
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            3.2 Disclaimer Warranties
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            Your use of SpottR's website, and the personal information you
            provide is at your sole discretion. SpottR's website and all
            materials, information, products and services included therein, are
            provided on an AS IS and AS AVAILABLE basis without warranties of
            any kind from SpottR.
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            SpottR expressly disclaims all warranties of any kind, express,
            implied or statutory, relating to SpottR's website, content and/or
            user information, including without limitation the warranties of
            title, merchantability, fitness for a particular purpose,
            non-infringement of proprietary rights, course of dealing or course
            of performance. SpottR disclaims any warranties, express or implied:{" "}
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            Regarding the availability, security, accuracy, reliability,
            timeliness and performance of SpottR's website, content and/or user
            information;
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            that SpottR's website will be error-free or that any errors will be
            corrected;
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            that SpottR's website will be free from electronic viruses; or
            Regarding the performance of or accuracy, quality, currency,
            completeness or usefulness of any information provided by SpottR on
            its website including but not limited to information obtained
            through social media.
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            a) no advice or information, whether oral or written, obtained by
            you from SpottR's website, shall create any warranty not expressly
            stated in this Agreement. If you choose to rely on such information,
            you do so solely at your own risk.{" "}
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            3.3 Limitation of Liability
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            In no event shall SpottR or any of its officers, directors,
            employees, or agents be liable to you for any damages whatsoever,
            including without limitation indirect, incidental, special,
            punitive, or consequential damages, arising out of or in connection
            with your use of SpottR, content and/or user information, including
            but not limited to the quality, accuracy, or utility of the
            information provided as part of or through SpottR or for any
            transaction decisions made on the basis of such information, whether
            the damages are foreseeable and whether or not SpottR has been
            advised of the possibility of such damages. The foregoing limitation
            of liability shall apply to the fullest extent permitted by law in
            the applicable jurisdiction and in no event shall SpottR's
            cumulative liability to you exceed 10,000 NGN.
          </p>
          <p className="sm:sm:text-[24px] text-[20px] font-[600] text-[#102954] leading-[2px] mb-[40px]">
            4. Termination
          </p>
          <p className="mb-[30px] sm:text-[18px] text-[14px]">
            Each of us can end this agreement at any time, subject to the
            maturity of all plans. You may request termination of your User
            Account at any time and for any reason by sending an email to
            hello@theSpottrapp.com. We may terminate or suspend your access to
            SpottR, in our sole discretion, at any time for any reason without
            notice to you. Further, if we believe, in our sole discretion, that
            a violation of these Terms of Use has occurred, we may take any
            other corrective action we deem appropriate. We reserve the right to
            investigate suspected violations of these Terms of Use. We may seek
            to gather information from a user who is suspected of violating
            these Terms of Use (or from any other user) and you agree to provide
            us with such information. We will fully cooperate with any law
            enforcement authority or court order requesting or directing us to
            disclose useful information that violate these Terms of Use. Any
            suspension, termination, or cancellation shall not affect your
            obligations to SpottR under these Terms of Use (including but not
            limited to ownership, indemnification, and limitation of liability),
            which by their sense and context are intended to survive such
            suspension, termination, or cancellation.{" "}
          </p>
          <p className="text-[#102954] cursor-pointer mb-[40px] text-[16px]">
            hello@theSpottrapp.com
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            If there is a legal dispute, it will take place in Federal High
            Courts under Nigerian Law. You agree that these Terms of Use shall
            be governed by and interpreted in accordance with the laws of the
            Federal Republic of Nigeria.
          </p>
          <p className="sm:sm:text-[24px] text-[20px] font-[600] text-[#102954] leading-[2px] mb-[40px]">
            6. SpottR "Dos" and "Don'ts
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            SpottR grants you a license to use our website and mobile
            application(s) so long as you comply with all our rules.
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            6.1 Dos: You agree you will:
          </p>

          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            comply with all applicable laws, including, without limitation,
            privacy laws, intellectual property laws, anti-spam laws, export
            control laws, tax laws, and regulatory requirements;
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            use real names and/or verified aliases in your profile
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            keep your password confidential;
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            use the Services in a professional manner.
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            6.2 Don’ts: You agree you won't:
          </p>

          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            circumvent, disable, or otherwise interfere with security-related
            features of SpottR or features that prevent or restrict use or
            copying of any content or User information
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            circumvent, disable, or otherwise interfere with security-related
            features of SpottR or features that prevent or restrict use or
            copying of any content or User information
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            upload, email, transmit, provide, or otherwise make available:
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            any User information which you do not have the lawful right to use,
            copy, transmit, display, or make available (including any User
            information that would violate any confidentiality or fiduciary
            obligations that you might have with respect to the User
            information);
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            any User information which you do not have the lawful right to use,
            copy, transmit, display, or make available (including any User
            information that would violate any confidentiality or fiduciary
            obligations that you might have with respect to the User
            information); or
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            any User information that infringes the intellectual property rights
            of, or violates the privacy rights of, any third-party (including
            without limitation copyright, trademark, patent, trade secret, or
            other intellectual property right, moral right, or right of
            publicity); or
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            unsolicited or unauthorized advertising, promotional materials, junk
            mail, spam, chain letters, pyramid schemes, or{" "}
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            any other form of solicitation; or any personal information that is
            unlawful, obscene, harmful, threatening, harassing, defamatory, or
            hateful, or that contain objects or symbols of hate, invade the
            privacy of any third-party, contain nudity, are deceptive,
            threatening, abusive, inciting of unlawful action, or are otherwise
            objectionable in the sole discretion of SpottR; or{" "}
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            any personal information that contains software viruses or any other
            computer code, files, or programs designed to (i) interrupt,
            destroy, or limit the functionality of any computer software; or
            (ii) interfere with the access of any user, host or network,
            including without limitation overloading, flooding, spamming,
            mail-bombing, or sending a virus to SpottR; or{" "}
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            any personal information that includes code that is hidden or
            otherwise surreptitiously contained within the User information;
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            any personal information that includes code that is hidden or
            otherwise surreptitiously contained within the User information;
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            forge any TCP/IP packet header or any part of the header information
            in any posting, or in any way use SpottR to send altered, deceptive,
            or false source-identifying information;
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            interfere with or disrupt (or attempt to interfere with or disrupt)
            any SpottR web page, server, or network, or the technical delivery
            systems of SpottR's providers, or disobey any requirements,
            procedures, policies, or regulations of networks connected to
            SpottR.
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            attempt to probe, scan, or test the vulnerability of any SpottR
            system or network or breach or impair or circumvent any security or
            authentication measures protecting SpottR;
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            attempt to decipher, decompile, disassemble, or reverse-engineer any
            of the software used to provide SpottR;
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            attempt to access, search, or meta-search SpottR or content thereon
            with any engine, software, tool, agent, device, or mechanism other
            than software and/or search agents provided by SpottR or other
            generally available third- party web browsers, including without
            limitation any software that sends queries to SpottR to determine
            how a website or web page ranks;
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            violate the terms of service or any other rule or agreement
            applicable to you or SpottR's inclusion in, reference to, or
            relationship with any third party or third-party site or service, or
            your use of any such third-party site or service; Collect or store
            personal information about other users without their express
            permission;
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            impersonate or misrepresent your affiliation with any person or
            entity, through pretexting or some other form of social engineering,
            or commit fraud;
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            violate any applicable law, regulation, or ordinance;
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            scrape or copy information through any means (including crawlers,
            browser plugins and add-ons, and any other technology or manual
            work);
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            use, launch, or permit to be used any automated system, including
            without limitation "robots," "crawlers," or "spiders"; or
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            copy or use the information, content or data on SpottR in connection
            with a competitive service (as determined by SpottR);
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            Monitor SpottR's availability, performance or functionality for any
            competitive purposes use SpottR or content thereon in any manner not
            permitted by these Terms of Use copyrighted Materials: No
            Unauthorized Use. If you become aware of misuse of SpottR or content
            thereon by any person, please contact SpottR to report any abuse.
            SpottR has adopted and implemented a policy that provides for the
            termination of Accounts of users who infringe the rights of
            copyright holders. Please see the SpottR Copyright and Intellectual
            Property Policy for further information.
          </p>
          <p className="sm:sm:text-[24px] text-[20px] font-[600] text-[#102954] leading-[2px] mb-[40px]">
            7. General Terms
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            In the event that any provision in these Terms of Use is held to be
            invalid or unenforceable, the remaining provisions will remain in
            full force and effect. The failure of a party to enforce any right
            or provision of these Terms of Use will not be deemed a waiver of
            such right or provision. You may not assign this Agreement (by
            operation of law or otherwise) without the prior written consent of
            SpottR, and any prohibited assignment will be null and void.
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            SpottR may assign this Terms of Use Agreement or any rights
            hereunder without your consent. The relationship of the parties
            under these Terms of Use is that of independent contractors, and
            these Terms of Use will not be construed to imply that either party
            is the agent, employee, or joint venture of the other. Note that if
            you elect to become a Client, the relationship of the parties will
            be governed by these Terms of Use, our Privacy Policy and any
            additional terms to which you agree when you create an account or
            proceed to initiate and fulfil a transaction request. We reserve the
            right to change this Agreement by posting a revised Terms of Use and
            we agree that changes cannot be retroactive. If you don't agree with
            these changes, you must stop using SpottR. You agree the only way to
            provide us legal notice is at the address provided in Section 9.4.
          </p>
          <p className="sm:sm:text-[24px] text-[20px] font-[600] text-[#102954] leading-[2px] mb-[40px]">
            8. International Use
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            SpottR is available for use worldwide
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            Representations that accessing SpottR from locations outside Nigeria
            is legal or permissible by local law. If you access SpottR from
            areas outside of Nigeria, you do so at your own risk and are
            yourself responsible for compliance with local laws.{" "}
          </p>
          <p className="sm:sm:text-[24px] text-[20px] font-[600] text-[#102954] leading-[2px] mb-[40px]">
            9. Miscellaneous
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            This Agreement takes priority over previous agreements{" "}
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            9.1 Integration & Severability
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            This Agreement is the entire agreement between you and us with
            respect to SpottR, and your use of our website and mobile app, and
            supersedes all prior or contemporaneous communications and proposals
            (whether oral, written or electronic) between you and us. If any
            provision of this Agreement is found to be unenforceable or invalid,
            that provision will be limited or eliminated to the minimum extent
            necessary so that this Agreement will otherwise remain in full force
            and effect. The failure of either party to exercise in any respect
            any right provided for herein shall not be deemed a waiver of any
            further rights hereunder. Business and investment recommendations
            are made to Clients on an individual basis and may differ based on
            specific circumstances.
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            9.2 Communication:
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            Any notice or communication will be in writing by email You agree
            that these Terms of Use and the rules, restrictions, and policies
            contained herein, and SpottR's enforcement thereof, are not intended
            to confer and do not confer any rights or remedies on any person
            other than you and SpottR. These Terms of Use together with the
            SpottR's Privacy Policy and Client Agreement (if applicable)
            constitute the entire agreement between SpottR and you with respect
            to the subject matter hereof. Any notice or other communication to
            be given hereunder will be in writing and given by
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            SpottR via email (in each case to the address that you provide), or
            you via email to hello@theSpottrapp.com or to such other addresses
            as SpottR may specify in writing. The date of receipt shall be
            deemed the date on which such notice is transmitted.{" "}
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            9.3 Feedback: We welcome your feedback!
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            Your feedback is welcome and encouraged. You may submit feedback by
            emailing us at <p className="blue">hello@theSpottRapp.com</p> .
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            You agree, however, that by submitting unsolicited ideas to SpottR
            or any of its employees or representatives, by any medium, including
            but not limited to email, written, or oral communication, you
            automatically forfeit your right to any intellectual property rights
            in such ideas; and b) such unsolicited ideas automatically become
            the property of SpottR. You hereby assign and agree to assign all
            rights, title, and interest you have in such feedback and ideas to
            SpottR together with all intellectual property rights therein. In
            addition, you warrant that all moral rights in any feedback have
            been waived, and you do hereby waive any such moral rights.
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            9.4 Questions:
          </p>
          <p className="mb-[40px] sm:text-[18px] text-[14px]">
            This document constitutes SpottR's complete Terms of Service for
            SpottR and related services. If you have questions about these Terms
            of Services or about SpottR or content thereon, please contact
            SpottR at hello@theSpottrapp.com
          </p>
          <p className="mb-[60px] sm:text-[18px] text-[14px]">
            You can also contact SpottR by phone at +234 (0) 807 333 6660 or via
            physical mail at:
          </p>
          <p className="sm:text-[18px] text-[14px] font-[600] text-[#102954] mb-[30px]">
            SpottR
          </p>
          <p className="mb-[30px] sm:text-[18px] text-[14px]">41, G5 Street,</p>
          <p className="mb-[30px] sm:text-[18px] text-[14px]">
            Mount Pleasant Estate,
          </p>
          <p className="mb-[30px] sm:text-[18px] text-[14px]">
            Mbora District, Abuja
          </p>
        </div>
      </div>
      <div
        // ref={bottomNavRef}
        className={`w-[100%] left-0  bg-[#102954]  p-[20px]
        z-[200] right-[0px] fixed bottom-[0px] sm:flex hidden items-center justify-end
        text-[#fff] 
          `}
      >
        <button
          onClick={() => navigate("/about")}
          className="text-[20px] active:opacity-30 hover:opacity-30 font-[600]  mr-[22px]"
        >
          About
        </button>
        <button
          onClick={() => navigate("/terms")}
          className="text-[20px] active:opacity-30 hover:opacity-30 font-[600] mr-[22px]"
        >
          Terms
        </button>
        <button
          onClick={() => navigate("/privacy")}
          className="text-[20px] active:opacity-30 hover:opacity-30 font-[600] mr-[22px]"
        >
          Privacy
        </button>
        <button
          onClick={() => (window.location.href = "https://business.spottr.app")}
          className="text-[20px] active:opacity-30 hover:opacity-30 font-[600]  mr-[22px]"
        >
          Business
        </button>
        <button
          onClick={() => navigate("/contact-us")}
          className="text-[20px] active:opacity-30 hover:opacity-30 font-[600]"
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default Terms;
