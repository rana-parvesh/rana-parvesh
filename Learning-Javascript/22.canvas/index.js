/*
// learn from anisul islam
var c = document.getElementById("rana");
var ctx = c.getContext("2d");

ctx.lineWidth = 3;
ctx.strokeStyle = "black";
ctx.strokeRect(10, 10, 380, 270); // Corrected strokeRect
ctx.fillStyle = "green";
ctx.fillRect(12, 12, 376, 266);

var centerX = c.width / 2;
var centerY = c.height / 2;
ctx.beginPath();
ctx.arc(centerX, centerY, 80, 0, 2 * Math.PI, false); // Corrected ctx.arc
ctx.fillStyle = "red";
ctx.fill();
ctx.stroke();
*/
const canvas = document.getElementById("bangladeshFlag");
const ctx = canvas.getContext("2d");

// Set dimensions for the canvas
const width = canvas.width;
const height = canvas.height;

// Draw the dark green background
ctx.fillStyle = "#006a4e"; // Dark green color
ctx.fillRect(0, 0, width, height);

// Draw the red circle
ctx.beginPath();
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;

ctx.arc(centerX, centerY, 120, 0, Math.PI * 2, false);
ctx.fillStyle = "#f42a41"; // Red color
ctx.fill();
ctx.closePath();
