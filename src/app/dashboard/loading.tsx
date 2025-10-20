export default function LoadingDashboard() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="animate-pulse grid gap-6 md:grid-cols-4">
          <div className="h-24 rounded-2xl bg-emerald-50/60" />
          <div className="h-24 rounded-2xl bg-emerald-50/60" />
          <div className="h-24 rounded-2xl bg-emerald-50/60" />
          <div className="h-24 rounded-2xl bg-emerald-50/60" />
        </div>
        <div className="mt-8 animate-pulse grid gap-6 md:grid-cols-2">
          <div className="h-64 rounded-2xl bg-emerald-50/60" />
          <div className="h-64 rounded-2xl bg-emerald-50/60" />
        </div>
      </div>
    </div>
  );
}
