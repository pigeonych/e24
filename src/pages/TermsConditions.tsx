import React from "react";
import { Flex } from "antd";

const TermsConditions = () => {
  return (
    <Flex
      vertical
      align={"center"}
      className={"w-full mt-48 bg-white relative rounded-lg"}
      gap={100}
    >
      {/*<h1*/}
      {/*  style={{*/}
      {/*    position: "absolute",*/}
      {/*    top: 0,*/}
      {/*    left: "50%",*/}
      {/*    transform: "translate(-50%, -50%)",*/}
      {/*  }}*/}
      {/*  className={*/}
      {/*    "text-2xl tablet:text-3xl desktop:text-5xl w-[60%] font-bold text-secondary bg-white px-5 desktop:px-28 py-14 rounded-lg shadow-lg text-center"*/}
      {/*  }*/}
      {/*>*/}
      {/*  Terms & Policy*/}
      {/*</h1>*/}
      <Flex
        gap={20}
        align={"start"}
        vertical
        className={"desktop:w-[70%] px-10 desktop:py-14 py-12"}
        justify={"center"}
      >
        <h1 className="text-2xl font-bold">Terms and Conditions for E24 ELD</h1>
        <span className="-ml-4 desktop:-ml-0">Last updated: April 3, 2024</span>
        <ol className="list-decimal desktop:pl-6 space-y-3 text-left">
          <li>
            Subscription Terms
            <ul className="list-disc pl-6 space-y-4 mt-1">
              <li>
                Subscriptions renew automatically at the end of each billing
                cycle.
              </li>
              <li>
                Users can cancel their subscriptions at any time via their
                account or by email at{" "}
                <a
                  href="mailto:sales@e24logs.com"
                  className="text-primary underline"
                >
                  sales@e24logs.com
                </a>
              </li>
            </ul>
          </li>
          <li>
            Account Registration
            <ul className="list-disc pl-6 space-y-4 mt-1">
              <li>
                To use the Service, Users must register or create a User
                account, providing all required data or information in a
                complete and truthful manner. Failure to do so will cause
                unavailability of the Service.
              </li>
              <li>
                Users are responsible for keeping their login credentials
                confidential and safe. Users are also required to choose
                passwords that meet the highest standards of strength permitted
                by this Application
              </li>
              <li>
                By registering, Users agree to be fully responsible for all
                activities that occur under their username and password.
              </li>
              <li>
                Users are required to immediately and unambiguously inform the
                Owner via the contact details indicated in this document if they
                think their personal information, including but not limited to
                User accounts, access credentials, or personal data, has been
                violated, unduly disclosed, or stolen.
              </li>
            </ul>
          </li>
          <li>
            Payment and Refund Policy
            <ul className="list-disc pl-6 space-y-4 mt-1">
              <li>Payments are processed through Stripe.</li>
              <li>Services used are non-refundable.</li>
              <li>
                Refunds are not provided for services that have been used.
              </li>
              <li>
                Subscriptions are non-refundable once the billing cycle has
                commenced.
              </li>
            </ul>
          </li>
          <li>
            Cancellation Policy
            <ul className="list-disc pl-6 space-y-4 mt-1">
              <li>
                Cancellations take effect at the end of the current billing
                cycle.
              </li>
              <li>
                No refunds will be issued for the remaining period after
                cancellation.
              </li>
              <li>
                Users must deactivate all trucks from their truck list to avoid
                charges during the renewal period.
              </li>
              <li>
                Users may send an email to{" "}
                <a
                  href="mailto:sales@e24logs.com"
                  className="text-primary underline"
                >
                  sales@e24logs.com
                </a>{" "}
                to deactivate their account, which will take effect at the end
                of the current billing period
              </li>
              <li>
                Upon cancellation, users retain access to the service until the
                end of the current billing period.
              </li>
            </ul>
          </li>
          <li>
            Dispute Resolution
            <ul className="list-disc pl-6 space-y-4 mt-1">
              <li>
                Users agree not to initiate chargebacks without first contacting
                our support team by email at{" "}
                <a
                  href="mailto:sales@e24logs.com"
                  className="text-primary underline"
                >
                  sales@e24logs.com
                </a>
              </li>
              <li>
                Users are not allowed to dispute any charges through their banks
                when using the software or after cancellation. All disputes will
                be counter-disputed, and users agree not to dispute any charges.
              </li>
            </ul>
          </li>
          <li>
            User Responsibilities
            <ul className="list-disc pl-6 space-y-4 mt-1">
              <li>
                Users must provide accurate information and keep it updated.
              </li>
              <li>
                Users are responsible for maintaining the confidentiality of
                their account and password.
              </li>
            </ul>
          </li>
          <li>
            Limitation of Liability{" "}
            <ul className="list-disc pl-6 space-y-4 mt-1">
              <li>
                We are not liable for any indirect, incidental, or consequential
                damages arising from the use of our services.
              </li>
            </ul>
          </li>
          <li>
            Account Suspension and Deletion
            <ul className="list-disc pl-6 space-y-4 mt-1">
              <li>
                The Owner reserves the right, at its sole discretion, to suspend
                or delete at any time and without notice, User accounts which it
                deems inappropriate, offensive, or in violation of these Terms.
              </li>
              <li>
                The suspension or deletion of User accounts shall not entitle
                Users to any claims for compensation, damages, or reimbursement.
              </li>
              <li>
                The suspension or deletion of accounts due to causes
                attributable to the User does not exempt the User from paying
                any applicable fees or prices.
              </li>
            </ul>
          </li>
          <li>
            Acceptable Use{" "}
            <ul className="list-disc pl-6 space-y-4 mt-1">
              <li>
                This Application and the Service may only be used within the
                scope of what they are provided for, under these Terms and
                applicable law
              </li>
              <li>
                Users are solely responsible for making sure that their use of
                this Application and/or the Service violates no applicable law,
                regulations, or third-party rights
              </li>
              <li>
                Therefore, the Owner reserves the right to take any appropriate
                measure to protect its legitimate interests, including by
                denying Users access to this Application or the Service,
                terminating contracts, and reporting any misconduct performed
                through this Application or the Service to the competent
                authorities – such as judicial or administrative authorities –
                whenever Users engage or are suspected to engage in any of the
                following activities:
                <ul className="list-disc pl-6 space-y-1 mt-1">
                  <li>Violate laws, regulations, and/or these Terms;</li>
                  <li>Infringe any third-party rights;</li>
                  <li>Considerably impair the Owner’s legitimate interests</li>
                  <li>Offend the Owner or any third party.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
        <h1 className="text-2xl font-bold mt-6">Privacy Policy for E24 ELD</h1>
        <ol className="list-decimal desktop:pl-6 space-y-3 text-left">
          <li>
            Data Collection and Usage
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>
                We collect personal data to provide and improve our services,
                including contact information, payment details, and usage data.
              </li>
            </ul>
          </li>
          <li>
            User Rights
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>
                Users have the right to access, rectify, and delete their
                personal data.
              </li>
              <li>Requests can be made through our support team.</li>
            </ul>
          </li>
          <li>
            Data Sharing
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>
                We may share data with third-party services to facilitate our
                operations, such as payment processors and analytics providers.
              </li>
            </ul>
          </li>
          <li>
            Security
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>
                We implement robust security measures to protect user data from
                unauthorized access, misuse, or disclosure.
              </li>
            </ul>
          </li>
          <li>
            Cookies and Tracking
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>
                Our website uses cookies and similar technologies to enhance
                user experience, analyze site traffic, and understand user
                preferences.
              </li>
            </ul>
          </li>
          <li>
            Data Retention
            <ul className="list-disc pl-6 space-y-1 mt-1">
              <li>
                Personal data is retained only as long as necessary for the
                purposes outlined in this policy, or as required by law.
              </li>
            </ul>
          </li>
        </ol>
      </Flex>
    </Flex>
  );
};

export default TermsConditions;
