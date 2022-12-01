import { InputProps } from "../../../interface";

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
            className="block h-10 py-1 w-full px-4 mt-1.5 text-adbase text-white border-none bg-dashbase/40"
            required
          />{" "}
        </div>
      </div>
    </>
  );
};

export default InputWidget;
