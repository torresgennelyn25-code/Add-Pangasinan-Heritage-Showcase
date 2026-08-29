import Link from "next/link";
export function Button({children, href="#heritage", variant="primary"}:{children:React.ReactNode;href?:string;variant?:"primary"|"ghost"}) {
  return <Link className={`button button-${variant}`} href={href}>{children}</Link>;
}
