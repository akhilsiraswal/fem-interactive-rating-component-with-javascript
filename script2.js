let p_tag = document.getElementById("rating_p_tag");
console.log(p_tag);
p_tag.textContent = `You selected ${localStorage.getItem("score")} out of 5`;
