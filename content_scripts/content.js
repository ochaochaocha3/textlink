var userActionHandler = new TextLinkUserActionHandler();
var selectionHandler = new TextLinkSelectionHandler();

chrome.runtime.onMessage.addListener(function(aMessage, aSender, aResponder) {
	switch (aMessage.type)
	{
		case TextLinkConstants.COMMAND_LOAD_URI:
			location.href = aMessage.uri;
			break;

		case TextLinkConstants.COMMAND_REQUEST_SELECTION_SUMMARY:
			log('getting summary...');
			selectionHandler.getSummary()
				.catch(function(aError) {
					log('Error: ' + aError);
					return null;
				})
				.then(function(aSummary) {
					log('summary: ', aSummary);
					aResponder(aSummary);
				});
			return true; // this is required to respond with delay
			break;

		case TextLinkConstants.COMMAND_REQUEST_CANCEL_SELECTION_SUMMARY:
			selectionHandler.summaryCancelled = true;
			break;

		case TextLinkConstants.COMMAND_REQUEST_SELECTION_URIS:
			log('getting uris...');
			selectionHandler.getURIs({
					select     : aMessage.select,
					onProgress : function(aURIs) {
						chrome.runtime.sendMessage({
							type : TextLinkConstants.COMMAND_REPORT_SELECTION_URIS_PROGRESS,
							uris : aURIs
						});
					}
				})
				.catch(function(aError) {
					log('Error: ' + aError);
					return null;
				})
				.then(function(aURIs) {
					log('responding uris: ', aURIs);
					aResponder(aURIs);
				});
			return true; // this is required to respond with delay

		case TextLinkConstants.COMMAND_REQUEST_PROCESS_SELECTION_URIS:
			log('getting uris...');
			selectionHandler.getURIRanges({
					select     : aMessage.select,
					onProgress : function(aURIs) {
						chrome.runtime.sendMessage({
							type : TextLinkConstants.COMMAND_REPORT_SELECTION_URIS_PROGRESS,
							uris : aURIs
						});
					}
				})
				.catch(function(aError) {
					log('Error: ' + aError);
					return [];
				})
				.then(function(aURIRanges) {
					log('processing uri ranges: ', aURIRanges);
					userActionHandler.openURIRanges({
						action : aMessage.action,
						frame  : window,
						ranges : aURIRanges
					});
					aResponder(aURIRanges.map(function(aRange) {
						return aRange.uri;
					}));
				});
			return true; // this is required to respond with delay

		case TextLinkConstants.COMMAND_REQUEST_CANCEL_SELECTION_URIS:
			selectionHandler.urisCancelled = true;
			break;

		case TextLinkConstants.COMMAND_REQUEST_CURRENT_URI:
			aResponder(window.location.href);
			break;
	}
});
