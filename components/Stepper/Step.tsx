import { ReactNode } from "react";

interface StepProps {
  title: string;
  icon: ReactNode;
}

const Step: React.FC<StepProps> = ({ title, icon }) => {
  return (
    <div className="flex flex-row items-center justify-between space-x-2">
      {icon}
      <h1 className="text-sm font-medium max-lg:hidden">{title}</h1>
    </div>
  );
};

export default Step;
