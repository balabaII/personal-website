(() => {
  const addCssStyles = () => {
    const styleLink = document.querySelector("#bootswatch");
    const iconLink = document.querySelector("#icon");

    styleLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.3.3/cerulean/bootstrap.min.css";
    iconLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.11.3/font/bootstrap-icons.min.css";
  };

  document.addEventListener("DOMContentLoaded", () => {
    addCssStyles();
  });
})();
