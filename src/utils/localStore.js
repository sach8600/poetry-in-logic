const KEY = "poetry_collection_v1";

export function loadCollection(){
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error(e);
    return [];
  }
}

export function saveToCollection(item){
  const arr = loadCollection();
  arr.unshift(item);
  localStorage.setItem(KEY, JSON.stringify(arr.slice(0, 50))); // keep latest 50
}

export function removeFromCollection(index){
  const arr = loadCollection();
  arr.splice(index, 1);
  localStorage.setItem(KEY, JSON.stringify(arr));
}
