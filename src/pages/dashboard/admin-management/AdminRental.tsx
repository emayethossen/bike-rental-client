import React from 'react';
import AdminRentalManagement from './AdminRentalManagement';
import RentalReturn from './RentalReturn';

const AdminRentalPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <AdminRentalManagement />
      <RentalReturn />
    </div>
  );
};

export default AdminRentalPage;
