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
  id,
  size,
  price_before_vat,
  vat,
  hire_period_days,
  allowed_on_road,
  allows_heavy_waste,
}) => {
  const totalPrice = price_before_vat + (price_before_vat * vat) / 100;

  return (
    <div className="bg-white shadow rounded-lg p-4">
      <h2 className="text-lg font-semibold">Skip Size: {size} yd³</h2>
      <p>ID: {id}</p>
      <p>Hire Period: {hire_period_days} days</p>
      <p>Price Before VAT: £{price_before_vat.toFixed(2)}</p>
      <p>VAT: {vat}%</p>
      <p>
        <strong>Total Price: £{totalPrice.toFixed(2)}</strong>
      </p>
      <p>Allowed On Road: {allowed_on_road ? "✅ Yes" : "❌ No"}</p>
      <p>Allows Heavy Waste: {allows_heavy_waste ? "✅ Yes" : "❌ No"}</p>
    </div>
  );
};

export default SkipCard;
