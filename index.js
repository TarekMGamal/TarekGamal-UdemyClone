let coursesSection = document.querySelector(".courses");
let formInput = document.querySelector("#search-bar-form");
let courses;

let addCourse = (course) => {
  let courseDiv = document.createElement("div");
  let anchorTag = document.createElement("a");
  let courseImage = document.createElement("img");
  let title = document.createElement("h3");
  let author = document.createElement("div");
  let ratingAndPeople = document.createElement("div");
  let price = document.createElement("div");

  courseDiv.setAttribute("class", "course");
  courseImage.setAttribute("src", course.image);
  courseImage.setAttribute("class", "course-img");
  courseImage.setAttribute("alt", "course-image");

  title.innerHTML = course.title;
  author.innerHTML = course.author;
  ratingAndPeople.innerHTML = course.rating + " / 5 (" + course.people + ")";
  price.innerHTML = course.price;

  anchorTag.appendChild(courseImage);
  anchorTag.appendChild(title);
  anchorTag.appendChild(author);
  anchorTag.appendChild(ratingAndPeople);
  anchorTag.appendChild(price);
  courseDiv.appendChild(anchorTag);
  coursesSection.appendChild(courseDiv);
};

let getCourses = async () => {
  let res = await fetch("http://localhost:3000/python");
  courses = await res.json();

  coursesSection.innerHTML = "";
  for (let curCourse of courses) {
    addCourse(curCourse);
  }

  return courses;
};
// getCourses();

let coursesFilter = async (event) => {
  event.preventDefault();

  coursesSection.innerHTML = "";

  let input = document.querySelector("#search-bar").value.trim().toLowerCase();

  for (let course of courses) {
    let courseTitle = course.title.toLowerCase();

    if (courseTitle.includes(input)) {
      addCourse(course);
    }
  }

  return courses;
};

formInput.addEventListener("submit", coursesFilter);
// window.addEventListener("DOMContentLoaded", getCourses);
