"use client";
import React from "react";
import { NextUIProvider } from "@nextui-org/system";
import Loading from "@/app/(user)/loading";
import Error from "@/app/(user)/error";
import { Suspense } from "react";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
function AppProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextUIProvider>
      <ErrorBoundary errorComponent={Error}>
        <Suspense fallback={<Loading />}>{children}</Suspense>
      </ErrorBoundary>
    </NextUIProvider>
  );
}

export default AppProvider;
