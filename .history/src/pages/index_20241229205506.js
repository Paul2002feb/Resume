import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/Profile.png";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Paul&apos;s Resume</title>
        <meta
          name="description"
          content="Explore CodeBucks's Next.js developer portfolio and 
        discover the latest webapp projects and software engineering articles. 
        Showcase your skills as a full-stack developer and software engineer."
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-2 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/2 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="CodeBucks"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Bridging Imagination & Technology!"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              {/* <p className="mt-0 ml-0 mb-2 text-base font-medium md:text-sm sm:text-xs text-primary dark:text-primaryDark">
                By Paul Kiattikhunphan
              </p> */}
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              Welcome to my online space! As a skilled developer and student
                at the University of Virginia, I&apos;m dedicated to turning ideas
                into functional and engaging web applications. Here, you can
                explore my latest projects and articles. So, grab a virtual cup
                of coffee from your desk, make yourself comfortable, and let&apos;s
                explore this together!
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/Paul-Kiattikhunphan_Resume.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:ppk6chf@virginia.edu"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact Me!
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        
      </article>
    </>
  );
}
