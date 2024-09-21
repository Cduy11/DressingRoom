export async function fetchData() {
  try {
    const res = await fetch("../data/Data.json");
    return await res.json();
  } catch (error) {
    return { navPills: [], tabPanes: [] };
  }
}
