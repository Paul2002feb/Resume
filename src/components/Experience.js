import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
  work2,
  work3,
  work4,
  work5,
}) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        //   moving the div downwards
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary dark:text-primaryDark capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-sm w-full md:text-xs">{work} </p>
        <p className="font-sm w-full md:text-xs">{work2} </p>
        <p className="font-sm w-full md:text-xs">{work3} </p>
        <p className="font-sm w-full md:text-xs">{work4} </p>
        <p className="font-sm w-full md:text-xs">{work5} </p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  // use scroll hook: Create scroll-linked animations with the useScroll hook -- https://www.framer.com/motion/use-scroll/
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  }); // initializing variable

  return (
    <div className="my-48">
      <h2 className="font-bold text-6xl mb-16 w-full text-center md:text-6xl xs:text-4xl md:mb-16 ">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full ">
        {/* //timeline */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-1 w-[4px] h-full bg-dark origin-top dark:bg-light md:w[2px] md:left-[30px] xs:left-[20px]"
        />
        <ul className="w-full flex flex-col items-start justify-between  ml-4 xs:ml-4 ">
          <Details
            position="Product Manager Intern"
            company="Bitkub"
            companyLink="https://www.bitkub.com/en"
            time="May 2024-August 2024"
            address="Bangkok, TH"
            work="
            • Spearheaded the decentralized exchange (DEX) platform, defined product strategy through market research, formula generation, and blockchain data, unlocking $800K in new annual revenue and shaping the 2024/25 product roadmap."
            work2="
            • Defined product requirements and designed a trading system for a blockchain-integrated Virtual Reality (VR) app, collaborating with data scientists to develop mathematical formulas for managing asset flow and resource distribution."
            work3="
            • Led the fraud detection and security feature for KAP-20/721/1155 smart contracts, creating wireframes, user journeys, and a software requirements specification (SRS) to support automated transaction reversals."
            
          />
          <Details
            position="Product Manager Analyst Intern"
            company="W. R. Berkley Corporation"
            companyLink="https://www.berkley.com/"
            time="June 2023-August 2023"
            address="Manassas, VA"
            work="
            • Conducted User Acceptance Testing (UAT) and analyzed SQL databases in insurance policy systems, cross-checking document  outputs against input data to identify 20+ discrepancies across 100K+ records and policy data."
            work2="
            • Spearheaded feature ideation for property and casualty (P&C) information management software, creating 40+ Jira tickets and a  product requirement document (PRD) based on 20+ stakeholder interviews to prioritize features effectively."
            work3="
            • Redesigned the endorsement renewal form workflow in Figma and implemented UI components using TypeScript and Tailwind,  improving form usability and reducing policy update errors."
          />

          <Details
            position="Full-Stack Software Engineer Intern"
            company="FINNOMENA"
            companyLink="https://www.finnomena.com/"
            time="June 2022-August 2022"
            address="Bangkok, TH"
            work="
            • Developed dynamic data visualizations in D3.js and Power BI for the Global Income Focus (GIF) and Retirement Income Solution (RIS) investment model, transforming complex financial graphs into cash flow projections for over 1M monthly investors."
            work2="
            • Built an internal SMS-based notification tool to deliver real-time financial market updates for portfolio risk monitoring."
            work3="
            • Led the revamp of FINT’s (utility token) ecosystem, defining technical requirements and documenting the integration of 10+ game-based learning modules in Confluence, simplifying decentralized finance (DeFi) concepts for new users."
          />
          {/* <Details
            position="Project Manager"
            company="VIDMA"
            companyLink="/"
            time="January 2022-May 2022"
            address="Bangkok, TH"
            work="
            • Oversaw coding team and revamped engineering processes by deploying weekly code sprints, reviews 
            and agile methodologies, leading to a 20% increase in development velocity and a 10% decrease in post-launch issues"
            work2="
            • Designed 15+ UI wireframes in Figma and built the initial prototype/minimum viable product (MVP) with a mobile-first approach, 
            enabling a user-friendly experience for networking in a meet-and-greet via a paid engagement model"
            work3="
            • Managed the generation of 10+ user stories and conducted extensive beta testing to ensure optimal experience and performance
            "
          /> */}
          {/* <Details
            position="Product Manager Intern"
            company="W. R. Berkley Corporation"
            companyLink="www.google.com"
            time="June 2023-August 2023"
            address="Manassas, VA"
            work="Worked on a team responsible for developing new features for Google's 
search engine, including improving the accuracy and relevance of search results and 
developing new tools for data analysis and visualization."
          /> */}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
