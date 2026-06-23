import { NextResponse } from "next/server";

const JOB_KEYWORDS = [
  "contracts administrator",
  "contracts manager",
  "acquisition specialist",
  "subcontracts administrator",
  "pricing analyst",
];

export async function POST(request: Request) {
  try {
    const { keyword, apiKey } = await request.json();
    const searchTerm = keyword || "contract specialist federal";
    const key = apiKey || process.env.USAJOBS_API_KEY;

    if (!key) {
      return NextResponse.json({
        offline: true,
        jobs: getSampleJobs(),
        message:
          "Add a USAJobs API key at developer.usajobs.gov for live job listings. Showing sample roles below.",
      });
    }

    const res = await fetch(
      `https://data.usajobs.gov/api/search?Keyword=${encodeURIComponent(searchTerm)}&ResultsPerPage=10`,
      {
        headers: {
          Host: "data.usajobs.gov",
          "User-Agent": "govcon-academy@example.com",
          "Authorization-Key": key,
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json({
        offline: true,
        jobs: getSampleJobs(),
        message: "USAJobs API unavailable — showing sample roles.",
      });
    }

    const data = await res.json();
    const jobs = (data.SearchResult?.SearchResultItems ?? []).map(
      (item: Record<string, Record<string, unknown>>) => {
        const m = item.MatchedObjectDescriptor ?? {};
        return {
          title: m.PositionTitle,
          agency: (m.OrganizationName as string) ?? "Federal Agency",
          location: (m.PositionLocationDisplay as string) ?? "Various",
          salary: m.PositionRemuneration,
          url: m.PositionURI,
          qualifications: m.QualificationSummary,
        };
      }
    );

    return NextResponse.json({ jobs, suggestedKeywords: JOB_KEYWORDS });
  } catch (error) {
    console.error("USAJobs error:", error);
    return NextResponse.json({ offline: true, jobs: getSampleJobs() });
  }
}

function getSampleJobs() {
  return [
    {
      title: "Contract Specialist",
      agency: "Department of Veterans Affairs",
      location: "Washington, DC",
      salary: "$95,000 - $123,000",
      url: "https://www.usajobs.gov",
      qualifications: "GS-1102 series. Experience in federal contract administration.",
    },
    {
      title: "Contracts Manager",
      agency: "Department of Defense",
      location: "Remote/Telework",
      salary: "$110,000 - $142,000",
      url: "https://www.usajobs.gov",
      qualifications: "NCMA certification preferred. FAR/DFARS expertise required.",
    },
    {
      title: "Acquisition Program Analyst",
      agency: "General Services Administration",
      location: "Fort Worth, TX",
      salary: "$88,000 - $114,000",
      url: "https://www.usajobs.gov",
      qualifications: "Experience with source selection and proposal evaluation.",
    },
  ];
}
