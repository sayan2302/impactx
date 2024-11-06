import Link from "next/link";

export default function Home() {
  return (
      <div className="flex items-center justify-center pt-[100px]">
        <Link href="/household-details" className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 transition duration-200">
          Go to Household Details
        </Link>
      </div >
  );
}
