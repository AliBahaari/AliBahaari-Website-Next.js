import Image from "next/image";
import MeImage from "../public/images/Me.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="w-4/6 flex flex-row items-center gap-16">
      <Image
        src={MeImage}
        width="200px"
        height="200px"
        alt="Ali Bahaari"
        className="rounded-md"
      />

      <div>
        <p className="font-bold text-5xl mb-4">Ali Bahaari</p>
        <p>
          Front-End Developer (React.js) + Python
          <br />
          Technical Analyst (Eliott, MRM and Ichimoku)
        </p>
      </div>
    </div>
  );
}
