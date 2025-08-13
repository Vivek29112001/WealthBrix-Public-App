// app/page.jsx
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic"; // ✅ Prevent static pre-render issues

export default function HomeRedirect() {
  redirect("/home");
  return null; // ✅ Prevents hydration mismatch
}
