# Company Directory Web

A responsive and interactive **Company Directory Web Application** built using **React 19**, **Vite**, and **Tailwind CSS v4**.  
This app allows users to browse, search, filter, and sort company data with smooth pagination and dynamic UI updates.

## Features
- **Company Listing** – Displays a list of all companies with key details such as name, location, and industry.  
- **Search Functionality** – Instantly filter companies by name, location, or industry.  
- **Advanced Filters** – Filter by specific **location** or **industry** dropdowns.  
- **Sorting** – Sort company names in ascending or descending order.  
- **Pagination** – Clean page navigation with total pages dynamically calculated.  
- **Loading & Error Handling** – Shows loader while fetching data and error messages when something goes wrong.  
- **Responsive Design** – Optimized for all screen sizes (desktop, tablet, and mobile).  
- **Modern UI** – Built using Tailwind CSS and icons from `react-icons`.

## Folder Structure
```
src/
├── components/
│   ├── Header.jsx
│   ├── Filters.jsx
│   ├── CompanyCard.jsx
│   ├── CompanyTable.jsx
│   ├── Pagination.jsx
│   └── Loader.jsx
├── pages/
│   └── Home.jsx
├── App.jsx
├── main.jsx
└── index.css

```
## Tech Stack
React 19, Tailwind CSS v4, Vite

## Key Functionalities Explained

### Filtering Logic
The app filters companies by:
- Search term (matches name, industry, or location)
- Selected location
- Selected industry

Filtering also automatically **resets the current page to 1** for accurate results.

### Pagination
Pagination dynamically adjusts based on filtered results:
```js
const totalPages = Math.ceil(filteredCompanies.length / itemsPerPage);
```

## Setup Instructions
1. Clone the repo: `https://github.com/bhagiradhijayaram/Companies-Directory.git`
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`

## Author
Jayaram Bhagheeradhi

## Webiste Screens

<img width="1920" height="1177" alt="image1" src="https://github.com/user-attachments/assets/a7b716ff-b4fe-47d1-bb0c-e838aaf80658" />

<img width="1920" height="1062" alt="image5" src="https://github.com/user-attachments/assets/1e067f6c-669b-4e04-9a46-4a7ef62ac6a5" />

<img width="1920" height="1203" alt="image7" src="https://github.com/user-attachments/assets/13da530f-6f1e-48a5-bd74-0b2b3af37d97" />

<img width="1920" height="1062" alt="image8" src="https://github.com/user-attachments/assets/07f10214-30a8-4788-85d6-9d6b891e7d54" />

<img width="1920" height="1062" alt="image6" src="https://github.com/user-attachments/assets/e404f778-150d-4b1a-95de-5b15d6485022" />

<img width="513" height="828" alt="image2" src="https://github.com/user-attachments/assets/57b3bb3f-6fe0-41b2-92c1-5f6e22d35b5b" />

<img width="602" height="803" alt="image4" src="https://github.com/user-attachments/assets/1ce94fff-e697-4e70-b858-af6f701689fe" />







