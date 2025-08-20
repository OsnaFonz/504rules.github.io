$(function() {
	$("#templates").load("templates.html", function (response, status, xhr) {
    if (status === "error") {
      console.error("Error loading templates.html:", xhr.status, xhr.statusText);
    } else {
        console.log("templates.html loaded successfully.");
        $(document).trigger("templateLoaderReady");
    }
  });

});
