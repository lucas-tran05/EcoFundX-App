import React from 'react';

export default function LoginLayout({ children }: { children: React.ReactNode }) {
    return (
        <div style={{ backgroundColor: 'lightblue', minHeight: '100vh' }}>
            <h1>Login Layout</h1>
            {children}
        </div>
    );
}
