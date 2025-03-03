"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

/**
 * React Query 설정 가이드
 *
 * 1. QueryClient 설정:
 *    - QueryClient는 React Query의 모든 캐시와 설정을 관리합니다.
 *    - 앱 전체에서 하나의 인스턴스만 사용하는 것이 일반적입니다.
 *    - useState와 함께 사용하여 클라이언트 컴포넌트에서 인스턴스를 생성합니다.
 *
 * 2. 기본 옵션 설정:
 *    - staleTime: 데이터가 "신선"에서 "오래됨" 상태로 전환되는 시간 (ms)
 *    - gcTime: 사용하지 않는 쿼리가 가비지 컬렉션되기 전까지 유지되는 시간 (ms)
 *    - refetchOnWindowFocus: 창이 포커스될 때 데이터를 다시 가져올지 여부
 *    - retry: 쿼리 실패 시 재시도 횟수
 *
 * 3. Provider 설정:
 *    - QueryClientProvider로 앱을 감싸 모든 컴포넌트에서 React Query 사용 가능
 */
export function Providers({ children }: { children: ReactNode }) {
  // 클라이언트 컴포넌트에서 QueryClient 인스턴스 생성
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 기본 설정
            staleTime: 1000 * 60 * 5, // 5분 동안 데이터는 "신선" 상태 유지
            gcTime: 1000 * 60 * 30, // 30분 동안 미사용 쿼리 캐시 유지 (이전의 cacheTime)
            refetchOnWindowFocus: false, // 창 포커스 시 자동 리페치 비활성화
            retry: 1, // 쿼리 실패 시 1번 재시도
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
