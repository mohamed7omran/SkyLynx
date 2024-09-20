"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { setActiveTab } from "../../../../lib/tabSlice";
import { useEffect, useState } from "react";

const Notifications = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);
  const [pushNotifications, setPushNotifications] = useState(true);
  const [appointmentReminders, setAppointmentReminders] = useState(true);
  const [newsletterSubscription, setNewsletterSubscription] = useState(false);
  const [securityAlerts, setSecurityAlerts] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setActiveTab("notifications"));
  }, []);
  return (
    <div class="p-4 mt-5">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Notification Settings</h2>
        <form className="space-y-4">
          {/* Email Notifications */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Email Notifications</label>
            <input
              type="checkbox"
              checked={emailNotifications}
              onChange={(e) => setEmailNotifications(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>

          {/* SMS Notifications */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700">SMS Notifications</label>
            <input
              type="checkbox"
              checked={smsNotifications}
              onChange={(e) => setSmsNotifications(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>

          {/* Push Notifications */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Push Notifications</label>
            <input
              type="checkbox"
              checked={pushNotifications}
              onChange={(e) => setPushNotifications(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>

          {/* Appointment Reminders */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Appointment Reminders</label>
            <input
              type="checkbox"
              checked={appointmentReminders}
              onChange={(e) => setAppointmentReminders(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>

          {/* Newsletter Subscription */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Newsletter Subscription</label>
            <input
              type="checkbox"
              checked={newsletterSubscription}
              onChange={(e) => setNewsletterSubscription(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>

          {/* Security Alerts */}
          <div className="flex items-center justify-between">
            <label className="text-gray-700">Security Alerts</label>
            <input
              type="checkbox"
              checked={securityAlerts}
              onChange={(e) => setSecurityAlerts(e.target.checked)}
              className="form-checkbox h-5 w-5 text-blue-600"
            />
          </div>

          {/* Additional Notification Settings */}
          {/* You can add more notification preferences here as needed */}

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

export default Notifications;
