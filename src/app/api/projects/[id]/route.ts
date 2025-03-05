import { NextRequest, NextResponse } from "next/server";
import {
  fetchProjectById,
  updateProject,
  deleteProject,
} from "@/lib/api/firebase";

// GET /api/projects/[id] - 단일 프로젝트 가져오기
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const project = await fetchProjectById(id);

    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }

    return NextResponse.json(project);
  } catch (error) {
    console.error(`Error in GET /api/projects/${params.id}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch project" },
      { status: 500 }
    );
  }
}

// PUT /api/projects/[id] - 프로젝트 업데이트하기
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const body = await request.json();

    await updateProject(id, body);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error in PUT /api/projects/${params.id}:`, error);
    return NextResponse.json(
      { error: "Failed to update project" },
      { status: 500 }
    );
  }
}

// DELETE /api/projects/[id] - 프로젝트 삭제하기
export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    await deleteProject(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(`Error in DELETE /api/projects/${params.id}:`, error);
    return NextResponse.json(
      { error: "Failed to delete project" },
      { status: 500 }
    );
  }
}
