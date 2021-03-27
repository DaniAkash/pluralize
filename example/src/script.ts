import { pluralize } from "../../src/index";

let count = 0;

const renderCount = () => {
  const $count = document.querySelector("#count");

  $count.innerText = `${count}`;
};

const renderPluralStrings = () => {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
    <p>
      <pre>pluralize("apple", count)</pre>
      <h3>${count} ${pluralize("apple", count)}</h3>
    </p>

    <p>
      <pre>pluralize("child", count, { pluralSuffix: "ren" })</pre>
      <h3>${count} ${pluralize("child", count, { pluralSuffix: "ren" })}</h3>
    </p>

    <p>
      <pre>pluralize("sheep", count, { pluralTerm: "sheep" })</pre>
      <h3>${count} ${pluralize("sheep", count, { pluralTerm: "sheep" })}</h3>
    </p>
  `;
};

renderCount();
renderPluralStrings();

document.querySelector("#add")?.addEventListener("click", function () {
  count++;
  renderCount();
  renderPluralStrings();
});

document.querySelector("#sub")?.addEventListener("click", function () {
  count--;
  renderCount();
  renderPluralStrings();
});
