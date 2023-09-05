/*
$(document).ready(function () {
    $.ajax({
        url: '../php/editGraveyard.php',
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var tableBody = $('#data-table tbody');

            // Check if there is at least one cemetery and one section
            if (data.cemeteries.length > 0 && data.sections.length > 0) {
                var cemetery = data.cemeteries[0];
                var section = data.sections[0];

                var newRow = $('<tr>');
                newRow.append('<td>' + cemetery.CemeteryName + '</td>');
                newRow.append('<td>' + section.SectionCode + '</td>');
                newRow.append('<td>' + section.TotalGraves + '</td>');
                newRow.append('<td>' + section.AvailableGraves + '</td>'); 
                newRow.append('<td>' + cemetery.LocationName + '</td>');
                tableBody.append(newRow);
            } else {
                // Handle the case where there is no data
                tableBody.append('<tr><td colspan="5">No data available</td></tr>');
            }
        },
        error: function () {
            alert('Error fetching data from the server');
        }
    });
});
*/






$(document).ready(function () {
    // Fetch service provider data from the PHP script using AJAX
    // Use relative path to the PHP file (starting from the "gms1" folder)
    $.getJSON("../php/editGraveyard.php", function (data) {
        console.log(data); // Log the received data in the console

        var tableBody = $("#serviceProvidersTableBody");

        // Iterate through the data and dynamically create table rows
        $.each(data, function (index, provider) {
            var row = $("<tr>").attr("id", "clickable-row").css("cursor", "pointer");
            row.append($("<td>").text(index + 1));
            row.append($("<td>").text(cemetery.CemeteryName));
            row.append($("<td>").text(section.SectionCode));
            row.append($("<td>").text(section.TotalGraves));
            row.append($("<td>").text(section.AvailableGraves));
            row.append($("<td>").text(cemetery.LocationName));

            tableBody.append(row);
        });
    });
    // Add event listener for the search input field
    $("input[type='text']").on("input", function () {
        // Get the search query value
        var query = $(this).val().toLowerCase();

        // Filter the table rows based on the query
        $("#serviceProvidersTableBody tr").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(query) > -1);
        });
    });
    // Add event listener for the table rows
    $("#serviceProvidersTableBody").on("click", "tr", function () {
        var serviceProviderName = $(this).find("td:eq(1)").text();
    
        // Construct the URL to the companyPage.php page using the appropriate relative path
        // Go up one level to the root directory, then go to the 'php' folder
        var redirectURL = "" + encodeURIComponent(serviceProviderName);
    
        // Redirect to the detail page
        window.location.href = redirectURL;
    });

   
});