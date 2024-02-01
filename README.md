# 1. Jeffs Gaming Website

# 2. Liv Link/Demo Link

# 3. Table of Contents

- [About the Project](#about-the-project)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Setup/Installation](#setupinstallation)
- [Approach](#approach)
- [Status](#status)
- [Credits](#credits)
- [License](#license)
- [Contact](#contact)

# 4. About the Project

# 5. Screenshoots

# 6. Technologies used

#### Routing:-

- react-router-dom

#### State Management: -

1. react-redux
2. reduxjs/toolkit

#### UI:-

1. Shadcn
2. react-icons

#### Data Fetching:-

- Axios

#### Styling

- Tailwindcss

#### Framework

- React.js via Vite and Typescript

# 7. Setup/Installation

## Prerequisites

- Ensure you have Node.js (version 12 or higher) installed on your machine.
- npm (usually comes with Node.js) or Yarn for managing packages.

## clone the Repository

```
git clone https://github.com/Jaomar92/GamingWebsite.git

```

```
cd jeffs-gaming-website
```

```
npm install
```

```
yarn
```

## Configure Environment Variables

Copy the .env.sample file to a new file named .env and update it with your own API keys and other configuration settings:

```
cp .env.sample .env
```

or

- Just rename the file.

- Open the .env file in your text editor and replace the placeholder values with your actual data. For example:

```
VITE_RAWG_API_KEY = Your RAWG.io API Key Here.
```

## Starting the Development Server

```
npm start

# or with yarn

yarn start

```

This will launch at http://localhost:5173/

## Build for Production

To build the application for production, run:

```
npm run build

# or with yarn

yarn build
```

This command compiles the React application into static files in the build directory, ready to be deployed to a production server.

# 8. Approach

### Starting Out

I wanted to create this project to combine my joy in playing games and programming that would hopefully keep me motivated and continue to constantly keep learning. I knew I wanted to use React because I have been learning it and wanted to apply my skills in a real project. My main goal was to keep practicesing and learn how to use gitProjects and write cleaner code.

### Design Decisions

For the design, I wanted something user-friendly and attractive, but I am not a designer. So, I decided to use TailwindCSS for styling because of its utility-first approach, which made it easier for me to style components without being an expert in CSS.

As well as shadcn as it consisted of a lot pre-built components and access to lucid-icons that I could use saving me time and still getting a some what nice UI.

### Project Structure

I tried to keep my project as simple as possible.

- A Components folder for all my re-usable React components
- A Redux folder where my store folder is at to keep my app's state in one place.
- Services folder for the Axios API calls.
- Routes to handle Routing

### Challenges and Goals

Doing data-fetching and using Redux has always been a hard concept for me to grasph and through this project I hope to clear my insecurites and build up my confidence.

I will be tackling concepts Redux Thunk and API calls slowly and document my learning process.

### Future Directions

I hope to late be able to connect to real life data-base like Supabase and include email authentication as well as like a blogging platform so people can write their honest reveiws of the game.

# 9. Status

### Still in development

The personal gaming website is still in active development stage. With no layout design or clear objectives.

### Current focus

- Being able to pull data from the RAWG.io API and see what kind filter games using param-queries.
- project structure layouts.

# 10. Credits

### Online Articles/Documentation used

1. Article Title: [Writing an awesome Readme📄 for your side projects](https://victorbruce82.medium.com/writing-an-awesome-readme-for-your-side-projects-fabd20f96db0)
   Article Author: Victor Bruce-Crabbe
   Date-accessed: Feb-1-2024

# 11. License

This project is currently unlicensed, allowing for unrestricted use as a reference for personal projects.

# 12.Contact

Email: Jeffrey.ar.omar@gmail.com

Website: Not yet. Still havent settled on a design. 😆
