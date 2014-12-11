 $('html').addClass('d_none');
            $(document).ready(function() {
            $('html').show();
            $("body").queryLoader2({
            backgroundColor: '#fff',
            barColor: '#60C4DD',
            barHeight: 4,
            percentage: true,
            deepSearch: true,
            minimumTime: 1000
            });
            });