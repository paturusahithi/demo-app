import UserRegistration from "./src/components/user-registration";
import React from 'react';
export const router = createBrowserRouter([
    {
      path: "/sign",
      element: <UserRegistration />,
    },
  ]);

function createBrowserRouter(arg0: unknown) {
    throw new Error("Function not implemented.");
}
