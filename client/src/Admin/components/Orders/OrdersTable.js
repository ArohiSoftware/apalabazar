import React from 'react';

const sharedClasses = {
  primaryButton: 'bg-primary border-[2px] border-gray-600 text-primary-foreground px-4 py-2 rounded-lg flex items-center',
  tableCell: 'p-4 text-left',
  actionButton: 'text-blue-500 px-2',
  editButton: 'text-green-500',
  deleteButton: 'text-red-500 px-2',
};

const OrdersTable = () => {
  return (
    <div className="p-4 bg-white mx-5 my-8 rounded-lg text-card-foreground">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Order List</h1>
        <button className={sharedClasses.primaryButton}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 17l4 4 4-4m-4-5v9" />
          </svg>
          Export all orders
        </button>
      </div>
      <div className="mb-16">
        <input type="text" placeholder="Search here..." className="w-full p-2 border rounded-lg bg-input text-foreground" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border  rounded-lg">
          <thead>
            <tr className="bg-gray-300  text-secondary-foreground">
              <th className={sharedClasses.tableCell}>Product</th>
              <th className={sharedClasses.tableCell}>Order ID</th>
              <th className={sharedClasses.tableCell}>Price</th>
              <th className={sharedClasses.tableCell}>Quantity</th>
              <th className={sharedClasses.tableCell}>Payment</th>
              <th className={sharedClasses.tableCell}>Status</th>
              <th className={sharedClasses.tableCell}>Tracking</th>
              <th className={sharedClasses.tableCell}>Action</th>
            </tr>
          </thead>
          <tbody >
            {[
              {
                product: "Kristin Watson",
                orderId: "#7712309",
                price: "$1,452.50",
                quantity: "1,638",
                payment: "$20",
                status: "Success",
                image: "https://placehold.co/40x40",
              },
              {
                product: "Cameron Williamson",
                orderId: "#7712310",
                price: "$2,300.00",
                quantity: "500",
                payment: "$30",
                status: "Pending",
                image: "https://placehold.co/40x40",
              },
              {
                product: "Jane Cooper",
                orderId: "#7712311",
                price: "$600.00",
                quantity: "100",
                payment: "$10",
                status: "Failed",
                image: "https://placehold.co/40x40",
              },
            ].map((order, index) => (
              <tr key={index} className="border-t hover:bg-gray-100 transition duration-200">
                <td className={sharedClasses.tableCell}>
                  <div className="flex items-center space-x-2">
                    <img src={order.image} alt="product" className="w-10 h-10 rounded-full" />
                    <span>{order.product}</span>
                  </div>
                </td>
                <td className={sharedClasses.tableCell}>{order.orderId}</td>
                <td className={sharedClasses.tableCell}>{order.price}</td>
                <td className={sharedClasses.tableCell}>{order.quantity}</td>
                <td className={sharedClasses.tableCell}>{order.payment}</td>
                <td className={sharedClasses.tableCell}>{order.status}</td>
                <td className={sharedClasses.tableCell}>
                  <button className="bg-accent text-accent-foreground px-2 py-1 rounded">Track</button>
                </td>
                <td className={sharedClasses.tableCell}>
                  <button className={sharedClasses.actionButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.55 4.55a2.5 2.5 0 01-3.6 3.6L11 14.6V10h4zM4 4a2 2 0 100 4 2 2 0 100-4zm0 12a2 2 0 100 4 2 2 0 100-4zm12 4a2 2 0 100 4 2 2 0 100-4zm0-16a2 2 0 100 4 2 2 0 100-4z" />
                    </svg>
                  </button>
                  <button className={sharedClasses.editButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 4.232a1.5 1.5 0 012.122 0l1.768 1.768a1.5 1.5 0 010 2.122l-10 10a1.5 1.5 0 01-.667.384l-5 1.5a.5.5 0 01-.632-.632l1.5-5a1.5 1.5 0 01.384-.667l10-10z" />
                    </svg>
                  </button>
                  <button className={sharedClasses.deleteButton}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.136 21H7.864a2 2 0 01-1.997-1.858L5 7m5-3V3h4v1m4 0H6m13 0a2 2 0 00-2-2h-1a2 2 0 00-2-2h-4a2 2 0 00-2 2H5a2 2 0 00-2 2h16z" />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center mt-12">
        <span className='text-xs'>Showing 3 entries</span>
        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded-lg">1</button>
          <button className="px-3 py-1 border rounded-lg bg-primary text-primary-foreground">2</button>
          <button className="px-3 py-1 border rounded-lg">3</button>
        </div>
      </div>
    </div>
  );
};

export default OrdersTable;
