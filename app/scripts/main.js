var youTubeURL = 'http://gdata.youtube.com/feeds/api/videos/pco91kroVgQ?v=2&alt=json';

            var json = (function() {
                var json = null;
                $.ajax({
                    'async': false,
                    'global': false,
                    'url': youTubeURL,
                    'dataType': "json",
                    'success': function(data) {
                        json = data;
                    }
                });
                return json;
            })();
            
            var str = json.entry.yt$statistics.viewCount;
            if(str.length > 10) str = str.substring(0,10);

            $('.uniquely').append(str);


