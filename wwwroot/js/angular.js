// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
var app = angular.module("app", []);
var imgs = [
  {
    url: "/images/acid-green.jpg",
    name: "acid green",
  },
  {
    url: "/images/aero-blue.jpg",
    name: "aero blue",
  },
  {
    url: "/images/amber.jpg",
    name: "amber",
  },
  {
    url: "/images/antique-ruby.jpg",
    name: "antique ruby",
  },
  {
    url: "/images/bistre.png",
    name: "bistre",
  },
  {
    url: "/images/cadet-blue.jpg",
    name: "cadet blue",
  },
  {
    url: "/images/cool-grey.jpg",
    name: "cool grey",
  },
  {
    url: "/images/crimson.jpg",
    name: "crimson",
  },
  {
    url: "/images/dark-coffee.jpg",
    name: "dark coffee",
  },
  {
    url: "/images/black-coffee.png",
    name: "black coffee",
  },
];
app.controller("imgsCntrl", function ($scope) {
  $scope.imgsList = imgs;
  $scope.search = function () {
    var searchInput = document.getElementById("searchBar").value;
    console.log("Searching:", searchInput);
    if (!searchInput) {
      $scope.imgsList = imgs;
    } else {
      $scope.imgsList = imgs.filter((img) => img.name.includes(searchInput));
    }
  };
});
