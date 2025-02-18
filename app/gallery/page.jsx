"use client";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import MasonryGallery from "@/app/ui/Gallery/MasonryGallery";

export default function GalleryPage() {
  return (
    <>
      <PageHeading
        title="Gallery"
        bgSrc="/images/team_hero_bg.jpeg"
        pageLinkText="Gallery"
      />
      <Spacing lg="145" md="80" />
      <MasonryGallery />
      <Spacing lg="70" md="50" />
      {/* <Div className="container">
        <Cta
          title="Let's disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div> */}
    </>
  );
}
