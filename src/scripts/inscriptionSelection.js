import defaultPlans from "../mock/plans.json";

const enterprisePlanInput = [...document.getElementsByName("list-radio1")];
const planInput = [...document.getElementsByName("list-radio2")];
const enterpriseNameInput = document.querySelector("div#enterprise-name");
const priceValues = [...document.querySelectorAll(".prices")];

enterprisePlanInput.map((element) => {
  element.addEventListener("change", (e) => {
    if (e.target.id === "enterprise-plan-selector") {
      enterpriseNameInput.classList.remove("hidden");
      planInput[0].nextElementSibling.lastElementChild.textContent =
        "$" + defaultPlans["enterprise"]["starter"];
      planInput[1].nextElementSibling.lastElementChild.textContent =
        "$" + defaultPlans["enterprise"]["advanced"];
      planInput[2].nextElementSibling.lastElementChild.textContent =
        "$" + defaultPlans["enterprise"]["fitness"];
    } else {
      enterpriseNameInput.classList.add("hidden");
      planInput[0].nextElementSibling.lastElementChild.textContent =
        "$" + defaultPlans["personal"]["starter"];
      planInput[1].nextElementSibling.lastElementChild.textContent =
        "$" + defaultPlans["personal"]["advanced"];
      planInput[2].nextElementSibling.lastElementChild.textContent =
        "$" + defaultPlans["personal"]["fitness"];
    }
  });
});

priceValues.map((element) =>
  element.addEventListener("change", (e) => {
    const checked = [...document.querySelectorAll(".prices:checked")];
    const listedItems = document.querySelector("#items");
    const elementPrices = checked.map((i) => {
      return {
        id: i.nextElementSibling.firstElementChild.textContent,
        price:
          parseInt(
            i.nextElementSibling.lastElementChild?.textContent.replace(
              "$",
              ""
            )
          ) || 0,
      };
    });
    const prices = elementPrices.map((i) => i.price);
    const totalPrice = prices.reduce((a, b) => a + b);

    document
      .querySelectorAll("#payment")
      .forEach((e) => (e.textContent = "$" + totalPrice));

    const listOfPurchase = elementPrices.map((e) => {
      const listItem =
        '<div class="flex justify-between"><h3 class="text-lg mb-4 font-normal">' +
        e.id +
        "</h3>";
      const listItemPrice = e.price
        ? '<span class="text-lg font-semibold text-gray-500">$' +
        e.price +
        "</span></div>"
        : "</div>";

      return listItem + listItemPrice;
    });
    listedItems.innerHTML = listOfPurchase.join("");
  })
);