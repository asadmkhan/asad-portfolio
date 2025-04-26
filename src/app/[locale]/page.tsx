"use client";
import Head from "next/head";
import { useState } from "react";
import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const t = useTranslations();

  return (
    <div>
      <Head>
        <title>{t("metaTitle")}</title>
        <meta name="description" content={t("metaDescription")} />
      </Head>

      <nav className="hidden md:flex fixed top-0 left-0 right-0 bg-gray-900 text-white py-4 shadow z-50 justify-center gap-6 text-sm md:text-base">
        <a href="#skills" className="hover:underline">
          {t("skills")}
        </a>
        <a href="#experience" className="hover:underline">
          {t("experience")}
        </a>
        <a href="#education" className="hover:underline">
          {t("education")}
        </a>
        <a href="#certifications" className="hover:underline">
          {t("certifications")}
        </a>
        <a href="#contact" className="hover:underline">
          {t("contact")}
        </a>
      </nav>

      <div className="md:hidden fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setShowMobileMenu(!showMobileMenu)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700"
        >
          {showMobileMenu ? t("closeMenu") : t("openMenu")}
        </button>
      </div>

      {showMobileMenu && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center z-40 text-white space-y-6 text-xl">
          <a
            href="#skills"
            onClick={() => setShowMobileMenu(false)}
            className="hover:underline"
          >
            {t("skills")}
          </a>
          <a
            href="#experience"
            onClick={() => setShowMobileMenu(false)}
            className="hover:underline"
          >
            {t("experience")}
          </a>
          <a
            href="#education"
            onClick={() => setShowMobileMenu(false)}
            className="hover:underline"
          >
            {t("education")}
          </a>
          <a
            href="#certifications"
            onClick={() => setShowMobileMenu(false)}
            className="hover:underline"
          >
            {t("certifications")}
          </a>
          <a
            href="#contact"
            onClick={() => setShowMobileMenu(false)}
            className="hover:underline"
          >
            {t("contact")}
          </a>
        </div>
      )}

      <div className="md:hidden fixed top-0 w-full bg-gray-800 text-white text-center py-2 z-40">
        <span className="text-sm">{t("breadcrumb")}</span>
      </div>

      <main className="pt-24 md:pt-20">
        <section className="bg-gray-900 text-white min-h-[60vh] flex flex-col justify-center items-center text-center py-12 px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-2">
            {t("homepageH1")}
          </h1>{" "}
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">
            {t("name")}
          </h2>{" "}
          {/* Your Name */}
          <p className="text-lg md:text-xl font-light mb-2">{t("tagline")}</p>
          <p className="text-sm md:text-base max-w-2xl mb-4">
            {t("specialty")}
          </p>
          <div className="mt-4 flex gap-4 flex-wrap justify-center">
            <a
              href="mailto:asadmateenkhan@gmail.com"
              className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600"
            >
              {t("ctaEmail")}
            </a>
            <a
              href="https://www.linkedin.com/in/asadmkhan"
              target="_blank"
              rel="noreferrer"
              className="border border-white px-4 py-2 rounded hover:bg-white hover:text-black"
            >
              {t("ctaLinkedIn")}
            </a>
          </div>
        </section>

        <section id="skills" className="p-10 bg-white text-gray-800">
          <h2 className="text-3xl font-bold mb-6 text-center">{t("skills")}</h2>
          <p className="text-center max-w-3xl mx-auto mb-8 text-sm md:text-base">
            {t("skillsIntro")}
          </p>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Languages & Frameworks
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>C#</li>
                <li>.NET (3.5–9), .NET Core</li>
                <li>Java</li>
                <li>JavaScript, TypeScript, Node.js</li>
                <li>ASP.NET MVC, Web API, WCF, ASMX</li>
                <li>REST, SOAP</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Angular, React, Vue, Knockout.js, Backbone.js</li>
                <li>HTML5, CSS3, SCSS, Bootstrap, Material UI</li>
                <li>AJAX, JSON, XML</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Databases</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>SQL Server (2008–2019)</li>
                <li>MySQL, PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">DevOps & Tools</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Git, GitHub, Bitbucket, TFS</li>
                <li>Docker, Kubernetes, CI/CD</li>
                <li>Webpack, NPM, Yarn, Gulp</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Automation & Testing
              </h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>Selenium WebDriver (30+ tools)</li>
                <li>Jasmine, Mocha, Karma, JUnit</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AI, BI & Other</h3>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>ML.NET</li>
                <li>d3.js, Highcharts, Telerik, Crystal Reports</li>
                <li>SharePoint (Designer/2010/2013), VS Code</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="p-10 bg-white text-gray-900">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {t("experience")}
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-8 text-sm md:text-base">
            {t("experienceIntro")}
          </p>
          <div className="max-w-5xl mx-auto space-y-10">
            <div>
              <h3 className="text-xl font-semibold">
                Init Consulting (Germany)
              </h3>
              <p className="text-sm text-gray-600">
                Senior Software Engineer | 02/2020 – Present
              </p>
              <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                <li>{t("exp1_1")}</li>
                <li>{t("exp1_2")}</li>
                <li>{t("exp1_3")}</li>
                <li>{t("exp1_4")}</li>
                <li>{t("exp1_5")}</li>
                <li>{t("exp1_6")}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Bukhatir Group (UAE)</h3>
              <p className="text-sm text-gray-600">
                Senior Software Engineer | 04/2018 – 01/2020
              </p>
              <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                <li>{t("exp2_1")}</li>
                <li>{t("exp2_2")}</li>
                <li>{t("exp2_3")}</li>
                <li>{t("exp2_4")}</li>
                <li>{t("exp2_5")}</li>
                <li>{t("exp2_6")}</li>
                <li>{t("exp2_7")}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                Polyvista Inc (Pakistan)
              </h3>
              <p className="text-sm text-gray-600">
                Software Engineer | 07/2013 – 04/2018
              </p>
              <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                <li>{t("exp3_1")}</li>
                <li>{t("exp3_2")}</li>
                <li>{t("exp3_3")}</li>
                <li>{t("exp3_4")}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">SSA Soft (Pakistan)</h3>
              <p className="text-sm text-gray-600">
                Software Engineer | 01/2013 – 07/2013
              </p>
              <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                <li>{t("exp4_1")}</li>
                <li>{t("exp4_2")}</li>
                <li>{t("exp4_3")}</li>
                <li>{t("exp4_4")}</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold">
                TriSoft Technology (Pakistan)
              </h3>
              <p className="text-sm text-gray-600">
                Junior Software Engineer | 08/2012 – 01/2013
              </p>
              <ul className="list-disc list-inside mt-2 text-sm space-y-1">
                <li>{t("exp5_1")}</li>
                <li>{t("exp5_2")}</li>
                <li>{t("exp5_3")}</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="education" className="p-10 bg-white">
          <h2 className="text-3xl font-bold mb-6 text-center">
            {t("education")}
          </h2>
          <p className="text-center max-w-3xl mx-auto mb-8 text-sm md:text-base">
            {t("educationIntro")}
          </p>
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p>{t("edu1")}</p>
            <p>{t("edu2")}</p>
            <p>{t("edu3")}</p>
          </div>
        </section>

        <section id="certifications" className="p-10 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-6">{t("certifications")}</h2>
          <p className="text-center max-w-3xl mx-auto mb-8 text-sm md:text-base">
            {t("certificationsIntro")}
          </p>
          <div>
            <p>{t("cert1")}</p>
            <p>{t("cert2")}</p>
          </div>
        </section>

        <section
          id="contact"
          className="p-10 bg-gray-900 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">{t("contact")}</h2>
          <p className="text-center max-w-3xl mx-auto mb-8 text-sm md:text-base">
            {t("contactIntro")}
          </p>
          <p>
            Email:{" "}
            <a href="mailto:asadmateenkhan@gmail.com" className="underline">
              asadmateenkhan@gmail.com
            </a>
          </p>
          <p>
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/asadmkhan"
              className="underline"
              target="_blank"
              rel="noreferrer"
            >
              /in/asadmkhan
            </a>
          </p>
        </section>
      </main>
      <LanguageSwitcher />
    </div>
  );
}
