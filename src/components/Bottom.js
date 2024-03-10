import React from "react";
import Link from "next/link";

const Bottom = () => {
  return (
    <>
      <div className="lg:pl-72">
        <footer className="p-4 w-full bg-white border-t flex flex-col lg:flex-row items-start lg:items-center">
          <div className="text-xs text-muted-foreground py-2 px-4 lg:flex-1">
            © NOWME All rights reserved.
          </div>
          <Link
            className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 text-muted-foreground text-xs"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 text-muted-foreground text-xs"
            href="/faqs"
          >
            Faqs
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 text-muted-foreground text-xs"
            href="/terms"
          >
            Terms of Service
          </Link>
          <Link
            className="inline-flex items-center justify-center rounded-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 underline-offset-4 hover:underline h-10 px-4 py-2 text-muted-foreground text-xs"
            href="/privacy"
          >
            Privacy Policy
          </Link>
        </footer>
      </div>
    </>
  );
};

export default Bottom;
