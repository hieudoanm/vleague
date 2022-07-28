import React from "react";
import Footer from "../../atoms/Footer";
import Header from "../../molecules/Header";

type PageTemplateProps = { children: React.ReactNode };

const PageTemplate: React.FC<PageTemplateProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default PageTemplate;
