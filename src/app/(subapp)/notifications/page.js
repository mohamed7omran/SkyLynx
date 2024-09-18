"use client";
import React from "react";
import { setActiveSidebar } from "@/lib/sidebarSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const Notifications = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveSidebar("notifications"));
  }, []);
  return (
    <div class="p-4 border-2 rounded-lg dark:border-gray-700">
      Notifications
    </div>
  );
};

export default Notifications;
