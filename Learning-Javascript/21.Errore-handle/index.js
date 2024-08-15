// Errore Handaling -> try. catch , finaly , thow
//try ... catch handale run time erroe (program which is erroe)
//Errore object
// the finaly statement -> excuse code , after try and cant

try {
  // here is the main code
  alert("hellow everyone");
  alert(rana);
  alert("bye everyone");
} catch (err) {
  //handle erroe
  console.log("catch block");
  console.log(err.name);
  console.log(err.message);
} finally {
  alert("bye everyone");
}
