videojs.plugin('name', 'options')
	var player = videojs('myPlayer')
		this.ON = ('loadedmetadata', function() 
			<<Display Custom Field>>
		});
	var info = player.mediainfo.custom_fields.name
	