import { ReactNode } from "react";

interface StepProps {
  title: string;
  icon: ReactNode;
}

const Step: React.FC<StepProps> = ({ title, icon }) => {
  return (
    <div className="flex flex-row items-center justify-between">
      {icon}
      <h1>{title}</h1>
    </div>
  );
};

export default Step;
