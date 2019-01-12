function runTableQuery() {
    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.ajax({ url: "/api/currentRes", method: "GET" })
      .then(function(currentRes) {

        // Here we then log the tableData to console, where it will show up as an object.
        console.log(currentRes);
        console.log("------------------------------------");

        // Loop through and display each of the customers
        for (var i = 0; i < currentRes.length; i++) {

          // Get a reference to the tableList element and populate it with tables
          var tableList = $("#tableList");

          // Then display the fields in the HTML (Section Name, Date, URL)
          var listItem = $("<li class='list-group-item mt-4'>");

          listItem.append(
            $("<h2>").text("Table #" + (i + 1)),
            $("<hr>"),
          //   $("<h2>").text("ID: " + currentRes[i].customerID),
            $("<h2>").text("Name: " + currentRes[i].name),
            $("<h2>").text("Email: " + currentRes[i].email),
            $("<h2>").text("Phone: " + currentRes[i].phone)
          );

          tableList.append(listItem);
        }
      });
  }

  function runWaitListQuery() {

    // The AJAX function uses the URL of our API to GET the data associated with it (initially set to localhost)
    $.get("/api/characters/"+ waitData, function(waitData) {
        console.log(waitData);
    // $.ajax({ url: "/api/waitlist", method: "GET" })
    //   .then(function(waitData) {

        // Here we then log the waitlistData to console, where it will show up as an object.
        console.log(waitData);
        console.log("------------------------------------");

        // Loop through and display each of the customers
        for (var i = 0; i < waitData.length; i++) {

          // Get a reference to the waitList element and populate it with tables
          var waitList = $("#waitList");

          // Then display the fields in the HTML (Section Name, Date, URL)
          var listItem = $("<li class='list-group-item mt-4'>");

          listItem.append(
            $("<h2>").text("Table #" + (i + 1)),
            $("<hr>"),
            $("<h2>").text("ID: " + waitData[i].customerID),
            $("<h2>").text("Name: " + waitData[i].customerName),
            $("<h2>").text("Email: " + waitData[i].customerEmail),
            $("<h2>").text("Phone: " + waitData[i].phoneNumber)
          );

          waitList.append(listItem);
        }
      });
  }

  // This function resets all of the data in our tables. This is intended to let you restart a demo.
  function clearTable() {
    alert("Clearing...");

    // Clear the tables on the server and then empty the elements on the client
    $.ajax({ url: "/api/clear", method: "POST" }).then(function() {
      $("#waitList").empty();
      $("#tableList").empty();
    });
  }

  // $("#clear").on("click", clearTable);


  // Run Queries!
  // ==========================================
  runTableQuery();
  // runWaitListQuery();
