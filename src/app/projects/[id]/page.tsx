import ProjectDetail from "@/components/ProjectDetail";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SparklesCore } from "@/components/ui/sparkles";

/**
 * 프로젝트 상세 페이지
 *
 * Next.js App Router와 React Query, Zustand 통합 예시:
 *
 * 1. 동적 라우팅:
 *    - [id] 폴더를 사용한 동적 라우팅 구현
 *    - params를 통해 URL 파라미터 접근
 *
 * 2. 데이터 흐름:
 *    - URL 파라미터 -> ProjectDetail 컴포넌트 -> useProject 훅
 *    -> Zustand 스토어 확인 -> React Query 데이터 요청
 *
 * 3. 장점:
 *    - URL을 통한 직접 접근 지원
 *    - 컴포넌트 간 책임 분리
 *    - SEO 최적화 가능 (Next.js 서버 컴포넌트 활용 시)
 */
export default function ProjectPage({ params }: { params: { id: string } }) {
  return (
    <div className="relative flex flex-col justify-between min-h-screen w-full">
      <div>
        <Header />
        {/* 
            ProjectDetail 컴포넌트에 id 전달
            - URL의 문자열 id를 숫자로 변환하여 전달
            - ProjectDetail 내부에서 React Query와 Zustand를 사용하여 데이터 처리
        */}
        <ProjectDetail id={parseInt(params.id)} />
        <div className="w-full absolute inset-0 -z-10">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
