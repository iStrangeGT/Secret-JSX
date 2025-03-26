import React from "react";


const AccountSettings = () => {
  const { user } = useAuth(); // Ambil informasi pengguna

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Account Settings</h1>
        <p className="mb-4">Welcome, {user?.email}!</p>
        <p>This is your account settings page.</p>
      </div>
    </div>
  );
};

export default AccountSettings;
