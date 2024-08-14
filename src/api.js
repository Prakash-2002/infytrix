import axios from 'axios';

// Mock API URL (Replace with your actual API endpoint)
const API_URL = 'https://mockapi.example.com/sales';

// Fetch sales data for today
/*
export const fetchTodaysSales = async () => {
  try {
    const response = await axios.get(`${API_URL}/today`);
    console.log('API Response:', response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error("Error fetching today's sales data:", error);
    alert("Failed to fetch today's sales data. Please try again later.");
    return [];
  }
};

// Fetch sales data for a specific date
export const fetchSalesByDate = async (date) => {
  try {
    const response = await axios.get(`${API_URL}?date=${date}`);
    console.log(`API Response for ${date}:`, response.data); // Log the response data
    return response.data;
  } catch (error) {
    console.error(`Error fetching sales data for ${date}:`, error);
    alert(`Failed to fetch sales data for ${date}. Please try again later.`);
    return [];
  }
};*/
export const fetchTodaysSales = async () => {
    return [
      { product: 'Product 1', category: 'Category A', quantity: 10, salesAmount: 100 },
      { product: 'Product 2', category: 'Category A', quantity: 15, salesAmount: 150 },
      { product: 'Product 3', category: 'Category B', quantity: 7, salesAmount: 70 },
      { product: 'Product 4', category: 'Category B', quantity: 20, salesAmount: 200 },
      { product: 'Product 5', category: 'Category C', quantity: 5, salesAmount: 50 },
      { product: 'Product 6', category: 'Category C', quantity: 9, salesAmount: 90 },
      { product: 'Product 7', category: 'Category A', quantity: 12, salesAmount: 120 },
      { product: 'Product 8', category: 'Category D', quantity: 18, salesAmount: 180 },
      { product: 'Product 9', category: 'Category D', quantity: 6, salesAmount: 60 },
      { product: 'Product 10', category: 'Category B', quantity: 8, salesAmount: 80 },
      { product: 'Product 11', category: 'Category A', quantity: 14, salesAmount: 140 },
      { product: 'Product 12', category: 'Category C', quantity: 11, salesAmount: 110 },
      { product: 'Product 13', category: 'Category B', quantity: 13, salesAmount: 130 },
      { product: 'Product 14', category: 'Category D', quantity: 4, salesAmount: 40 },
      { product: 'Product 15', category: 'Category A', quantity: 3, salesAmount: 30 },
    ];
  };
  
  // Mock data for sales comparison between two dates
  export const fetchSalesByDate = async (date) => {
    const dataByDate = {
      '2024-08-01': [
        { product: 'Product 1', category: 'Category A', salesAmount: 110 },
        { product: 'Product 2', category: 'Category A', salesAmount: 140 },
        { product: 'Product 3', category: 'Category B', salesAmount: 75 },
        { product: 'Product 4', category: 'Category B', salesAmount: 210 },
        { product: 'Product 5', category: 'Category C', salesAmount: 55 },
        { product: 'Product 6', category: 'Category C', salesAmount: 95 },
        { product: 'Product 7', category: 'Category A', salesAmount: 125 },
        { product: 'Product 8', category: 'Category D', salesAmount: 185 },
        { product: 'Product 9', category: 'Category D', salesAmount: 65 },
        { product: 'Product 10', category: 'Category B', salesAmount: 85 },
        { product: 'Product 11', category: 'Category A', salesAmount: 135 },
        { product: 'Product 12', category: 'Category C', salesAmount: 115 },
        { product: 'Product 13', category: 'Category B', salesAmount: 145 },
        { product: 'Product 14', category: 'Category D', salesAmount: 45 },
        { product: 'Product 15', category: 'Category A', salesAmount: 35 },
      ],
      '2024-08-02': [
        { product: 'Product 1', category: 'Category A', salesAmount: 120 },
        { product: 'Product 2', category: 'Category A', salesAmount: 160 },
        { product: 'Product 3', category: 'Category B', salesAmount: 80 },
        { product: 'Product 4', category: 'Category B', salesAmount: 220 },
        { product: 'Product 5', category: 'Category C', salesAmount: 60 },
        { product: 'Product 6', category: 'Category C', salesAmount: 100 },
        { product: 'Product 7', category: 'Category A', salesAmount: 130 },
        { product: 'Product 8', category: 'Category D', salesAmount: 190 },
        { product: 'Product 9', category: 'Category D', salesAmount: 70 },
        { product: 'Product 10', category: 'Category B', salesAmount: 90 },
        { product: 'Product 11', category: 'Category A', salesAmount: 140 },
        { product: 'Product 12', category: 'Category C', salesAmount: 120 },
        { product: 'Product 13', category: 'Category B', salesAmount: 150 },
        { product: 'Product 14', category: 'Category D', salesAmount: 50 },
        { product: 'Product 15', category: 'Category A', salesAmount: 40 },
      ],
    };
  
    return dataByDate[date] || [];
  };
