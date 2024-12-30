import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import profilePic from "/public/Paul.JPG"
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";
// import projects from "./projects";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  //3 hooks called by frame rmotion
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 }); // type of animation, a motion value that animates to its target with a spring.
  const isInView = useInView(ref, { once: true }); // run animation when animation is in view of the viewport , accepts in element
  //^^ the once: true makes it so that it only animates once and not everytime when users scrolls up/down

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  // Animating the 50+ Satisfied Clients
  useEffect(() => {
    springValue.on("change", (latest) => {
      // console.log(latest)
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0); // decimal points 0
      }
    });
  }, [springValue, value]);

  // connecting Ref with span so that we can access the element below
  return <span ref={ref}></span>;
};

const About = () => {
  return (
    <>
      <Head>
        <title> Paul | About Page</title>
        <meta name="description" contents="any description" />
      </Head>
      <TransitionEffect />
      {/* Title */}
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-0">
          <AnimatedText
            text="My Journey & Education!"
            className="mb-8 !text-6xl lg:!text-5xl sm:!text-4xl xs:!text-2xl sm:mb-8"
          />
          {/* creates an 8 column layout */}
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75 underline">
                About Me
              </h2>
              <p className="font-medium text-sm">
                Hey There 👋 I&apos;m Paul! I am currently a student at the
                University of Virginia, majoring in Computer Science and
                minoring in Technology Entrepreneurship.
              </p>
              <p className="my-4 font-medium text-sm">
                Ever since I was young, I&apos;ve been fascinated by the way
                technology impacts our lives, which led me down the rabbit hole
                of coding, and all things tech. When I&apos;m not knee-deep in
                lines of code, you&apos;ll find me exploring various hobbies
                that help me unwind and recharge. Whether it&apos;s playing
                soccer and basketball or strumming a tune on my guitar, I love
                embracing new experiences and broadening my horizons.
              </p>
              <p className="font-medium text-sm">
                I like to think of myself as the ultimate team player. I&apos;m
                all about good communication, adapting to new situations, and
                most importantly, making work fun! I&apos;m always down to grab
                a bite to eat and explore new places. I&apos;m the type of
                person that can make even the most mundane tasks enjoyable and I
                always bring a positive attitude to the table.
              </p>
            </div>
            {/* Profile Picture Border */}
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-4 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Paul"
                className="w-full h-auto rounded-2xl"
                priority
                //sizes attribute
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Facts/statistics */}
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  {" "}
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Projects Completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10000} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Lines of Code Written
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={20} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  Countries Visited
                </h2>
              </div>
            </div>
          </div>
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
