import { NextRequest, NextResponse } from "next/server";
import { fetchProjects, addProject } from "@/lib/api/firebase";

// GET /api/projects - 프로젝트 목록 가져오기
export async function GET(request: NextRequest) {
  try {
    console.log("API request URL:", request.url);

    const searchParams = request.nextUrl.searchParams;
    console.log(
      "API searchParams:",
      Object.fromEntries(searchParams.entries())
    );

    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "9");

    // ids 파라미터가 있는지 확인 (예: ids=1,2,3)
    const idsParam = searchParams.get("ids");
    let ids: Array<string | number> | undefined = undefined;

    if (idsParam) {
      // 쉼표로 구분된 ID 문자열을 배열로 변환
      ids = idsParam
        .split(",")
        .map((id) => id.trim())
        .filter((id) => id !== ""); // 빈 문자열 필터링
      console.log("API parsed IDs:", ids);
    }

    console.log("Fetching projects with IDs:", ids);
    const projects = await fetchProjects(page, limit, ids);
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error in GET /api/projects:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}

// POST /api/projects - 새 프로젝트 추가하기
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 필수 필드 검증
    if (!body.title || !body.description || !body.image) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const projectId = await addProject(body);
    return NextResponse.json({ id: projectId, success: true }, { status: 201 });
  } catch (error) {
    console.error("Error in POST /api/projects:", error);
    return NextResponse.json(
      { error: "Failed to create project" },
      { status: 500 }
    );
  }
}
