import Image from "next/image";

export interface SkipCardProps {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost: number | null;
  per_tonne_cost: number | null;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area: string | null;
  forbidden: boolean;
  created_at: string;
  updated_at: string;
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}

const SkipCard: React.FC<SkipCardProps> = ({
  // id,
  size,
  price_before_vat,
  vat,
  hire_period_days,
  allowed_on_road,
  allows_heavy_waste,
}) => {
  const totalPrice = price_before_vat + (price_before_vat * vat) / 100;

  return (
    <div className="rounded-lg p-4">
      <div className="relative">
        <Image
          src="/assets/dummy-skip.jpg"
          width={400}
          height={200}
          className="rounded-xl"
          alt="Dummy Skip Dumpster Image"
        />
        <h2 className="bg-white rounded-full absolute top-2 left-2 px-2 text-sm font-semibold shadow">
          {size} yards
        </h2>
      </div>
      <p className="text-lg mt-4 font-semibold">
        {hire_period_days} days hire period
      </p>

      <div className="flex flex-col items-start justify-start mt-4">
        {allowed_on_road ? (
          <div className="flex flex-row items-center justify-start space-x-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 bg-[#22c55e] rounded-full flex items-center justify-center"
            >
              <path
                d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14a1 1 0 1 0-1.42 1.42l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.42Z"
                fill="#fff"
              />
            </svg>

            <p className="text-sm">Allowed on road</p>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-start space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 stroke-white fill-[#ff0000] mx-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <p className="text-sm">Not allowed on road</p>
          </div>
        )}

        {allows_heavy_waste ? (
          <div className="flex flex-row items-center justify-start space-x-1">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="size-4 bg-[#22c55e] rounded-full flex items-center justify-center"
            >
              <path
                d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46-3.13-3.14a1 1 0 1 0-1.42 1.42l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.42Z"
                fill="#fff"
              />
            </svg>
            <p className="text-sm">Allows heavy waste</p>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-start space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 stroke-white fill-[#ff0000] mx-0"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <p className="text-sm">Does not allow heavy waste</p>
          </div>
        )}
      </div>
      <div className="flex flex-row items-center justify-between w-full mt-4">
        <p className="text-xl font-semibold">£{totalPrice.toFixed(2)}</p>
        <p className="text-sm font-semibold">Select</p>
      </div>
    </div>
  );
};

export default SkipCard;
