"use client";
import React from "react";
import { setActiveSidebar } from "@/lib/sidebarSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { FaMicrophone, FaStop, FaCircle } from "react-icons/fa";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Recorder = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveSidebar("recorder"));
  }, []);
  const [isRecording, setIsRecording] = useState(false);

  const handleRecordClick = () => {
    setIsRecording(true);
  };

  const handleStopClick = () => {
    setIsRecording(false);
  };

  const [language, setLanguage] = React.useState("");
  const [model, setModel] = React.useState("");

  return (
    <div className="p-6 h-screen">
      <div className="p-6 h-full flex flex-col ">
        <div className="my-auto">
          <h1 className="text-center text-3xl font-bold mb-4 text-gray-800 dark:text-gray-200">
            Audio Recorder
          </h1>

          <div className="flex justify-center my-6">
            {isRecording ? (
              <FaCircle className="text-red-600 text-6xl pulse-animation" />
            ) : (
              <FaMicrophone className="text-secondary text-6xl transition-transform transform hover:scale-110" />
            )}
          </div>

          <div className="flex justify-center space-x-4">
            <button
              type="button"
              className={`text-white rounded-lg text-sm px-5 py-2.5 transition duration-200 ${
                isRecording
                  ? "bg-red-600 hover:bg-red-700"
                  : "bg-secondary duration-200 hover:bg-blue-700"
              }`}
              onClick={isRecording ? handleStopClick : handleRecordClick}
            >
              {isRecording ? (
                <>
                  <FaStop className="inline mr-2" />
                  Stop
                </>
              ) : (
                <>
                  <FaMicrophone className="inline mr-2" />
                  Record
                </>
              )}
            </button>

            <button
              type="button"
              className="text-white bg-gray-300 hover:bg-gray-400 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 transition duration-200"
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recorder;
