# Code Render

**[Code Render](https://coderender.pages.dev/)** is a web application that allows users to edit, preview, and share HTML, CSS, and JavaScript code.

## Technologies Used

- [Vite](https://vite.dev/) - A frontend build tool for the web
- [React Codemirror](https://www.npmjs.com/package/@uiw/react-codemirror) - Code editor component for React
- [Appwrite](https://appwrite.io/) - Backend services for web and mobile apps

## Prerequisites

- Node.js (version 18.x or later)

## Getting Started

1. **Clone the repository**

    ```
    git clone https://github.com/git-yashk/coderender.git
    ```
    ```
    cd coderender
    ```

1. **Install dependencies**

    ```
    npm install
    ```

1. **Create a `.env` file with your Appwrite configuration**

    ```
    VITE_APPWRITE_PROJECT_ID=your_project_id
    VITE_APPWRITE_DATABASE_ID=your_database_id
    VITE_APPWRITE_COLLECTION_ID=your_collection_id
    ```

1. **Start the development server**

    ```
    npm run dev
    ```

1. **Open your browser and navigate to:** [localhost:5173](http://localhost:5173).

---

<br>

> see [coderender database cleanup appwrite function](https://github.com/git-yashk/coderender)

---