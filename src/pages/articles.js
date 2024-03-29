import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import blog1 from "../../public/images/articles/coming.png";
import blog2 from "../../public/images/articles/coming.png";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

//using framer motion on image component
const FramerImage = motion(Image);

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      // this adds so that the articles are coming up when we scroll down
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-9 border border-solid border-dark border-r-4 border-b-4 dark:border-light dark:bg-dark dark:text-light sm:flex-col"
    >
      <Link href={link} target="_blank">
        <h2 className="capitalize text-xl font-semibold hover:underline">
          {title}
        </h2>
      </Link>
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {" "}
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className=" relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl" />

      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        {/* Adding framer motion so that there's animation on the images  */}
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          //sizes attribute
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <Link href={link} target="_blank">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {" "}
          {title}{" "}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark ">
        {time}
      </span>
    </li>
  );
};

const articles = () => {
  return (
    <>
      <Head>
        <title> Paul | Article Page</title>
        <meta name="description" contents="any description" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-2 ">
          <AnimatedText
            text="Explore My Articles!"
            className="mb-16 !text-6xl lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16">
            <FeaturedArticle
              title="More Coming Soon!"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              time="10 min read"
              link="/"
              img={blog1}
            />
            <FeaturedArticle
              title="More Coming Soon!"
              summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
              time="5 min read"
              link="/"
              img={blog1}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            Articles Coming Soon!
          </h2>
          <ul>
            <Article
              title="Coming Soon!"
              date="TBD"
              link="/"
              img={blog1}
            />
            <Article
              title="Coming Soon!"
              date="TBD"
              link="/"
              img={blog1}
            />
            <Article
              title="Coming Soon!"
              date="TBD"
              link="/"
              img={blog1}
            />
            <Article
              title="Coming Soon!"
              date="TBD"
              link="/"
              img={blog1}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default articles;
