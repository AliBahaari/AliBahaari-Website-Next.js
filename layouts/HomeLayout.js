import styles from "../styles/HomeLayout.module.css";
import Link from "next/link";

function HomeLayout({ children }) {
  return (
    <div className="flex flex-row min-h-screen">
      <div className={`w-72 ${styles.menuSection}`}>
        <p className="text-2xl font-bold italic">Blueprint</p>

        <div>
          <Link href={"/"}>Home</Link>

          <Link href={"/contact"}>Contact</Link>

          <Link href={"/resume"}>Resume</Link>
        </div>

        <p className="text-xs font-light italic">
          &copy; Copyright 2022 - Ali Bahaari
        </p>
      </div>

      <div className={`flex-1 ${styles.contentSection}`}>{children}</div>
    </div>
  );
}

export default HomeLayout;
