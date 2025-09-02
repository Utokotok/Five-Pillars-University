const educatorsStaffLink = document.getElementById("educators-staff-link");
const programsLink = document.getElementById("programs-link");
const facilitiesLink = document.getElementById("facilities-link");

educatorsStaffLink.addEventListener("click", (event) => {
  let academicMentorContainer = document.getElementsByClassName(
    "mentor-characteristics"
  )[2];
  event.preventDefault();

  academicMentorContainer.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

programsLink.addEventListener("click", (event) => {
  event.preventDefault();
  let programsContainer = document.getElementsByClassName("program-title")[0];

  programsContainer.scrollIntoView({
    behavior: "smooth",
    block: "center",
  });
});

facilitiesLink.addEventListener("click", (event) => {
  event.preventDefault();
  let facilitiesContainer = document.querySelectorAll(
    ".content-title > span:first-of-type"
  )[0];

  facilitiesContainer.scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
});
