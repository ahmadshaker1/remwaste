import React from "react";
import Step from "./Step";
import * as Icons from "./Icons";

const steps = [
  { title: "Postcode", icon: <Icons.LocationPinIcon /> },
  { title: "Waste Type", icon: <Icons.TrashIcon /> },
  { title: "Select Skip", icon: <Icons.TruckIcon /> },
  { title: "Permit Check", icon: <Icons.ShieldCheckIcon /> },
  { title: "Choose Date", icon: <Icons.CalendarIcon /> },
  { title: "Payment", icon: <Icons.CardIcon /> },
];

interface StepperProps {
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  return (
    <div className="flex items-center justify-between w-full">
      {steps.map((step, index) => (
        <React.Fragment key={step.title}>
          <Step
            title={step.title}
            icon={React.cloneElement(step.icon, {
              color:
                index < currentStep
                  ? "#22c55e"
                  : index === currentStep
                  ? "#3b82f6"
                  : "#cbd5e1",
              className: "size-6",
            })}
          />
          {index < steps.length - 1 && (
            <div className="flex-1 border-t-2 border-gray-300 mx-2"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stepper;
