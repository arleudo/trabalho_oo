import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary/90 text-white py-4 mt-auto fixed bottom-0 left-0 right-0">
            <div className="max-w-[1200px] mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} Hi-Food. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
