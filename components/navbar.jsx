import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Navbar = () => {
  return (
    <section>
      <div className="flex items-center justify-between border border-slate-700 p-3 rounded-md mt-10 bg-slate-900">
        <h1>
          <Link href="/">
            <FaHome size={26} color="green" />
          </Link>
        </h1>
        <Link href="/addTopic">
          <button className=" px-4 py-2 border border-slate-700 rounded ">
            Add Topic
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Navbar;
