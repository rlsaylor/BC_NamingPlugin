videojs.plugin('name', function() {
	var player = this;
	player.on = ('loadedmetadata', function(){
		var info = player.mediainfo.custom_fields.name;
		//This step would be taking the info variable and putting it to the ID of where you want it on the page//
		spotOnPageID.innerHTML = info;
	})
});
