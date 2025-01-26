import { IFile } from "../interfaces/fileTree";
import { v4 as uuid } from "uuid";

export const fileStructure: IFile = {
  id: uuid(),
  name: "vs-code-project",
  isFolder: true,
  children: [
    {
      id: uuid(),
      name: "src",
      isFolder: true,
      children: [
        {
          id: uuid(),
          name: "components",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Button.tsx",
              isFolder: false,
              content: `import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button 
      className=\`btn \${className}\`
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;`,
            },
            {
              id: uuid(),
              name: "Sidebar.tsx",
              isFolder: false,
              content: `import React from 'react';

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <nav>
        <ul>
          <li>Explorer</li>
          <li>Search</li>
          <li>Source Control</li>
          <li>Run and Debug</li>
          <li>Extensions</li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;`,
            },
          ],
        },
        {
          id: uuid(),
          name: "pages",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "Home.tsx",
              isFolder: false,
              content: `import React from 'react';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <h1>Welcome to My Project</h1>
      <p>This is the main landing page of the application.</p>
    </div>
  );
};

export default HomePage;`,
            },
            {
              id: uuid(),
              name: "Dashboard.tsx",
              isFolder: false,
              content: `import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h2>Project Dashboard</h2>
      <div className="stats">
        <div>Total Projects: 5</div>
        <div>Active Tasks: 12</div>
      </div>
    </div>
  );
};

export default Dashboard;`,
            },
          ],
        },
        {
          id: uuid(),
          name: "styles",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "global.css",
              isFolder: false,
              content: `body {
  font-family: 'Arial', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
}

.btn {
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
}

.sidebar {
  width: 250px;
  background-color: #333;
  color: white;
}`,
            },
          ],
        },
        {
          id: uuid(),
          name: "utils",
          isFolder: true,
          children: [
            {
              id: uuid(),
              name: "helpers.ts",
              isFolder: false,
              content: `export const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}`,
            },
          ],
        },
        {
          id: uuid(),
          name: "App.tsx",
          isFolder: false,
          content: `import React from 'react';
import Sidebar from './components/Sidebar';
import HomePage from './pages/Home';

const App: React.FC = () => {
  return (
    <div className="app">
      <Sidebar />
      <main>
        <HomePage />
      </main>
    </div>
  );
};

export default App;`,
        },
      ],
    },
    {
      id: uuid(),
      name: "node_modules",
      isFolder: true,
      children: [], // Typically large, so we'll keep it empty
    },
    {
      id: uuid(),
      name: "package.json",
      isFolder: false,
      content: `{
  "name": "vs-code-project",
  "version": "1.0.0",
  "dependencies": {
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "typescript": "^4.4.3"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test"
  }
}`,
    },
    {
      id: uuid(),
      name: "tsconfig.json",
      isFolder: false,
      content: `{
  "compilerOptions": {
    "target": "es5",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}`,
    },
  ],
};
