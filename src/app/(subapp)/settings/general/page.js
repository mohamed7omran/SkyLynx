"use client";
import { setActiveTab } from "../../../../lib/tabSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

const General = () => {
  const [language, setLanguage] = useState("English");
  const [model, setModel] = useState("Model A");
  const [timeZone, setTimeZone] = useState("UTC");
  const [theme, setTheme] = useState("light");
  const [dateFormat, setDateFormat] = useState("MM/DD/YYYY");
  const [autoSave, setAutoSave] = useState(false);
  const [signature, setSignature] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setActiveTab("general"));
  }, []);

  return (
    <div class="p-4 mt-5 ">
      {" "}
      <div>
        <h2 className="text-2xl font-semibold mb-4">General Settings</h2>
        <form className="space-y-4">
          {/* Language Preference */}
          <div>
            <label className="block text-gray-700">Language</label>
            <select
              className="block w-full mt-1 p-2 border rounded"
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
            >
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
              <option>German</option>
              {/* Add more languages as needed */}
            </select>
          </div>
          <div>
            <label className="block text-gray-700">Model</label>
            <select
              className="block w-full mt-1 p-2 border rounded"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            >
              <option>Model A</option>
              <option>Model B</option>
              <option>Model C</option>
            </select>
          </div>

          {/* Time Zone Setting */}
          <div>
            <label className="block text-gray-700">Time Zone</label>
            <select
              className="block w-full mt-1 p-2 border rounded"
              value={timeZone}
              onChange={(e) => setTimeZone(e.target.value)}
            >
              <option value="UTC">UTC</option>
              <option value="GMT">GMT</option>
              <option value="EST">EST</option>
              <option value="PST">PST</option>
              {/* Add more time zones as needed */}
            </select>
          </div>

          {/* Default Theme */}
          <div>
            <label className="block text-gray-700">Default Theme</label>
            <div className="flex items-center space-x-4 mt-1">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="theme"
                  value="light"
                  checked={theme === "light"}
                  onChange={(e) => setTheme(e.target.value)}
                  className="mr-2"
                />
                Light
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="theme"
                  value="dark"
                  checked={theme === "dark"}
                  onChange={(e) => setTheme(e.target.value)}
                  className="mr-2"
                />
                Dark
              </label>
            </div>
          </div>

          {/* Date Format */}
          <div>
            <label className="block text-gray-700">Date Format</label>
            <select
              className="block w-full mt-1 p-2 border rounded"
              value={dateFormat}
              onChange={(e) => setDateFormat(e.target.value)}
            >
              <option value="MM/DD/YYYY">MM/DD/YYYY</option>
              <option value="DD/MM/YYYY">DD/MM/YYYY</option>
              <option value="YYYY-MM-DD">YYYY-MM-DD</option>
            </select>
          </div>

          {/* Auto Save */}
          <div>
            <label className="block text-gray-700">Auto Save</label>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={autoSave}
                onChange={(e) => setAutoSave(e.target.checked)}
                className="mr-2"
              />
              <span>Enable auto-save for forms</span>
            </div>
          </div>

          {/* Email Signature */}
          <div>
            <label className="block text-gray-700">Email Signature</label>
            <textarea
              value={signature}
              onChange={(e) => setSignature(e.target.value)}
              placeholder="Enter your email signature..."
              className="block w-full mt-1 p-2 border rounded"
            />
          </div>

          {/* Additional General Settings */}
          {/* You can add more settings here as needed, for example: */}
          {/* Default Notifications, File Upload Settings, etc. */}

          {/* Save Button */}
          <div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default General;
