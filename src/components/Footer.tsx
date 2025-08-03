export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const githubUrl = "https://github.com/kei928";

  return (
    <footer className="py-6 bg-[#252526] border-t border-[#383838]">
      <div className="container mx-auto text-center text-sm text-[#d4d4d4]">
        <p>&copy; {currentYear} Niwa Satoru. All Rights Reserved.</p>
        
      </div>
    </footer>
  );
};
