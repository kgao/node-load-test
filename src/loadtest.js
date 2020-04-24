'use strict';

/**
 * Sample request generator usage.
 * Contributed by jjohnsonvng:
 * https://github.com/alexfernandez/loadtest/issues/86#issuecomment-211579639
 */

const loadtest = require('loadtest');

// const params = {
// 	'lat': 40.7569,
// 	'lon': -73.9828,
// 	'precision': 4,
// 	'lastTimestamp': 0,
// 	'api-version': '2020-04-15'
// }

const optionsList= [
	{
	url: 'https://csapi.azurefd.net/api/Messages/List?lat=40.7569&lon=-73.9828&precision=4&lastTimestamp=0&api-version=2020-04-15',
	concurrency: 5,
	method: 'HEAD',
	body:'',
	requestsPerSecond:5,
	maxSeconds:30,
	headers: {
		'Accept': 'application/json'
	}
},
{
	url: 'https://csapi.azurefd.net/api/Messages/List?lat=40.7569&lon=-73.9828&precision=4&lastTimestamp=0&api-version=2020-04-15',
	concurrency: 5,
	method: 'GET',
	body:'',
	requestsPerSecond:5,
	maxSeconds:30,
	headers: {
		'Accept': 'application/json'
	}
},
{
	url: 'https://csapi.azurefd.net/api/Message?api-version=2020-04-15',
	concurrency: 5,
	method: 'POST',
	contentType: 'application/json',
	body: {
		"RequestedQueries": [{
			"messageId": "baa0ebe1-e6dd-447d-8d82-507644991e07",
			"messageTimestamp": 1586199635012 
		}]
	},
	json: true,
	requestsPerSecond:5,
	maxSeconds:30,
	headers: {
		'Accept': 'application/json'
	}
},
{
	url: 'https://csapi.azurefd.net/api/Messages/SeedReport?api-version=2020-04-15',
	concurrency: 5,
	method: 'PUT',
	contentType: 'application/json',
	body: {
    "seeds": [{
        "seed": "00000000-0000-0000-0000-000000000000",
        "sequenceStartTime": 1586406048649,
        "sequenceEndTime": 1586408048649
    }],
    "region": {
        "latitudePrefix": 40.7569,
        "longitudePrefix": -73.9828,
        "precision": 4
    }
	},
	json: true,
	requestsPerSecond:5,
	maxSeconds:30,
	headers: {
		'Accept': 'application/json'
	}
},
{
	url: 'https://csapi.azurefd.net/api/Messages/AreaReport?api-version=2020-04-15',
	concurrency: 5,
	method: 'PUT',
	contentType: 'application/json',
	body: {
    "userMessage": "Monitor symptoms for one week.",
    "areas": [{
        "location": {
            "latitude": 40.7569,
            "longitude": -73.9828
        },
        "radiusMeters": 100,
        "beginTime": 1586083599,
        "endTime": 1586085189
    }]
	},
	json: true,
	requestsPerSecond:5,
	maxSeconds:30,
	headers: {
		'Accept': 'application/json'
	}
}
]

var options = optionsList[0];

var LoadTestExpert = {  
	test: function(id, cb){
		options = optionsList[id];	
		loadtest.loadTest(options, (error, results) => {
			if (error) {
				return console.error('Got an error: %s', error);
			}
			console.log(results);
			console.log('Tests run successfully');
			cb(results)
		});
	}
}

module.exports = LoadTestExpert;