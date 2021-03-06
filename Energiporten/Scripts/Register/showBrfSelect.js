﻿$('#searchBrf').keyup(function () {
    var searchBrf = $('#searchBrf').val();
    $('#emailMessage').empty();

    $.ajax({
        url: 'SimilairBrf',
        type: 'POST',
        data: {
            //__RequestVerificationToken: token,
            brf: searchBrf
        },
        success: function (data) {
            $('#selectBrf').find('.brf').remove();
            for (var i = 0; i < data.brf.length; i++) {
                $('#selectBrf').append('<option class="brf" data-subtext="' + data.brf[i] + '">' + data.brf[i] + '</option>');
            }
        }
    });
});



$('#saveUser').click(function () {
    $.ajax({
        url: 'ShowPersonalInfo',
        type: 'POST',
        error: function () {
            //$('#info').html('<p>An error has occurred</p>');
        },
        success: function (data) {
            $('#loginInfo').hide();
        }
    });
});
$('#addBrf').click(function () {
	$.ajax({
		url: 'ShowBuildingInfo',
		type: 'GET',
		error: function () {
			console.log("Error");
		},
		success: function (data) {
			$('#buildingInfo').append(data);
			$('#brfInfo').hide();

		}
	});
	event.preventDefault();
});
$('#savePerson').click(function () {
	$.ajax({
		url: 'RegisterCompleted',
		type: 'GET',
		error: function () {
			//$('#info').html('<p>An error has occurred</p>');
		},
		success: function (data) {
			console.log('success');
			$('#registerCompleted').append(data);
			$('#brfInfo').hide();
		}
	});
	event.preventDefault();
});