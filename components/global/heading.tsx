"use client";

import clsx from "clsx";

interface IHeading {
  title: string;
  subtitle?: string;
  center?: boolean;
}

const Heading: React.FC<IHeading> = ({ title, subtitle, center }) => {
  return (
    <div className={clsx(``, center ? "text-center" : "text-start")}>
      <div className="text-2xl font-bold">{title}</div>
      <div className="font-light text-neutral-500 mt-2">{subtitle}</div>
    </div>
  );
};

export default Heading;
