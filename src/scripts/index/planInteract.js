import defaultPlans from "../../mock/plans.json";

const planSelector = [...document.querySelectorAll("#plan-selector button")];
const YELLOW_BG = "bg-[#D1A133]";

planSelector.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains(YELLOW_BG)) return;

    if (!e.target.classList.contains(YELLOW_BG)) {
      const yellowBgBtn = planSelector.find((e) =>
        e.classList.contains(YELLOW_BG)
      );
      yellowBgBtn.classList.remove(YELLOW_BG);
      e.target.classList.add(YELLOW_BG);

      const selection = e.target.textContent.toLowerCase();
      const actualPrices = [
        ...document
          .querySelector("#plan-selector")
          .parentElement.parentElement.querySelectorAll(".tracking-tight"),
      ];
      actualPrices[0].textContent = defaultPlans[selection]["starter"];
      actualPrices[1].textContent = defaultPlans[selection]["advanced"];
      actualPrices[2].textContent = defaultPlans[selection]["fitness"];
    }
  });
});