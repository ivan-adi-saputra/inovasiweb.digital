import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface Props {
  isLoading: boolean;
  name: string;
}

const ButtonForm: NextPage<Props> = ({ isLoading, name }) => {
  return (
    <Button
      type="submit"
      className={`bg-purple-500 text-white font-bold py-2 px-4 w-full rounded-lg hover:bg-purple-200 hover:text-purple-500 
                ${
                  isLoading
                    ? "bg-slate-400 text-purple-500"
                    : "bg-purple-500 text-white"
                }
                `}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <AiOutlineLoading3Quarters className="animate-spin mr-2" size={16} />
          Loading
        </>
      ) : (
        name
      )}
    </Button>
  );
};

export default ButtonForm;
