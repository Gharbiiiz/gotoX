chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
  
	  let Url = tabs[0].url;
	  // use `url` here inside the callback because it's asynchronous!
	  //search for /
	let IpStart = 0, IpEnd = 0, PortStart = 0, PortEnd = 0;
	let TextStart = "http://";
	let Port = "80"

	if (Url.search(TextStart) > -1) {
		IpStart = Url.search(TextStart) + TextStart.length;
		IpEnd = Url.length;
		if (Url.substring(IpStart, IpEnd).search(":") > -1) {
			//Port found
			IpEnd = Url.substring(IpStart, Url.length).search(":") + TextStart.length;
			PortStart = Url.substring(IpStart, Url.length).search(":") + TextStart.length + 1;
			PortEnd = Url.length;

			if (Url.substring(PortStart, Url.length).search("/") > -1) {
				console.log("port url: " + Url.substring(PortStart, Url.length));
				PortEnd = PortStart + Url.substring(PortStart, Url.length).search("/");
			}

		} else if (Url.substring(IpStart, Url.length).search("/") > -1) {
			//Port Not Found
			IpEnd = Url.substring(IpStart, Url.length).search("/") + TextStart.length;
		}

		if (PortStart && PortEnd) {
			Port = Url.substring(PortStart, PortEnd);

		}

		//<button onclick="window.location.href='https://w3docs.com';">
		//	Click Here
		//</button>=


		//document.getElementById("Hide").innerHTML = "<button onclick =\"href=\"http://" + Url.substring(IpStart, IpEnd) + ":"
		//											+ Port + "\\hide123.htm\"\"</button>Goto Hide";
		//document.getElementById("Hispayment").innerHTML = "<a href=\"http://" + Url.substring(IpStart, IpEnd) + ":"
		//											+ Port + "\\historic/paymenthistoric.htm\" target=\"_bank\"</a>Goto Hispayment";
	} else {
		document.getElementById("Hide").innerHTML = "not found";
	}


	//<button onclick="window.location.href=" http:="" 81.1.8.102: 8788\hide123.htm"" <\button = "" > Goto Hide</button >
  
});

