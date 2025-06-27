export const Select = ({
  options,
  ...props
}: { options: string[] } & React.SelectHTMLAttributes<HTMLSelectElement>) => (
  <select className="border border-gray-300 p-2 rounded w-full" {...props}>
    {options.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
);
