"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../../lib/tabSlice";
import { useEffect } from "react";

const Notifications = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveTab("notifications"));
  }, []);
  return (
    <div class="p-4 border-2 rounded-lg dark:border-gray-700">
      Notifications
    </div>
  );
};

export default Notifications;
