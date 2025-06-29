"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useState } from "react";

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between pt-4 px-6">
        <Image src="/arrow-left.svg" alt="back" width={24} height={24} />
        <Image src="/logo.svg" alt="Logo" width={78} height={78} />
        <Image src="/menu.svg" alt="menu" width={24} height={24} />
      </div>
    </nav>
  );
}

export default function Home() {
  const [openDetailsFor, setOpenDetailsFor] = useState("");

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".flower", { opacity: 0, duration: 1 });
    gsap.from(".text", { y: 50, opacity: 0, duration: 1, stagger: 0.2 });

    ScrollTrigger.create({
      trigger: ".next",
      start: "top top",
      end: "+=1500 top",
      pin: ".box",
      toggleActions: "play none reverse reverse",
    });

    ScrollTrigger.create({
      trigger: "#blissful",
      start: "top top",
      end: "+=20000 top",
      pin: true,
      toggleActions: "play none reverse reverse",
    });

    gsap.to("#text-explore", {
      scrollTrigger: {
        trigger: "#logo-explore",
        start: "top top",
        end: "+=1000 top",
        scrub: true,
        toggleActions: "play none reverse reverse",
      },
      duration: 1,
      opacity: 0,
      ease: "elastic",
    });

    gsap.to("#logo-explore", {
      scrollTrigger: {
        trigger: "#text-explore",
        start: "bottom top",
        end: "+=1200 bottom",
        scrub: true,
        toggleActions: "play none reverse reverse",
      },
      onComplete: () => {
        gsap.to("#logo-explore", {
          opacity: 0,
        });
      },
      opacity: 1,
      duration: 3,
      scale: 0.5,
      y: 250,
      delay: 5,
    });

    gsap.fromTo(
      "#blissful-text",
      { opacity: 0, duration: 1 },
      {
        scrollTrigger: {
          trigger: "#logo-explore",
          start: "bottom bottom",
          end: "+=4000 top",
          scrub: true,
        },
        y: -150,
        opacity: 1,
        duration: 1,
        ease: "power1.inOut",
      },
    );

    gsap.fromTo(
      "#blissful-image",
      { opacity: 0, duration: 1 },
      {
        scrollTrigger: {
          trigger: "#blissful-text",
          start: "bottom bottom",
          end: "+=5000 bottom",
          scrub: true,
        },
        opacity: 1,
        scale: 1.5,
        duration: 1,
        ease: "power1.inOut",
        onComplete: () => {
          gsap.to("#blissful-text", {
            y: 150,
          });

          gsap.to("#blissful-image", {
            y: -200,
            x: -40,
          });

          gsap.fromTo(
              "#blissful-details",
              { opacity: 0, duration: 1 },
              {
                opacity: 1,
                duration: 1,
                ease: "power1.inOut",
              },
          );

          gsap.fromTo(
            "#blissful-bg",
            {
              opacity: 0,
              duration: 1,
            },
            { opacity: 1, duration: 1 },
          );
        },
      },
    );

  });

  return (
    <div className="w-full">
      <Nav />

      <div className="flower relative min-h-screen h-full bg-[url('/lotus.png')] bg-center bg-cover bg-no-repeat">
        <div className="h-screen flex flex-col gap-2 px-8 py-6 justify-end">
          <div className="z-30">
            <p className="text text-2xl font-semibold uppercase">
              Read Murals,
            </p>
            <p className="text text-2xl font-semibold uppercase">
              Layer by Layer.
            </p>
          </div>
          <p className="text z-30">
            A multi-layered mural experience through motion and light.
          </p>

          <div className="flex flex-col items-center justify-center gap-1 mt-6">
            <Image
              src="/arrow-up.svg"
              alt="Next Layer"
              width={24}
              height={24}
              className="text z-30"
            />
            <p className="next text text-[10px] z-30">Next Layer</p>
            <div className="box absolute h-[650px] w-full z-20">
              <div className="absolute inset-0 z-10 w-full h-full bg-gradient-orange"></div>
              <div className="absolute inset-0 z-0 w-full h-full bg-gradient-orange-dodge"></div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="blissful"
        className="flex flex-col items-center justify-center min-h-screen h-full bg-[url('/PANORAMIC1.png')] bg-cover bg-center"
      >
        <div className="absolute m-auto flex flex-col items-center gap-2">
          <Image
            src="/explore.svg"
            alt="explore"
            width={48}
            height={48}
            id="logo-explore"
          />
          <p id="text-explore" className="text-center text-sm">
            Explore deeper Layers
          </p>
        </div>

        <div
          id="blissful-text"
          className="px-8 z-30 w-full flex flex-col items-start gap-2"
        >
          <p className="text-2xl uppercase z-30">The Blissful city</p>
          <p className="text-xs">Metaphor for sangha</p>
        </div>
        <Image
          id="blissful-image"
          src="/US-Capital.png"
          alt="blissful"
          className="absolute right-11 bottom-30 z-30"
          width={200}
          height={200}
        />
        <div
          id="blissful-details"
          className="absolute top-[440px] flex flex-col justify-end gap-2 h-full px-8 z-30 opacity-0"
        >
          <p>
            The area at the end of the road, which the gentleman guide points
            to, is the location of a large domed building situated on a low hill
            that likely represents the &quot;city of happiness,&quot; which can be defined
            as a city with happiness, fair law enforcement, and rulers who must
            be accepted by all people.
          </p>
          <p>
            It can be assumed that this domed building likely has its prototype
            from the United States Capitol building in Washington, D.C., which
            is situated on a low hill similar to the mural painting and serves
            as an important symbol of American democracy, a country that at that
            time was called &quot;civilized&quot; like the city of happiness.
          </p>
          <p>
            The building with a truncated dome top, located behind the gentleman
            guide, is expected to represent the United States Capitol building.
          </p>
        </div>
        <div
          id="blissful-bg"
          className="absolute h-[650px] w-full z-20 -bottom-40 opacity-0"
        >
          <div className="absolute inset-0 z-10 w-full h-full bg-gradient-orange"></div>
          <div className="absolute inset-0 z-0 w-full h-full bg-gradient-orange-dodge"></div>
        </div>
      </div>
      <div className="px-8 flex flex-col items-center justify-center h-screen bg-[url('/PANORAMIC2.png')] bg-cover bg-center"></div>
    </div>
  );
}
