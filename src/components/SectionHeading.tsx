type SectionHeadingProps = {
  children: React.ReactNode;
  id?: string;
};

export const SectionHeading = ({ children, id }: SectionHeadingProps) => (
  <h2 id={id} className="section-heading">
    {children}
  </h2>
);
