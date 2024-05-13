"use client";

import {useLanguage} from "@/lib/providers";
import {stackSection, categoryHeaders} from "@/lib/data";
import Html from "@/assets/html";
import CSS from "@/assets/css";
import JavaScript from "@/assets/javascript";
import React from "@/assets/react";
import Next from "@/assets/next";
import TailwindCSS from "@/assets/tailwind";
import TypeScript from "@/assets/typescript";
import Sketch from "@/assets/sketch";
import Figma from "@/assets/figma";
import PayloadCMS from "@/assets/payload";
import Sanity from "@/assets/sanity";
import Node from "@/assets/node";
import Bun from "@/assets/bun";
import Docker from "@/assets/docker";
import Express from "@/assets/express";
import MySQL from "@/assets/sql";
import PostgreSQL from "@/assets/postgresql";
import Redis from "@/assets/redis";
import Neon from "@/assets/neon";
import VisualStudio from "@/assets/studio";
import VisualStudioCode from "@/assets/code";
import Windows from "@/assets/windows";
import Linux from "@/assets/linux";
import Electron from "@/assets/electron";
import Git from "@/assets/git";
import Medusa from "@/assets/medusa";
import Spotify from "@/assets/spotify";

export default function StackSection() {
  const {language} = useLanguage();

  return (
    <section className="w-full py-12 md:py-2 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              {language === "EN"
                ? stackSection.title.en
                : stackSection.title.fr}
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              {language === "EN"
                ? stackSection.description.en
                : stackSection.description.fr}
            </p>
          </div>
          <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                {language === "EN"
                  ? categoryHeaders.basic.en
                  : categoryHeaders.basic.fr}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Html className="h-10 w-10" />
                  <span className="text-sm font-medium">HTML</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <CSS className="h-10 w-10" />
                  <span className="text-sm font-medium">CSS</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <JavaScript className="h-10 w-10" />
                  <span className="text-sm font-medium">JavaScript</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                {language === "EN"
                  ? categoryHeaders.intermediate.en
                  : categoryHeaders.intermediate.fr}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <React className="h-10 w-10" />
                  <span className="text-sm font-medium">React</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <TypeScript className="h-10 w-10" />
                  <span className="text-sm font-medium">TypeScript</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <TailwindCSS className="h-10 w-10" />
                  <span className="text-sm font-medium">TailwindCSS</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Next className="h-10 w-10" />
                  <span className="text-sm font-medium">NextJS</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                {language === "EN"
                  ? categoryHeaders.design.en
                  : categoryHeaders.design.fr}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Sketch className="h-10 w-10" />
                  <span className="text-sm font-medium">Sketch</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Figma className="h-10 w-10" />
                  <span className="text-sm font-medium">Figma</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                {language === "EN"
                  ? categoryHeaders.cms.en
                  : categoryHeaders.cms.fr}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <PayloadCMS className="h-10 w-10" />
                  <span className="text-sm font-medium">PayloadCMS</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Sanity className="h-10 w-10" />
                  <span className="text-sm font-medium">Sanity</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                {language === "EN"
                  ? categoryHeaders.backend.en
                  : categoryHeaders.backend.fr}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Node className="h-10 w-10" />
                  <span className="text-sm font-medium">NodeJS</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Bun className="h-10 w-10" />
                  <span className="text-sm font-medium">Bun</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Docker className="h-10 w-10" />
                  <span className="text-sm font-medium">Docker</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Express className="h-10 w-10" />
                  <span className="text-sm font-medium">Express</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                {language === "EN"
                  ? categoryHeaders.db.en
                  : categoryHeaders.db.fr}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <MySQL className="h-10 w-10" />
                  <span className="text-sm font-medium">MySQL</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <PostgreSQL className="h-10 w-10" />
                  <span className="text-sm font-medium">PostgreSQL</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Redis className="h-10 w-10" />
                  <span className="text-sm font-medium">Redis</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Neon className="h-10 w-10" />
                  <span className="text-sm font-medium">Neon</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                {language === "EN"
                  ? categoryHeaders.editors.en
                  : categoryHeaders.editors.fr}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <VisualStudio className="h-10 w-10" />
                  <span className="text-sm font-medium">Visual Studio</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <VisualStudioCode className="h-10 w-10" />
                  <span className="text-sm font-medium">
                    Visual Studio Code
                  </span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                {language === "EN"
                  ? categoryHeaders.os.en
                  : categoryHeaders.os.fr}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Windows className="h-10 w-10" />
                  <span className="text-sm font-medium">Windows</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Linux className="h-10 w-10" />
                  <span className="text-sm font-medium">Linux</span>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-medium">
                {language === "EN"
                  ? categoryHeaders.others.en
                  : categoryHeaders.others.fr}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Electron className="h-10 w-10" />
                  <span className="text-sm font-medium">Electron</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Git className="h-10 w-10" />
                  <span className="text-sm font-medium">Git</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Medusa className="h-10 w-10" />
                  <span className="text-sm font-medium">Medusa</span>
                </div>
                <div className="flex flex-col items-center justify-center space-y-2">
                  <Spotify className="h-10 w-10" />
                  <span className="text-sm font-medium">Spotify</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
