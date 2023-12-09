const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright {currentYear} ZsMWebDev</p>
    </footer>
  );
};

export default Footer;
