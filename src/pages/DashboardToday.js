import React, { useEffect, useState } from 'react';
import { fetchTodaysSales } from '../api';
import SalesChart from '../components/SalesChart';
import SalesTable from '../components/SalesTable';

const DashboardToday = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTodaysSales().then(data => {
      setSalesData(data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const productLevelData = salesData.map(item => ({
    name: item.product,
    sales: item.salesAmount,
  }));

  const columns = [
    { headerName: 'Product Name', field: 'product' },
    { headerName: 'Category', field: 'category' },
    { headerName: 'Quantity Sold', field: 'quantity' },
    { headerName: 'Sales Amount', field: 'salesAmount' },
  ];

  return (
    <div>
      <h1>Today's Sales</h1>
      <SalesChart data={productLevelData} title="Product Sales" />
      <SalesTable rowData={salesData} columns={columns} />
    </div>
  );
};

export default DashboardToday;
