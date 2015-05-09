(function() {

	var iconSpreadsheetId = "181blzgMVeOgHoktNmfyIWBJqGxy2M9SAuaMw8z-aQB8";
	var jsonUrl = "https://spreadsheets.google.com/feeds/list/" + iconSpreadsheetId + "/od6/public/values?alt=json";

	var iconFolderId = '0B8-0u-pwGKs-eW1mR29vdU9ONXM';
	var iconsUrl = 'https://googledrive.com/host/' + iconFolderId;

	var app = angular.module('myApp', []);

	app.controller('IconController', ['$http', function($http) {
		var self = this;
		this.icons = [];
		this.iconsUrl = iconsUrl;

		$http.get(jsonUrl).success(function(data, status, headers, config) {
			var entry = data.feed.entry;

			for (var i = 0; i < entry.length; i++) {
				self.icons.push({
					'name': entry[i].gsx$name.$t,
					'group': entry[i].gsx$group.$t,
					'public': entry[i].gsx$public.$t});
			}

		}).error(function(data, status, headers, config) {
			// called asynchronously if an error occurs
			// or server returns response with an error status.
		});


	}]);


})();