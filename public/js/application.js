const container = document.querySelector(".post-container");

// console.log(container);

//! Добавить оценки по нажатию на кнопку

container.addEventListener("click", async (e) => {
  e.preventDefault();

  if (e.target.classList.contains("vote-button")) {
    const button = e.target;

    const id = button.dataset.btnid;
    // console.log(id);

    try {
      const response = await fetch(`/posts/${id}/vote`, {
        method: "POST",
      });

      const result = await response.json();

      const getElementPoint =
        button.parentNode.parentNode.querySelector(".points");

      getElementPoint.innerText = result.votes;

      console.log(getElementPoint.innerText);
    } catch (e) {
      console.log(e);
    }
    button.style.color = "blue";
  }

  //!Удалить пост

  if (e.target.classList.contains("delete")) {
    const getLinkElement = e.target;

    const { href } = getLinkElement;

    try {
     await fetch(href, {
        method: "DELETE",
     });

    } catch (e) {
      console.log(e);
    }
    getLinkElement.parentNode.parentNode.remove();
  }
});
