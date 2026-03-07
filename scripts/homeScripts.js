// This Js file is connected to HomePage
console.log("This is Home Page");

// all issue loader
const loadAllIssues = async () => {
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  console.log(data);

  displayAllIssues(data.data);
};

const issueContainer = document.getElementById("issueContainer");

// creating badge

const createBadge = (arr) => {
  const badges = arr.map(
    (item) =>
      `<span class="badge badge-soft badge-warning text-xs rounded-full">${item}</span>`,
  );
  return badges.join(" ");
};

const displayAllIssues = async (allIssues) => {
  issueContainer.innerHTML = "";

  console.log(allIssues);

  allIssues.forEach((issue) => {
    console.log(issue);

    //     "id": 1,
    // "title": "Fix navigation menu on mobile devices",
    // "description": "The navigation menu doesn't collapse properly on mobile devices. Need to fix the responsive behavior.",
    // "status": "open",
    // "labels": [
    // "bug",
    // "help wanted"
    // ],
    // "priority": "high",
    // "author": "john_doe",
    // "assignee": "jane_smith",
    // "createdAt": "2024-01-15T10:30:00Z",
    // "updatedAt": "2024-01-15T10:30:00Z"

    const issueCard = document.createElement("div");
    issueCard.className = `card bg-base-100 shadow-md border-t-4 p-4 ${issue.status == "open" ? "border-green-500" : "border-purple-600"}`;
    issueCard.innerHTML = `
    
    
          <div class="flex justify-between items-start">
            <img src="${issue.status == "open" ? "./assets/Open-Status.png" : "./assets/Closed- Status .png"}" class="w-6 h-6" alt="status" />

            <span class="badge  ${issue.priority == "high" ? "badge-error" : issue.priority == "medium" ? "badge-warning" : "badge-info"} badge-soft text-xs font-medium">
              ${issue.priority.toUpperCase()}
            </span>
          </div>

          <h2 class="font-semibold text-sm mt-3 leading-snug">
            ${issue.title}
          </h2>

          <p class="text-xs text-gray-400 mt-1 line-clamp-2">
            ${issue.description}
          </p>

          <div class="flex flex-wrap gap-1 mt-3">
             ${createBadge(issue.labels)}
          </div>

          <div class="text-xs text-gray-400">
            <div class="mt-4 border-t border-gray-200 space-y-2 pt-3">
              <p>${issue.author}</p>

              <p class="flex items-center gap-1 mt-1">${issue.createdAt}</p>
            </div>
          </div>
    
    `;
    issueContainer.appendChild(issueCard);
  });
};

loadAllIssues();
