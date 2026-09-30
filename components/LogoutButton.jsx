'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TombolLogout() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  function handleConfirm() {
    setShowAlert(false);
    router.push('/login');
    router.refresh();
  }

  return (
    <>
      <button
        onClick={() => setShowAlert(true)}
        className="rounded-lg bg-red-700 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-lg"
      >
         Logout
      </button>

      {showAlert && (
        <div className="fixed top-4 left-0 right-0 z-50 flex justify-center">
          <div className="flex items-center gap-4 rounded-xl bg-white px-5 py-4 shadow-2xl border border-slate-200">
            <span className="text-2xl">GAWATT</span>
            <p className="text-sm font-medium text-slate-800">Yakin mau logout?</p>
            <button
              onClick={() => setShowAlert(false)}
              className="rounded-lg border border-slate-300 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-100"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              className="rounded-lg bg-blue-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-blue-700"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </>
  );
}