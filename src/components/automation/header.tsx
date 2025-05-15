import React from "react";
import {
  Button,
  Typography,
} from "@material-tailwind/react";
import ThemeProvider from "../theme-provider";
import Navbar from "../navbar";

export function Header() {
  return (
    <ThemeProvider>
      <Navbar />
      <header className="h-screen min-h-screen w-screen bg-white">
        <div className="relative h-screen flex items-center justify-center text-center bg-cover bg-center" style={{backgroundImage: `url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1920')`}}>
          <span className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></span>
          <div className="container mx-auto px-4 z-10">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 !leading-tight lg:text-7xl"
            >
              Automate Your Business<br />Scale Your Success
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 md:w-10/12 lg:w-7/12 mx-auto"
            >
              We help businesses streamline their operations through intelligent automation solutions. Transform your workflow, reduce costs, and boost productivity.
            </Typography>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size="lg" color="white">
                Get Started
              </Button>
              <Button size="lg" variant="outlined" color="white">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </header>
    </ThemeProvider>
  );
}

export default Header;