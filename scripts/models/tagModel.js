const getTagDOM = (tag, type) => {
    const tagLine = document.createElement("li");
    tagLine.setAttribute("class", "tag-list__item__container");
    switch (type) {
    case "ingredients-list":
        tagLine.classList.add("tag-list__item__container--blue");
        break;
    case "appliances-list":
        tagLine.classList.add("tag-list__item__container--green");
        break;
    case "ustensils-list":
        tagLine.classList.add("tag-list__item__container--orange");
        break;
    default:
        break;
    }
    const tagText = document.createElement("span");
    tagText.setAttribute("class", "tag-list__item");
    tagText.textContent = tag;

    const tagCloseBtn = document.createElement("btn");
    tagCloseBtn.setAttribute("class", "tag-list__item__close-btn");

    const tagCloseBtnIcon = document.createElement("span");
    tagCloseBtnIcon.setAttribute("class", "far fa-circle-xmark fa-lg");

    const tagCloseBtnLabel = document.createElement("span");
    tagCloseBtnLabel.setAttribute("class", "sr-only");
    tagCloseBtnLabel.textContent = "Supprimer le tag";

    tagCloseBtn.append(tagCloseBtnIcon, tagCloseBtnLabel);
    tagLine.append(tagText, tagCloseBtn);

    return tagLine;
};

export {getTagDOM};