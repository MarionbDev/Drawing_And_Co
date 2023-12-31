import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-[#282e4d] text-white text-xs md:text-sm flex justify-center flex-col items-center py-5 gap-2 mt-10 w-full ">
      <div className="flex flex-col md:flex-row gap-2 items-center">
        <p>Marion BASTON @ 2023 </p>
        <p> - Tous droits réservés.</p>
      </div>
      <div className="flex gap-1">
        {/* <p>Mentions légales | </p> */}
        <Link to="privacy-policy">Politique de confidentialité</Link>
      </div>
    </div>
  );
}
