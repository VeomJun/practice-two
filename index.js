const time = document.getElementById("jsTime");

const headerTime = () => {
  const date = new Date();
  let hours = date.getHours();
  const minutes = date.getMinutes();
  time.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
  }`;
};

headerTime();
setInterval(headerTime, 1000);
