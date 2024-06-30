import React from 'react';

const recentOrders = [
  { id: '#00745', status: 'Pending', country: 'GB', customer: 'Giordano Bruno', date: '2020-11-02', total: '$2,742.00' },
  { id: '#00513', status: 'Hold', country: 'HW', customer: 'Hans Weber', date: '2020-09-05', total: '$204.00' },
  { id: '#00507', status: 'Pending', country: 'AR', customer: 'Andrea Rossi', date: '2020-08-21', total: '$5,039.00' },
  { id: '#00104', status: 'Canceled', country: 'RF', customer: 'Richard Feynman', date: '2020-06-22', total: '$79.00' },
  { id: '#00097', status: 'Completed', country: 'LG', customer: 'Leonardo Garcia', date: '2020-05-09', total: '$826.00' },
  { id: '#00082', status: 'Completed', country: 'NT', customer: 'Nikola Tesla', date: '2020-04-27', total: '$1,052.00' },
  { id: '#00063', status: 'Pending', country: 'MC', customer: 'Marie Curie', date: '2020-02-09', total: '$441.00' },
  { id: '#00012', status: 'Completed', country: 'KT', customer: 'Konstantin Tsiolkovsky', date: '2020-01-01', total: '$12,961.00' },
];

const RecentOrders = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow mt-4">
      <h3 className="text-lg font-bold mb-2">Recent Orders</h3>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b border-gray-200">No.</th>
            <th className="py-2 px-4 border-b border-gray-200">Status</th>
            <th className="py-2 px-4 border-b border-gray-200">Co.</th>
            <th className="py-2 px-4 border-b border-gray-200">Customer</th>
            <th className="py-2 px-4 border-b border-gray-200">Date</th>
            <th className="py-2 px-4 border-b border-gray-200">Total</th>
          </tr>
        </thead>
        <tbody>
          {recentOrders.map(order => (
            <tr key={order.id}>
              <td className="py-2 px-4 border-b border-gray-200">{order.id}</td>
              <td className="py-2 px-4 border-b border-gray-200">{order.status}</td>
              <td className="py-2 px-4 border-b border-gray-200">{order.country}</td>
              <td className="py-2 px-4 border-b border-gray-200">{order.customer}</td>
              <td className="py-2 px-4 border-b border-gray-200">{order.date}</td>
              <td className="py-2 px-4 border-b border-gray-200">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RecentOrders;
