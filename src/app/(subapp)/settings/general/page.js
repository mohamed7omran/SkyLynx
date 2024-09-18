"use client";
import { setActiveTab } from "../../../../lib/tabSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const General = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab("general"));
  }, []);

  return (
    <div class="p-4 border-2 rounded-lg dark:border-gray-700">General</div>
  );
};

export default General;
