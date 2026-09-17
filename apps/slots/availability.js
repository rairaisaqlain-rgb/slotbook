export function nextSlots(from, count = 6) {
  const out = [];
  const d = new Date(from);
  d.setMinutes(0, 0, 0);
  d.setHours(d.getHours() + 1);
  while (out.length < count) {
    if (d.getHours() >= 9 && d.getHours() <= 16) {
      out.push({ iso: d.toISOString(), label: d.toLocaleString('en-US') });
    }
    d.setMinutes(d.getMinutes() + 30);
  }
  return out;
}
