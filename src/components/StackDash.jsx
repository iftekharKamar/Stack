import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStacks } from "../features/stacksSlice.js";
import { useNavigate } from "react-router-dom";
import Card from "./Card.jsx";

export default function StackDash() {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // useNavigate in parent
  const { stacks, loading, error } = useSelector((state) => state.stacks);
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (token) dispatch(getAllStacks(token));
  }, [dispatch, token]);

  if (loading) return <p>Loading stacks...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  const handleCardClick = (stackId) => {
    navigate(`/stacks/${stackId}/cards`); // navigation happens here
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-10">
      {stacks.map((stack) => (
        <Card
          key={stack.id}
          title={stack.title}
          desc={stack.desc}
          onClick={() => handleCardClick(stack.id)} // pass handler
        />
      ))}
    </div>
  );
}
