"use client";
import Link from "next/link";
import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import CardsShowcase from "./cards-showcase";
import StackAvailable from "./stack-availble";

export default function HeroSection() {
  return (
    <>
      <div className="overflow-hidden">
        <section className="relative">
          <div className="relative py-24 lg:py-28">
            <div className="mx-auto max-w-7xl px-6 md:px-12">
              <div className="text-center sm:mx-auto sm:w-10/12 lg:mr-auto lg:mt-0 lg:w-4/5">
                <Link
                  href="/"
                  className="rounded-(--radius) mx-auto flex w-fit items-center gap-2 border p-1 pr-3"
                >
                  <span className="bg-muted rounded-[calc(var(--radius)-0.25rem)] px-2 py-1 text-xs">
                    New
                  </span>
                  <span className="text-sm">Introducing Frameshift</span>
                  <span className="bg-(--color-border) block h-4 w-px"></span>

                  <ArrowRight className="size-4" />
                </Link>

                <h1 className="mt-8 text-3xl font-semibold md:text-5xl xl:text-5xl xl:leading-[1.125]">
                  Technical challenges <br /> that mirror real development work
                </h1>
                <p className="mx-auto mt-8 hidden max-w-2xl text-wrap text-lg sm:block">
                  Evaluate developers through realistic projects: bug fixing,
                  feature implementation, and architecture decisions. No
                  algorithm problems. Just real code.
                </p>
                <p className="mx-auto mt-6 max-w-2xl text-wrap sm:hidden">
                  Evaluate developers through realistic projects: bug fixing,
                  feature implementation, and architecture decisions. No
                  algorithm problems. Just real code.
                </p>

                <div className="mt-8">
                  <Button size="lg" asChild>
                    <Link href="/challenges" className="flex items-center gap-2">
                      <Rocket className="relative size-4" />
                      <span className="text-nowrap">Explore challenges</span>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <StackAvailable /> */}
        {/* <CardsShowcase /> */}
      </div>
    </>
  );
}
