import React from "react";
import Step from "./Step";
import * as Icons from "./Icons";

const steps = [
  { title: "Postcode", icon: <Icons.LocationPinIcon className="size-12" /> },
  { title: "Waste Type", icon: <Icons.TrashIcon className="size-12" /> },
  { title: "Select Skip", icon: <Icons.TruckIcon className="size-12" /> },
  {
    title: "Permit Check",
    icon: <Icons.ShieldCheckIcon className="size-12" />,
  },
  { title: "Choose Date", icon: <Icons.CalendarIcon className="size-12" /> },
  { title: "Payment", icon: <Icons.CardIcon className="size-12" /> },
];

interface StepperProps {
  currentStep: number;
}

const CheckIcon = () => (
  <div className="size-7 bg-[#22c55e] rounded-full flex items-center justify-center">
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14a1 1 0 1 0-1.42 1.42l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.42Z"
        fill="#fff"
      />
    </svg>
  </div>
);

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full">
      {steps.map((step, index) => (
        <React.Fragment key={step.title}>
          <Step
            title={step.title}
            icon={
              index < currentStep - 1 ? (
                <CheckIcon />
              ) : (
                React.cloneElement(step.icon, {
                  color: index === currentStep - 1 ? "#22c55e" : "#cbd5e1",
                  className: "size-7",
                })
              )
            }
          />
          {index < steps.length - 1 && (
            <div
              className={`flex-1 border-t-4 rounded-full mx-2 ${
                index < currentStep - 1
                  ? "border-[#22c55e]"
                  : "border-[#cbd5e1]"
              }`}
            ></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
