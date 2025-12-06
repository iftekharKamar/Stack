import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCards } from "../features/cardSlice";
import { useParams } from "react-router-dom";
import Card from "./Card"

export default function CardDash() {
  const dispatch = useDispatch();
  const { id: stackId } = useParams();   // stackId from URL

  const token = localStorage.getItem("jwtToken");
  const { cards, loading, error } = useSelector((state) => state.card);

  useEffect(() => {
    if (token && stackId) {
      dispatch(getAllCards({ token, stackId }));
    }
  }, [token, stackId, dispatch]);



  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mx-10">
      {cards?.map((c) => (
        <Card key={c.id} title={c.title}/>
      ))}
    </div>
  );
}
