import { InputProps } from "../../interfaces";

export interface InputPropsWithTitle extends InputProps {
  title: string;
}

const InputWidget: React.FC<InputPropsWithTitle> = (
  props: InputPropsWithTitle
) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 py-2">
        <div className="w-full relative text-white text-adbase">
          <span className="block font-medium">{props.title}</span>
          <input
            type="text"
            {...props}
            className="block h-12 py-1 w-full px-4 mt-1.5 text-sm text-white border-none bg-gray-800"
            required
          />{" "}
        </div>
      </div>
    </>
  );
};

export default InputWidget;
