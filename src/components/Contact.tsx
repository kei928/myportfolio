export const Contact = () => {
  const email = "k23088kk@aitech.ac.jp"; 
  return (
    <section id="contact" className="py-20 bg-[#1e1e1e]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-[#d4d4d4] mb-8">Contact</h2>
        <p className="mb-8">ご連絡の際はk23088kk@aitech.ac.jpにお願いします</p>
        <a
          href={`mailto:${email}`}
          className="inline-block bg-[#0e639c] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#007acc] transition-colors"
        >
          Send Mail
        </a>
      </div>
    </section>
  );
};