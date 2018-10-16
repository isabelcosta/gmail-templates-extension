InboxSDK.load('1', 'sdk_gmail-templates_d763639e5c').then(function(sdk){

	// the SDK has been loaded, now do something with it!
	sdk.Compose.registerComposeViewHandler(function(composeView){

		// a compose view has come into existence, do something with it!
		composeView.addButton({
			title: "Use Templates",
			iconUrl: 'http://icons.iconarchive.com/icons/google/noto-emoji-objects/128/62941-card-file-box-icon.png',
			onClick: function(event) {
				
 				sdk.Widgets.showModalView({
					title: "Pick a template",
					buttons: [
						{
							title: "Add template",
							text: "Add"
						}
					],
					el: "<div id=\"templates_list_container\"></div>"
				});
				
				event.composeView.insertTextIntoBodyAtCursor('Hello World!');
				//event.composeView.setBodyText("Lola Maria");
			},
		});

	});

});
