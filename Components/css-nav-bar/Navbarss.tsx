
"use client";

import { Button, Navbar } from "flowbite-react";

export default function Navbarss() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">E-Commerce</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/about">About</Navbar.Link>
        <Navbar.Link href="/products">Products</Navbar.Link>
        <Navbar.Link href="/policy">Policy</Navbar.Link>
        <Navbar.Link href="/contact">Contact Us</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
