"use client";
import React from "react";
import { setActiveSidebar } from "@/lib/sidebarSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const MDAssistant = () => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [senderStatus, setSenderStatus] = useState(false);
  useEffect(() => {
    dispatch(setActiveSidebar("MDAssistant"));
    /// handle update scroll on new message.
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: inputValue, sender: senderStatus },
      ]);
      setInputValue("");
      setSenderStatus(!senderStatus);
    }
  };

  return (
    <div className="flex flex-col p-3 bg-blue-50 w-full h-screen ">
      <div className="flex-grow">
        <div className="relative h-full">
          <div className="overflow-y-auto absolute inset-0">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.sender ? "text-right" : "text-left"}
              >
                <div
                  className={`text-left inline-block p-2 m-2 rounded-md text-sm ${
                    msg.sender
                      ? "bg-secondary text-white"
                      : "bg-white text-gray-500"
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Type your message here"
          className="bg-white flex-grow border p-2"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <label className="bg-blue-200 p-2 text-gray-600 cursor-pointer rounded-sm border border-blue-200">
          <input type="file" className="hidden" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6"
          >
            <path
              fillRule="evenodd"
              d="M18.97 3.659a2.25 2.25 0 0 0-3.182 0l-10.94 10.94a3.75 3.75 0 1 0 5.304 5.303l7.693-7.693a.75.75 0 0 1 1.06 1.06l-7.693 7.693a5.25 5.25 0 1 1-7.424-7.424l10.939-10.94a3.75 3.75 0 1 1 5.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 0 1 5.91 15.66l7.81-7.81a.75.75 0 0 1 1.061 1.06l-7.81 7.81a.75.75 0 0 0 1.054 1.068L18.97 6.84a2.25 2.25 0 0 0 0-3.182Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
        <button
          type="submit"
          className="bg-secondary p-2 text-white rounded-sm"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default MDAssistant;
