// This Js file is connected to HomePage
console.log("This is Home Page");

let allIssues = [];

const loadingSpinner = document.getElementById("loadingSpinner");

const showLoadingSpinner = () => {
  loadingSpinner.classList.remove("hidden");
};
const hideLoadingSpinner = () => {
  loadingSpinner.classList.add("hidden");
};

// all issue loader
const loadAllIssues = async () => {
  showLoadingSpinner();
  const res = await fetch(
    "https://phi-lab-server.vercel.app/api/v1/lab/issues",
  );
  const data = await res.json();
  console.log(data);

  allIssues = data.data;
  //   issueCount.innerText = allIssues.length;
  displayAllIssues(allIssues);
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

    issueCard.onclick = () => loadIssueModal(issue.id);

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

  hideLoadingSpinner();
};

const toggleActiveBtn = () => {
  const allToggleBtn = document.querySelectorAll(".toggleBtn");
  allToggleBtn.forEach((btn) => btn.classList.add("btn-outline"));
};

const issueSwitchBtns = document.getElementById("issue-switch-btns");

const allBtn = document.getElementById("all");
const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");

const issueCount = document.getElementById("issueCount");

issueSwitchBtns.addEventListener("click", (eve) => {
  // console.log(e.target);
  toggleActiveBtn();
  eve.target.classList.remove("btn-outline");

  if (eve.target === allBtn) {
    displayAllIssues(allIssues);
    issueCount.innerText = allIssues.length;
  } else if (eve.target === openBtn) {
    const openIssues = allIssues.filter((issue) => issue.status == "open");

    console.log("open", openIssues);

    issueCount.innerText = openIssues.length;

    displayAllIssues(openIssues);
  } else if (eve.target === closeBtn) {
    const closedIssues = allIssues.filter((issue) => issue.status === "closed");
    issueCount.innerText = closedIssues.length;
    displayAllIssues(closedIssues);
    console.log("open", closedIssues);
  }
});

const modalTitle = document.getElementById("modalTitle");
const modalStatus = document.getElementById("modalStatus");
const modalBadge = document.getElementById("modalBadge");
const modalDescription = document.getElementById("modalDescription");
const modalAssignee = document.getElementById("modalAssignee");
const modalPriority = document.getElementById("modalPriority");
const modalOwned = document.getElementById("modalOwned");
const modalDate = document.getElementById("modalDate");

const loadIssueModal = async (id) => {
  const res = await fetch(
    `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`,
  );
  const data = await res.json();
  console.log(data);

  const modalInfo = data.data;
  //   "data": {
  // "id": 33,
  // "title": "Add bulk operations support",
  // "description": "Allow users to perform bulk actions like delete, update status on multiple items at once.",
  // "status": "open",
  // "labels": [
  // "enhancement"
  // ],
  // "priority": "low",
  // "author": "bulk_barry",
  // "assignee": "",
  // "createdAt": "2024-02-02T10:00:00Z",
  // "updatedAt": "2024-02-02T10:00:00Z"

  modalTitle.innerText = modalInfo.title;
  modalStatus.innerText = modalInfo.status;
  modalStatus.classList.remove("badge-success", "badge-secondary");
  modalInfo.status === "open"
    ? modalStatus.classList.add("badge-success")
    : modalStatus.classList.add("badge-secondary");

  modalDescription.innerText = modalInfo.description;
  modalBadge.innerHTML = `${createBadge(modalInfo.labels)}`;

  modalPriority.innerText = modalInfo.priority.toUpperCase();
  modalPriority.classList.remove("badge-error", "badge-warning", "badge-info");
  modalInfo.priority == "high"
    ? modalPriority.classList.add("badge-error")
    : modalInfo.priority == "medium"
      ? modalPriority.classList.add("badge-warning")
      : modalPriority.classList.add("badge-info");

  modalOwned.innerText = modalInfo.author;
  modalDate.innerText = modalInfo.createdAt;
  modalAssignee.innerText = modalInfo.assignee;

  issueModal.showModal();
};

document.getElementById("search-btn").addEventListener("click", () => {
  const input = document.getElementById("search-input");
  const searchValue = input.value.trim().toLowerCase();
  console.log(searchValue);

  fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")
    .then((res) => res.json())
    .then((data) => {
      const allIssusss = data.data;
      console.log(allIssusss);
      const searchedIssue = allIssusss.filter((issue) =>
        issue.title.toLowerCase().includes(searchValue),
      );
      issueCount.innerText = searchedIssue.length;
      displayAllIssues(searchedIssue);
    });
});

loadAllIssues();
