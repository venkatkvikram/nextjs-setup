export const Button = ({ children, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700" {...props}>
    {children}
  </button>
);
