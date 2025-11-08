export function heightCmToMeters(heightCm){
  const n = parseFloat(heightCm);
  if (isNaN(n)) return 'Unknown';
  return (n/100).toFixed(2) + ' m';
}

export function formatDateIsoToDDMMYYYY(iso){
  try {
    const d = new Date(iso);
    if (isNaN(d.getTime())) return 'Unknown';
    const dd = String(d.getDate()).padStart(2,'0');
    const mm = String(d.getMonth()+1).padStart(2,'0');
    const yyyy = d.getFullYear();
    return `${dd}-${mm}-${yyyy}`;
  } catch { return 'Unknown'; }
}
