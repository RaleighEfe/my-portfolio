import clsx from "clsx";

type titleProps = {
  children: string;
  type: "main" | "subHead";
};
const SectionTitle = ({ children, type }: titleProps) => {
  return (
    <h3
      className={clsx(
        "capitalize items-center",
        type ? "text-xl" : "text-lg",
        type === "main" && "font-bold",
        type === "subHead" && "font-medium"
      )}
    >
      {children}
    </h3>
  );
};

export default SectionTitle;
