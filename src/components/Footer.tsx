import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-walterWhite p-5 flex flex-col items-center">
      <Link href="/">
        <Image src="/logo.png" alt="Full Stack Week" width={133} height={23} />
      </Link>
      <p className="text-sm font-medium text-primaryDarker mt-1">
        Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
