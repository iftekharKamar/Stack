import React, { useState } from "react";
import { addStack } from "../features/stacksSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Icons from Lucide for a modern look (reusing pattern from AuthComponent)
const LayoutGrid = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M7 3v18M17 3v18M3 11h18M3 17h18" />
  </svg>
);
const FileText = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);
const Link = (props) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const InputField = ({ id, label, placeholder, value, onChange, Icon, isLoading }) => (
  <div>
    <label
      htmlFor={id}
      className="mb-2 dark:text-gray-400 text-sm font-medium flex items-center"
    >
      <Icon className="w-4 h-4 mr-1 text-indigo-500" /> {label}
    </label>

    <input
      id={id}
      type="text"
      placeholder={placeholder}
      className="border p-3 shadow-inner dark:bg-gray-800 dark:text-gray-300 dark:border-gray-700 
      placeholder:text-sm focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ease-in-out 
      duration-300 border-gray-300 rounded-xl w-full"
      value={value}
      onChange={onChange}
      disabled={isLoading}
      required
    />
  </div>
);


const NewStack = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [slug, setSlug] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = localStorage.getItem("jwtToken");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(null);
    setIsLoading(true);

    const formattedSlug = slug
      .toLowerCase()
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9-]/g, "");

    if (!title || !description || !formattedSlug) {
      setMessage({ type: "error", text: "All fields are required." });
      setIsLoading(false);
      return;
    }

    const resultAction = await dispatch(
      addStack({ token, title, desc: description, slug: formattedSlug })
    );

    if (addStack.fulfilled.match(resultAction)) {
      navigate("/", { replace: true });
    }

    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-950 p-4">
      <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-0.5 rounded-3xl w-full max-w-sm">
        <div className="bg-white dark:bg-gray-900 rounded-[30px] shadow-2xl p-6 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-6">

            <InputField
              id="title"
              label="Stack Title"
              placeholder="e.g., React Components"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              Icon={LayoutGrid}
              isLoading={isLoading}
            />

            <InputField
              id="description"
              label="Description"
              placeholder="Short description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              Icon={FileText}
              isLoading={isLoading}
            />

            <InputField
              id="slug"
              label="Slug"
              placeholder="e.g., react-tailwind"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              Icon={Link}
              isLoading={isLoading}
            />

            <button type="submit" className="bg-indigo-600 text-white p-3 rounded-xl w-full">
              Create Stack
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewStack;
