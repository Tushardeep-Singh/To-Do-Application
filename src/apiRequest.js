// Author: Tushardeep Singh

// Function to fill in the json file
export const apiRequest = async (url = "", optionsObj = {}) => {
  const response = await fetch(url, optionsObj);
  if (!response.ok) throw new Error("Please reload the app.");
};
