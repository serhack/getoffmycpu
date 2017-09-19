
function delete_js(status){
    if( status){
chrome.webRequest.onBeforeRequest.addListener(
  function () {
    return {
      cancel: true
    };
  },
  {
    urls: [
      '*://coin-hive.com/lib/*',
      '*://coin-hive.com/captcha/*',
      '*://miner.pr0gramm.com/*',
    ]
  },
  ['blocking']
);
    }
    else{
        console.log("DISABLED");
    }
}

function init(){
    chrome.storage.sync.get('CutOffCPU', function(result){
		if((Object.keys(result).length != 0)) {
			var mconf = JSON.parse(result.CutOffCPU);
			if(mconf.status == true) {
                console.log("[SUCCESS] DELETE HIDDEN MINER!")
				delete_js(true);
			}
           
    }
    });
}

init();
