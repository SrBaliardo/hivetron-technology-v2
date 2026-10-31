import Head from "next/head";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { Projects } from "@/sections/Projects";
import { Approach } from "@/sections/Approach";
import { Team } from "@/sections/Team";
import { Technologies } from "@/sections/Technologies";
import { Contact } from "@/sections/Contact";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <Head>
        <title>{site.title}</title>
        <meta name="description" content={site.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#101110" />
        <link rel="canonical" href={`${site.url}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content={site.name} />
        <meta property="og:title" content={site.title} />
        <meta property="og:description" content={site.description} />
        <meta property="og:url" content={`${site.url}/`} />
        <meta
          property="og:image"
          content={`${site.url}/images/social-card.png`}
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Hivetron Technology — software sob medida, ERP, web e desktop"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={site.title} />
        <meta name="twitter:description" content={site.description} />
        <meta
          name="twitter:image"
          content={`${site.url}/images/social-card.png`}
        />
      </Head>
      <Header />
      <main id="main" tabIndex={-1}>
        <Hero />
        <Services />
        <Projects />
        <Approach />
        <Team />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
