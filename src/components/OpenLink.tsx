"use client";

import { useRouter } from "next/navigation";
import { PropsWithChildren, ReactNode } from "react";

interface Props extends PropsWithChildren {
  url: string;
  children: ReactNode;
  onClick?: () => void;
}

export function OpenLink({ children, url, onClick }: Props) {
  const router = useRouter();

  const clickHandler = () => {
    if (onClick) {
      onClick();
    }
    router.push(url);
  };

  // cloneElement 대신 div로 감싸서 onClick 이벤트 처리
  return (
    <div onClick={clickHandler} className="cursor-pointer">
      {children}
    </div>
  );
}
