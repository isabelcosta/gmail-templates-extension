
var iframeDocument = '<iframe src="https://wonderful-newton-e3e9d4.netlify.com"></iframe>'

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
							title: "Choose template",
							text: "Ok"
						}
					],
					el: iframeDocument
				});
				
				event.composeView.insertTextIntoBodyAtCursor('Hello World!');
				
				// TODO: grab template from iframe
				//event.composeView.setBodyText("Lola Maria");

			},
		});

	});

});
