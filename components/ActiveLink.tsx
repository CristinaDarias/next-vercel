import { FC, CSSProperties } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface IActiveLinkProps {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink: FC<IActiveLinkProps> = ({text, href}) => {

  const { asPath }= useRouter();

  return (
    <Link href={href} legacyBehavior>
      <a style={ asPath === href ? style : undefined}>{text}</a>
    </Link>
  )
}
