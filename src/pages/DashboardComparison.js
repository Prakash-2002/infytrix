import React, { useEffect, useState } from 'react';
import { fetchSalesByDate } from '../api';
import DatePicker from '../components/DatePicker';
import SalesChart from '../components/SalesChart';
import SalesTable from '../components/SalesTable';

const DashboardComparison = () => {
  const [date1, setDate1] = useState('');
  const [date2, setDate2] = useState('');
  const [salesData1, setSalesData1] = useState([]);
  const [salesData2, setSalesData2] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (date1 && date2) {
      setLoading(true);
      Promise.all([fetchSalesByDate(date1), fetchSalesByDate(date2)])
        .then(([data1, data2]) => {
          setSalesData1(data1);
          setSalesData2(data2);
          setLoading(false);
        })
        .catch(error => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [date1, date2]);

  const columns = [
    { headerName: 'Product Name', field: 'product' },
    { headerName: 'Category', field: 'category' },
    { headerName: 'Date 1 Sales', field: 'salesAmount1' },
    { headerName: 'Date 2 Sales', field: 'salesAmount2' },
    { headerName: 'Difference', field: 'difference' },
  ];

  const comparisonData = salesData1.map((item, index) => ({
    product: item.product,
    category: item.category,
    salesAmount1: item.salesAmount,
    salesAmount2: salesData2[index]?.salesAmount || 0,
    difference: (salesData2[index]?.salesAmount || 0) - item.salesAmount,
  }));

  const productComparisonData = comparisonData.map(item => ({
    name: item.product,
    sales: item.difference,
  }));

  return (
    <div>
      <h1>Sales Comparison</h1>
      <DatePicker label="Select Date 1:" selectedDate={date1} handleDateChange={setDate1} />
      <DatePicker label="Select Date 2:" selectedDate={date2} handleDateChange={setDate2} />
      {loading ? <p>Loading...</p> : (
        <>
          <SalesChart data={productComparisonData} title="Product Sales Comparison" />
          <SalesTable rowData={comparisonData} columns={columns} />
        </>
      )}
    </div>
  );
};

export default DashboardComparison;
