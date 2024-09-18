"use client";
import React from "react";
import { setActiveSidebar } from "@/lib/sidebarSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const MDAssistant = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveSidebar("MDAssistant"));
  }, []);
  return (
    <div class="p-4 border-2 rounded-lg dark:border-gray-700">MDAssistant</div>
  );
};

export default MDAssistant;
