// src/pages/AdminDashboard.tsx

import BikeList from "../components/ui/admin/BikeList";


const AdminDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <BikeList />
    </div>
  );
};

export default AdminDashboard;
