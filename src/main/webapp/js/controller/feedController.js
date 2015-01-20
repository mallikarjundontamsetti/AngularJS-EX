
app.controller('FeedCtrl', function ($scope,FeedService) { 
		this.feeds = [];
		 FeedService.parseFeed('http://rss.cnn.com/rss/cnn_topstories.rss').then(function(res){
            this.feeds =res.responseData.feed.entries;
            alert(feeds.length);
        });
});

app.factory('FeedService', function($http){
	var myservice = {
	parseFeed : function(url){
        var promise =  $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url)).
        then(function (response) {
            // The then function here is an opportunity to modify the response
            console.log(response);
            // The return value gets picked up by the then in the controller.
            return response.data;
          });
          // Return the promise to the controller
          return promise;
    }
	};
	return myservice;
  });