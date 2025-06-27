"use client";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(".flower", { opacity: 0, duration: 1 });
    gsap.from(".text", { y: 50, opacity: 0, duration: 1, stagger: 0.2 });

    gsap.to("#text-explore", {
      scrollTrigger: {
        trigger: ".explore",
        start: "top top",
        end: "+=800 top",
        pin: true,
        markers: true,
        scrub: true,
        toggleActions: "play none reverse reverse",
        onUpdate: (self) => {
          if (self.progress > 0.2) {
            gsap.to("#text-explore", {
              opacity: 0,
            });
          }
          if (self.progress > 0.6) {
            gsap.to("#logo-explore", {
              y: 350,
              scale: 0.5,
              duration: 1,
              ease: "power1.inOut",
            });
          }
        },
      },
    });

    ScrollTrigger.create({
      trigger: ".next",
      start: "top top",
      end: "+=950 top",
      endTrigger: "#text-explore",
      pin: ".box",
      pinSpacing: false,
      markers: true,
      toggleActions: "play none reverse reverse",
    });

    ScrollTrigger.create({
      trigger: "#blissful",
      start: "top top",
      end: "+=1500 top",
      pin: true,
      markers: true,
      toggleActions: "play none reverse reverse",
    });

    gsap.to("#blissful-image", {
      scrollTrigger: {
        trigger: "#blissful",
        start: "top top",
        end: "+=1500 top",
        scrub: true,
        markers: true,
      },
      scale: 1.5,
      duration: 1,
      ease: "power1.inOut",
    });

    gsap.to("#blissful-text", {
      scrollTrigger: {
        trigger: "#blissful",
        start: "top top",
        end: "+=1500 top",
        scrub: true,
        markers: true,
      },
      y: -80,
      duration: 1,
      ease: "power1.inOut",
    });
  });

  return (
    <div>
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

      <div className="explore flex flex-col items-center justify-center h-screen bg-[url('/lotus.png')] bg-cover bg-center">
        <Image
          src="/explore.svg"
          alt="explore"
          width={48}
          height={48}
          id="logo-explore"
        />
        <p id="text-explore" className="text-center text-sm bg-gradient">
          Explore deeper Layers
        </p>
      </div>

      <div
        id="blissful"
        className="flex flex-col p-8 gap-8 items-center h-screen bg-[url('/lotus.png')] bg-cover bg-center"
      >
        <div
          id="blissful-text"
          className="w-full flex flex-col items-start mt-30 gap-2"
        >
          <p className="text-2xl uppercase ">The Blissful city</p>
          <p className="text-xs">Metaphor for sangha</p>
        </div>
        <Image
          id="blissful-image"
          src="/US-Capital.png"
          alt="blissful"
          width={200}
          height={200}
        />
      </div>
      <div className="end flex items-center justify-center min-h-screen bg-[url('/lotus.png')] bg-cover bg-center">
        <p className="text-center text-sm ">END</p>
      </div>
    </div>
  );
}
