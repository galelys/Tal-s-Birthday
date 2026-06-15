document.addEventListener("DOMContentLoaded",() =>{
    const btn = document.getElementById("hintBtn");

        const hint = document.getElementById("hint");

        btn.addEventListener("click", () => {

            hint.classList.remove("hidden");

            btn.innerText = "No more hints 😘";

            btn.disabled = true;

        });
});