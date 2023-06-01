type inputProps = {
  type: "text" | "email" | "textarea";
  placeholder?: string;
  id: string;
  value: string;
  onChange: any;
};

const Input = ({ type, placeholder }: inputProps) => {
  return (
    <>
      {(() => {
        switch (type) {
          case "textarea":
            return (
              <textarea
                className="p-3 bg-white border border-neutral-400 w-full h-40 resize-none rounded-lg"
                placeholder={placeholder}
                required
              ></textarea>
            );

          case "text":
            return (
              <input
                type={"text"}
                placeholder={placeholder}
                className="p-2 border border-neutral-400 rounded-lg w-full"
                required
              />
            );
        }
      })()}
    </>
  );
};

export default Input;
