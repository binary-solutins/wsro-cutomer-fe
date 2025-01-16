import React from "react";
import Gallery from "../../components/Gallery/Gallery";
import Navbar from "../../components/Navbar";
import FooterSection from "../../components/Footer/FooterSection";
import GalleryBanner from "./GalleryBanner";

function GalleryPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <GalleryBanner />
        <Gallery />
      </main>
      <FooterSection />
    </>
  );
}

export default GalleryPage;
