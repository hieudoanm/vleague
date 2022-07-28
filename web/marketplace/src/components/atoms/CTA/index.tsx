import React from "react";

import Link from "next/link";

export type CTAProps = { title: string; route: any; link: string };

const CTA: React.FC<CTAProps> = ({ title, route, link }) => {
  if (route && route.slug && route.slug.current) {
    return (
      <Link href={`/${route.slug.current}`}>
        <a>{title}</a>
      </Link>
    );
  }

  if (link) {
    return <a href={link}>{title}</a>;
  }

  return <a>{title}</a>;
};

CTA.displayName = "CTA";

export default CTA;
