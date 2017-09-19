function saveConfig(state){
    CutOffCPU = {'status': state};
	chrome.storage.sync.set({'CutOffCPU': JSON.stringify(CutOffCPU)});
}

function getConfig(callback) {

	chrome.storage.sync.get('CutOffCPU', function(result){
		callback((Object.keys(result).length == 0) ? null : JSON.parse(result.CutOffCPU));
	});

}

function saveExtensionConfig(status) {

	getConfig(function(result) {
		saveConfig((result === null) ? false : status);
	});
}

function init(){
    console.log("Get Off MY CPU STARTED");
    var startButton = document.getElementById('startButton');
		startButton.addEventListener('click', function() {

			saveExtensionConfig(true);
            
            
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    	chrome.extension.getBackgroundPage().init();
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
            
		}, false);
    
    var disableButton = document.getElementById('disableButton');
        disableButton.addEventListener('click', function() {

			saveExtensionConfig(false);
            
            
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    	chrome.extension.getBackgroundPage().init();
        chrome.tabs.update(tabs[0].id, {url: tabs[0].url});
    });
        }, false);
}

init();
