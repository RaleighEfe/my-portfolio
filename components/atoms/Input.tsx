type inputProps = {
  type: "text" | "email" | "textarea";
  placeholder?: string;
  id: string;
  value: string;
  setValue: any;
};

const Input = ({ type, placeholder, setValue }: inputProps) => {
  return (
    <>
      {(() => {
        switch (type) {
          case "textarea":
            return (
              <textarea
                className="p-3 bg-white border border-neutral-400 w-full h-40 resize-none rounded-lg"
                placeholder={placeholder}
                onChange={(e: any) => setValue(e.target.value)}
                required
              ></textarea>
            );

          case "text":
            return (
              <input
                type={"text"}
                placeholder={placeholder}
                className="p-2 border border-neutral-400 rounded-lg w-full"
                onChange={(e: any) => setValue(e.target.value)}
                required
              />
            );
        }
      })()}
    </>
  );
};

export default Input;
