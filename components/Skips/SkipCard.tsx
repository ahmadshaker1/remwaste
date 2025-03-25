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
        <h2 className="bg-white rounded-full absolute bottom-2 left-2 px-2 text-sm font-semibold shadow">
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
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 fill-[#22c55e]"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-sm">Allowed on road</p>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-start space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 fill-[#ff0000] "
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-sm">Not allowed on road</p>
          </div>
        )}

        {allows_heavy_waste ? (
          <div className="flex flex-row items-center justify-start space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 fill-[#22c55e]"
            >
              <path
                fillRule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-sm">Allows heavy waste</p>
          </div>
        ) : (
          <div className="flex flex-row items-center justify-start space-x-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 fill-[#ff0000] "
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-sm">Does not allow heavy waste</p>
          </div>
        )}
      </div>
      <div className="flex flex-row items-center justify-between w-full mt-4">
        <p className="text-xl font-semibold">£{totalPrice.toFixed(2)}</p>
        <button className="cursor-pointer duration-300 hover:brightness-90 group w-18 text-xs font-semibold bg-[#22c55e] text-white pl-3 py-1 rounded-full flex flex-row items-center justify-start">
          Select
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={3}
            stroke="currentColor"
            className="size-3 ml-2 group-hover:ml-3 duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SkipCard;
