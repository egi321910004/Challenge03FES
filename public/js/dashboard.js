$(document).ready(function () {
    $(document).ready(function () {
        // table
        $('table.display').DataTable({

            "bInfo": false,
        });
        $("#sidebar-second").mCustomScrollbar({
            theme: "minimal"
        });
        $("#sidebar").mCustomScrollbar({
            theme: "minimal"
        });

        $('#sidebarCollapse').on('click', function () {
            $('#sidebar-second,#sidebar, #content').toggleClass('active');
            $('.collapse.in').toggleClass('in');
            $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        });
    });
});