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
        <ul className="w-full flex flex-col items-start justify-between  ml-4 xs:ml-4">
          <Details
            position="Product Manager Intern"
            company="Bitkub"
            companyLink="https://www.bitkub.com/en"
            time="May 2024-August 2024"
            address="Bangkok, TH"
            work="
            • Spearheaded the decentralized exchange (DEX) feature, coordinated with PMs, engineers, and data science to unlock $400K in new annual revenue and boost transaction volume by 20% through peer-to-peer trading."
            work2="
            • Conducted complex opportunity sizing for DEX marketplace, including SQL queries and formula generation to drive strategic decision-making, influencing 2024/25 product roadmap and aligned competing teams to descope project and save $100k."
            work3="
            • Headed functional QA for Bitkub Metaverse, conducted user acceptance testing (UAT) to resolve 25+ in-game issues, and implemented an issue-tracking process that reduced bug fix times by 15%."
            work4="
            • Led the fraud detection feature for KAP-20/721/1155 smart contract development standards; created wireframes, user journeys, and the Software Requirements Specification (SRS) document to automate token removal from wallets involved in fraudulent transactions."
          />
          <Details
            position="Product Manager Intern"
            company="W. R. Berkley Corporation"
            companyLink="https://www.berkley.com/"
            time="June 2023-August 2023"
            address="Manassas, VA"
            work="
            • Spearheaded feature ideation process for CC10 Guidewire Management Software, facilitating the creation of a product requirement document (PRD) to establish a shared understanding between the client and the team."
            work2="
            • Conducted feature validation for insurance underwriting tools using SQL queries to ensure end-to-end workflow accuracy, resolving 15+ software issues and reducing underwriting processing times by 10%."
            work3="
            • Streamlined product release workflows and issue tracking using Jira, leading Agile practices with 4 other tech leads, including sprint planning, backlog grooming, and story prioritization, achieving 98% on-time delivery and a 5% increase in release frequency."
          />

          <Details
            position="Full-Stack Software Engineer Intern"
            company="FINNOMENA"
            companyLink="https://www.finnomena.com/"
            time="June 2022-August 2022"
            address="Bangkok, TH"
            work="
            • Developed dynamic visualizations in D3.js for the Global Income Focus (GIF) investment model, pulling portfolio metrics and transforming them into personalized cash flow graph projections for over 1M monthly investors."
            work2="
            • Implemented an SMS-based notification system to deliver real-time financial market updates, increasing user engagement by 15%."
            work3="
            • Led the redesign of FINT’s (utility token) ecosystem to incorporate 10+ game-based learning features, simplifying investing concepts and enhancing onboarding experience for new users."
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
