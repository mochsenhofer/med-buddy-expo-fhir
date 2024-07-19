import React from "react";
import Header from "./basic_layout_components/Header";
import SectionListComponent from "./basic_layout_components/SectionListComponent";
import Footer from "./basic_layout_components/Footer";

export default function BasicLayout({ sections, renderItem, title }) {
  return (
    <>
      <Header title={title} />
      <SectionListComponent sections={sections} renderItem={renderItem} />
      <Footer />
    </>
  );
}
