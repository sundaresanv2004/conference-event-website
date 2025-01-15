'use client';

import Image from 'next/image';
import { errorImage } from "@/public/images";
import { Button } from "@/components/ui/button";
import React from "react";

interface ErrorPageProps {
    reset: () => void;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ reset }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-foreground">
            <div className="relative w-48 h-48 mb-8">
                <Image
                    src={errorImage}
                    alt="errorImage"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Oops! Something went wrong</h1>
            <p className="text-center mb-6 max-w-md">
                We apologize for the inconvenience. Our team has been notified and is working on fixing the issue.
            </p>
            <p className="text-center mb-6 max-w-md text-muted-foreground">
                You can try refreshing the page or come back later.
            </p>
            <Button onClick={reset} variant="default">
                Refresh Page
            </Button>
        </div>
    );
};

export default ErrorPage;

