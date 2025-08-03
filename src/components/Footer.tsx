export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 bg-gray-800 border-t border-gray-700">
      <div className="container mx-auto text-center text-sm text-gray-400">
        <p>&copy; {currentYear} NiwaSatoru. All Rights Reserved.</p>
      </div>
    </footer>
  );
};