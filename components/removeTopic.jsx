"use client";

import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";

const RemoveTopic = ({ id }) => {
  const router = useRouter();

  const handleRemove = async () => {
    const confirmed = confirm("Are you sure ?");
    if (confirmed) {
      try {
        const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
          method: "DELETE",
        });
        if (res.ok) {
          toast.success("Topic deleted successfully");
          router.refresh();
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return <FaTrash onClick={handleRemove} className="text-red-500 size-5" />;
};

export default RemoveTopic;
