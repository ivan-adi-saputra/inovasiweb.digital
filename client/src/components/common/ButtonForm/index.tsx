import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";

interface Props {
  isLoading: boolean;
  isEdit: boolean;
}

const ButtonForm: NextPage<Props> = ({ isLoading, isEdit }) => {
  return (
    <Button
      type="submit"
      className={`px-4 ${
        isLoading
          ? "bg-slate-400  text-gray-700"
          : "bg-purple-500 hover:bg-purple-700"
      }`}
      disabled={isLoading}
    >
      {isLoading ? (
        <>
          <AiOutlineLoading3Quarters className="animate-spin mr-2" size={16} />
          Loading
        </>
      ) : (
        <>
          {isEdit ? (
            <>
              <BsPencilSquare className="mr-2" />
              Update
            </>
          ) : (
            <>
              <FaPlus className="mr-2" />
              Submit
            </>
          )}
        </>
      )}
    </Button>
  );
};

export default ButtonForm;
