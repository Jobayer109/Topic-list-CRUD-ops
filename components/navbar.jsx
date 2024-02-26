const Navbar = () => {
  return (
    <section>
      <div className="flex items-center justify-between border border-slate-700 p-3 rounded-md my-10">
        <h1>Home</h1>
        <button className=" px-4 py-2 border border-slate-700 rounded ">
          Add Topic
        </button>
      </div>
    </section>
  );
};

export default Navbar;
