(() => {
  const addCssStyles = () => {
    const styleLink = document.querySelector("#bootswatch");
    const iconLink = document.querySelector("#icon");

    styleLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/bootswatch/5.3.3/vapor/bootstrap.min.css";
    iconLink.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css";
  };

  document.addEventListener("DOMContentLoaded", () => {
    addCssStyles();
  });
})();
