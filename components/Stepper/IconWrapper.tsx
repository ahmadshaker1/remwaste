interface IconWrapperProps {
  color?: string;
  className?: string;
  children: React.ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({
  color = "currentColor",
  className,
  children,
}) => {
  return (
    <div className={className} style={{ color }}>
      {children}
    </div>
  );
};

export default IconWrapper;
