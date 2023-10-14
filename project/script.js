// Get all the table switcher buttons
    const tableSwitcherButtons = document.querySelectorAll('.table-switcher button');

    // Add a click event listener to each button
    tableSwitcherButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Get the table ID that corresponds to the button
        const tableId = button.getAttribute('id');

        // Get the table element
        const table = document.getElementById(tableId);

        // Hide all the tables
        const tables = document.querySelectorAll('table');
        tables.forEach(table => {
          table.classList.remove('active');
        });

        // Show the selected table
        table.classList.add('active');
      });
    });
