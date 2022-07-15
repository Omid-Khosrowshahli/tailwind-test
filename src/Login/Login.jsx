import { useState } from "react";

const Login = () => {
  const tabTitles = [
    {content: "tab-1", id: 1},
    {content: "tab-2", id: 2},
    {content: "tab-3", id: 3},
    {content: "tab-4", id: 4},
    {content: "tab-5", id: 5},
    {content: "tab-6", id: 6}
  ];

  const [activeTab, setActiveTab] = useState(0);

  const handleActiveTab = (index) => {
    setActiveTab(index);
  };
  return (
    <div >
      {tabTitles.map((item, index) =>(
        <button
          className={activeTab === index ?
            "border rounded-b-lg py-1 px-3 bg-slate-300" : "border rounded-b-lg py-1 px-3 bg-slate-100"
          }
          onClick={() => handleActiveTab(index)}
        >
          {item.content}
        </button>
      ))}
      <form className="flex flex-initial flex-col justify-center items-center gap-4 h-screen">
        <div>
          <label for="username">Username: </label>
          <input type="text" name="username" placeholder="Username..."
            className="border border-solid border-1 rounded-full border-slate-400 p-2 outline-none"
          />
        </div>
        <div>
          <label for="password">Password: </label>
          <input type="password" name="password" placeholder="Password..."
            className="border border-solid border-1 rounded-full border-slate-400 p-2 outline-none"
          />
        </div>
        <button type="submit"
          className="rounded-full bg-slate-400 border-solid border-1 border-slate-800 py-2 px-10">
            Login
        </button>
      </form>
    </div>
  );
};

export default Login;