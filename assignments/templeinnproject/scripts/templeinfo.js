let info;
const data = fetch("/scripts/templeinfo.json").then(res => res.json()).then(data => info = data)

