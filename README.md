# Product Management System (CRUD Web App)

This is a simple client-side **CRUD (Create, Read, Update, Delete)** web application for managing products. It allows users to create, edit, delete, and search for product entries using HTML, CSS, and vanilla JavaScript with data stored in the browser's `localStorage`.

## 🚀 Features

- Add product information including price, taxes, ads, discounts, category, and count.
- Auto-calculate the total price dynamically.
- Store data locally using `localStorage` (no backend required).
- Display all entries in a table.
- Edit and delete individual entries.
- "Delete All" option to clear all entries at once.
- Search functionality by product title or category.

## 🛠️ Tech Stack

- **HTML5** – structure
- **CSS3** – styling (responsive and minimal UI)
- **JavaScript (Vanilla)** – application logic
- **LocalStorage** – persistent data

## 📁 File Structure

```
├── index.html / page.html     # Main HTML page
├── style .css                 # Stylesheet (note the space in name)
├── main.js                    # JavaScript logic
├── README.md                  # Project documentation
```

## 📸 UI Preview

> The UI includes input fields for all product attributes, a search bar, and a results table. Products are displayed in rows with options to update or delete. Colorful buttons and real-time feedback improve usability.

## 🔧 How to Run

1. Clone or download this repository.
2. Ensure the files are named correctly:
   - Rename `style .css` to `style.css` (remove the space).
   - Update the reference in `page.html`:
     ```html
     <link rel="stylesheet" href="style.css">
     ```
3. Open `page.html` in your browser.

> **Note**: No server setup is required as this is a fully client-side application.

## 📝 To Do / Improvements

- Add form validation
- Use a modal for editing entries
- Add product images
- Export/import product list
- Responsive design for mobile screens

## 📄 License

This project is open source and free to use.
