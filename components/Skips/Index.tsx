import SkipCard, { SkipCardProps } from "./SkipCard";

interface SkipGridProps {
  skips: SkipCardProps[];
}

const SkipsGrid = ({ skips }: SkipGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {skips.map((skip, index) => (
        <SkipCard key={index} {...skip} />
      ))}
    </div>
  );
};

export default SkipsGrid;
