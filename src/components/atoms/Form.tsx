export const Form = ({ children, ...props }: React.FormHTMLAttributes<HTMLFormElement>) => (
  <form className="space-y-4" {...props}>
    {children}
  </form>
);
