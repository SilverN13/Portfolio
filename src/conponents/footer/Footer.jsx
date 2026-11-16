import "./footer.css";
function Footer() {
  return (
    <footer className="flex">
      <ul className="flex">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Articles</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Speaking</a>
        </li>
      </ul>
      <p>© {new Date().getFullYear()} Mohammed Amin. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
