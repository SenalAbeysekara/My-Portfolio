import React, { memo, useEffect } from "react";
import { Briefcase, Building2, CalendarDays } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ProfessionalExperience = () => {
  useEffect(() => {
    AOS.init({ once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <section
      id="Experience"
      className="relative overflow-hidden px-[5%] py-16 text-white sm:px-[5%] lg:px-[10%]"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

      <div className="relative mx-auto max-w-4xl">
        <div className="mb-12 text-center" data-aos="fade-down" data-aos-duration="800">
          <div className="inline-block">
            <h2 className="text-4xl font-bold text-white md:text-5xl">Professional Experience</h2>
            <div className="mt-2 h-1 w-full rounded-full bg-gradient-to-r from-[#6366f1] to-[#a855f7]" />
          </div>
          <p className="mx-auto mt-4 max-w-xl text-base text-gray-400 sm:text-lg">
            Experience contributing to practical software solutions in a professional environment.
          </p>
        </div>

        <article
          className="relative overflow-hidden rounded-2xl border border-violet-400/30 bg-[#030014]/80 p-6 backdrop-blur-md transition-all duration-300 hover:border-violet-400/70 hover:shadow-[0_0_35px_rgba(139,92,246,0.2)] sm:p-8"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-[#6366f1] to-[#a855f7]" />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="flex gap-5">
              <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#6366f1] to-[#a855f7] shadow-lg shadow-violet-500/20">
                <Briefcase className="h-7 w-7 text-white" />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white sm:text-2xl">Software Engineering Intern</h3>
                <p className="mt-2 flex items-center gap-2 text-base font-semibold text-violet-300">
                  <Building2 className="h-4 w-4" />
                  Applantics (Pvt) Ltd
                </p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">
                  Developing and maintaining POS and ERP systems with Laravel, TypeScript, and React. Building practical experience across the software development and deployment lifecycle.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Laravel", "TypeScript", "React", "POS Systems", "ERP Systems", "Deployment"].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex w-fit flex-shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200">
              <CalendarDays className="h-4 w-4" />
              May 2026 - Present
            </div>
          </div>
        </article>
      </div>
    </section>
  );
};

export default memo(ProfessionalExperience);
