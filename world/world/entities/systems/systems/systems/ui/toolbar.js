const toolbar = document.getElementById("toolbar");

const tools = [
  { id: "human", label: "Spawn Human" },
  { id: "water", label: "Water" },
  { id: "war", label: "Force War" },
  { id: "meteor", label: "Meteor" }
];

let currentTool = "human";

tools.forEach(t => {
  const div = document.createElement("div");
  div.className = "tool";
  div.innerText = t.label;
  div.onclick = () => currentTool = t.id;
  toolbar.appendChild(div);
});
