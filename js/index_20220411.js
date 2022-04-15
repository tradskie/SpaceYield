var CONTRACT_ADDRESS = '0x8c199e13bD92f1B83b265642a61F157a4ba1F748'; 

var referrer = '0x9eE0d2a06fb2120F0e71D70ce7543441F9e30162'
var upline = '0x9eE0d2a06fb2120F0e71D70ce7543441F9e30162'
var bnbusdt;

$.getJSON( "https://api.binance.com/api/v3/ticker/price?symbol=BNBUSDT", function( data ) {
	
	bnbusdt = data["price"];
});

var ABI = [
	{
		"constant": false,
		"inputs": [],
		"name": "launch",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "PERCENTS_DIVIDER",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserDownlineCount",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserDividends",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "userAddr",
				"type": "address"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "addExtraBonus",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddr",
				"type": "address"
			}
		],
		"name": "checkExtraBonus",
		"outputs": [
			{
				"name": "earn",
				"type": "bool"
			},
			{
				"name": "bonus",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserAvailable",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserPercentRate",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserWithdrawn",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "TIME_STEP",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserReferrer",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [],
		"name": "withdraw",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "MAX_HOLD_PERCENT",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "userAddr",
				"type": "address"
			},
			{
				"name": "l2",
				"type": "bool"
			},
			{
				"name": "l3",
				"type": "bool"
			},
			{
				"name": "l4",
				"type": "bool"
			},
			{
				"name": "l5",
				"type": "bool"
			}
		],
		"name": "unlocklevel",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserReferralTotalBonus",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "PROJECT_FEE",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "PERCENT_STEP",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "referrer",
				"type": "address"
			},
			{
				"name": "plan",
				"type": "uint8"
			}
		],
		"name": "invest",
		"outputs": [],
		"payable": true,
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "plan",
				"type": "uint8"
			},
			{
				"name": "deposit",
				"type": "uint256"
			}
		],
		"name": "getResult",
		"outputs": [
			{
				"name": "percent",
				"type": "uint256"
			},
			{
				"name": "profit",
				"type": "uint256"
			},
			{
				"name": "finish",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "REFERRAL_PERCENTS",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalRefBonus",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getContractBalance",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "TOTAL_DEPOSITS",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getContractInfo",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			},
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserTotalDeposits",
		"outputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalStaked",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "plan",
				"type": "uint8"
			}
		],
		"name": "getPercent",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserAmountOfDeposits",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "plan",
				"type": "uint8"
			}
		],
		"name": "getPlanInfo",
		"outputs": [
			{
				"name": "time",
				"type": "uint256"
			},
			{
				"name": "percent",
				"type": "uint256"
			},
			{
				"name": "withdrawl",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "REFERRAL_MINIMUM",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "totalUsers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			},
			{
				"name": "index",
				"type": "uint256"
			}
		],
		"name": "getUserDepositInfo",
		"outputs": [
			{
				"name": "plan",
				"type": "uint8"
			},
			{
				"name": "percent",
				"type": "uint256"
			},
			{
				"name": "amount",
				"type": "uint256"
			},
			{
				"name": "profit",
				"type": "uint256"
			},
			{
				"name": "start",
				"type": "uint256"
			},
			{
				"name": "finish",
				"type": "uint256"
			},
			{
				"name": "cooldown",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "startUNIX",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "DEVELOPER_FEE",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "userAddr",
				"type": "address"
			}
		],
		"name": "removeExtraBonus",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserCheckpoint",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "INVEST_MIN_AMOUNT",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "DEPOSIT_HISTORY",
		"outputs": [
			{
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"name": "duration",
				"type": "uint256"
			},
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "userAddress",
				"type": "address"
			}
		],
		"name": "getUserTotalWithdrawn",
		"outputs": [
			{
				"name": "amount",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"name": "wallet",
				"type": "address"
			},
			{
				"name": "_developer",
				"type": "address"
			},
			{
				"name": "_ref",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"name": "user",
				"type": "address"
			}
		],
		"name": "Newbie",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "plan",
				"type": "uint8"
			},
			{
				"indexed": false,
				"name": "percent",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "profit",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "start",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "finish",
				"type": "uint256"
			}
		],
		"name": "NewDeposit",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "Withdrawn",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "referrer",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "referral",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "level",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "RefBonus",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			}
		],
		"name": "AddExtraBonus",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "user",
				"type": "address"
			}
		],
		"name": "RemoveExtraBonus",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"name": "referrer",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "referral",
				"type": "address"
			},
			{
				"indexed": true,
				"name": "level",
				"type": "uint256"
			},
			{
				"indexed": false,
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "ExtraBonus",
		"type": "event"
	}
]

var tokenContract;

var currentAddr;
var contract = null;
var gasPrice = '10000000000' //10000000000
var percent1,percent2,percent3,percent4,percent5,percent6;
var startD, startH, startM, startS;

var BUSDPrice = 0;
var TokenPrice = 0;
var userBUSDStaked = 0;
var userReqAirdropInv = 0;

var affiliate = 0;

window.addEventListener('load', Connect)


async function Connect() {
    if (window.ethereum) {
        window.web3 = new Web3(ethereum)
        try {
            await ethereum.enable()

            let accounts = await web3.eth.getAccounts()
            currentAddr = accounts[0]
			console.log(currentAddr)
   			console.log("hi")         
			runAPP()
            return
        } catch (error) {
            console.error(error)
        }
    } else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider)

        let accounts = await web3.eth.getAccounts()
        currentAddr = accounts[0]
        console.log(currentAddr)
        runAPP()
        return
    }
    setTimeout(checkForBinanceChain, 1500)
}
async function checkForBinanceChain() {
    try {
        await window.BinanceChain.enable()
        console.log(typeof(window.BinanceChain))
        if (window.BinanceChain) {
            console.log('BinanceChain')
            await BinanceChain.enable()
            window.web3 = new Web3(window.BinanceChain)
            let accounts = await web3.eth.getAccounts()
            currentAddr = accounts[0]
            
            console.log(contract)
            runAPP()
            return
        }
    } catch (e) {}
}  

async function runAPP(){
    let networkID = await web3.eth.net.getId()
    if (networkID == 56) { // 56 - BSC Live. 97 -- BSC Test
		contract = await new web3.eth.Contract(ABI, CONTRACT_ADDRESS)
		console.log(contract)
    } 
}
var lastcall = 0;
var deposit=false;
var history123=false;
    setInterval(() => {
        if(contract){
            web3.eth.getAccounts().then(res=>{
                currentAddr = res[0]
            })
    
            var connectedAddr = currentAddr[0] + 
                                currentAddr[1] + 
                                currentAddr[2] + 
                                currentAddr[3] + 
                                currentAddr[4] + '...' +
                                currentAddr[currentAddr.length-5] + 
                                currentAddr[currentAddr.length-4] + 
                                currentAddr[currentAddr.length-3] + 
                                currentAddr[currentAddr.length-2] + 
                                currentAddr[currentAddr.length-1]

            $("#connect-btn").text(connectedAddr)	
			
			$("#referral-link").val('https://' + window.location.host  + '/?ref=' + currentAddr)
			
			var totaldeposit;
			
			if(Date.now()/100 >= 1650117600)
			{
			
			if(history123 == false)
			{
			contract.methods.TOTAL_DEPOSITS().call().then(res=>{ 
				$("#totalinvestment").html(`${res}`);
				$("#totaldeposits").html(`Total deposit count: ${res}`);
				if(res > lastcall)
				{
					for(var x = res; x > res-10; x--)
					{
						
						if(x>=0)
							{
						contract.methods.DEPOSIT_HISTORY(x-1).call().then(res2=>{ 
							var time = Math.floor(Date.now() / 1000)-res2[0];
							var cooldown = time
							if(cooldown > 3600) cooldown = Math.floor(cooldown/60/60)+"h"
							else if(cooldown <=3600 && cooldown > 0) cooldown = Math.floor(cooldown/60) +"m"
							
							if(res2[0] > 0)
								{
							  $("#deposit-history2").append(`<li class="dh-item">
								
								<p class="dh-amount">
									<span class="dh-name sr-only">Amount: </span>
									<span>${res2[2]/1e18}</span> BNB
								</p>
								<p class="dh-plan">
									<span class="dh-name sr-only">Plan: </span>
									<span>${res2[1]}</span> Days
								</p>
								<p class="dh-invested">
									<span class="dh-name sr-only">Invested: </span>
									<span>${(cooldown)} ago</span>
								</p>
							</li>`);
								}


				 		})	
							}
					}
					lastcall = res;
				} })
				history123=true;
			}
			
			totaldeposit = document.getElementById("totalinvestment").innerHTML;
			if(totaldeposit > 0)
			{
				contract.methods.DEPOSIT_HISTORY(totaldeposit-1).call().then(res2=>{ 
					var time = Date.now() / 1000-res2[0];
					var cooldown = time
					console.log(cooldown);
					if(cooldown > 3600) cooldown = Math.floor(cooldown/60/60)+"h"
					else if(cooldown <=3600 && cooldown > 0) cooldown = Math.floor(cooldown/60) +"m"
					$("#lastinvest").html(`Last invested ${cooldown} ago`);
					$("#lastinvest2").html(`Last deposit ${cooldown} ago`);
					$("#lastinvest3").html(`Last invested ${cooldown} ago`);
				})
				
				contract.methods.getContractInfo().call().then(res=>{ 
			 	
			 	$("#avstaked").html(`AVG ${Math.floor(res[0]/1e18/totaldeposit*1000)/1000} BNB in ${totaldeposit} Deposits`);
             })	
				
			}
			
            contract.methods.getContractInfo().call().then(res=>{ 
			 	$("#stakedbnb").html(`${res[0]/1e18}  BNB`);
				$("#stakedbnb-usd").html(`$  ${Math.floor(res[0]/1e18*bnbusdt*1000)/1000}`);
				$("#stakedbnb2").html(`${res[0]/1e18}  BNB`);
				$("#stakedbnb2-usd").html(`$  ${Math.floor(res[0]/1e18*bnbusdt*1000)/1000}`);
			 	$("#totalusers").html(`${res[2]}  Travelers`);
				$("#totalusers2").html(`${res[2]}  Travelers`);
				$("#totalref").html(`${res[1]/1e18}  BNB`);
				$("#totalref-usd").html(`$ ${Math.floor(res[1]/1e18*bnbusdt*1000)/1000}`);
             })	
			
			 contract.methods.getUserPercentRate(currentAddr).call().then(res=>{ 
			 	
			 	$("#holdbonus").html(`${res[0]/10}  %`);
				
             })	
			
			 contract.methods.getUserAvailable(currentAddr).call().then(res=>{ 
			 	$("#claim-bnb").html(`${(Math.floor(res/1e18*100000000)/100000000)}  BNB`);
				 $("#claim-bnb-usd").html(`$ ${(Math.floor(res/1e18*bnbusdt*1000)/1000)}`);
             })	
			
			 contract.methods.getUserAmountOfDeposits(currentAddr).call().then(res=>{ 
			 	$("#user-invests").html(`${res} `);

             })	
			
			contract.methods.getUserDownlineCount(currentAddr).call().then(res=>{ 
			 	$("#user-ref").html(`${res} `);	
				$("#user-ref2").html(`${res} `);	
             })	
			
			contract.methods.getUserReferralTotalBonus(currentAddr).call().then(res=>{ 
			 	$("#refearned").html(`${res/1e18} BNB`);		
             })	
			
			function timeConverter(createdAt) {
			  var date = new Date(createdAt);
			  date.toUTCString()
			  var year = date.getUTCFullYear();
			  var month = date.getUTCMonth()+1;
			  var day = date.getUTCDate();
			  return day+"."+month+"."+year;
			}
			
			if(deposit == false)
				{
				contract.methods.getUserAmountOfDeposits(currentAddr).call().then(res=>{ 
				for(var x = res; x >= 0; x--)
				{
					
					contract.methods.getUserDepositInfo(currentAddr,x).call().then(res2=>{ 
						
						var time = Math.floor(Date.now() / 1000)-res2[6];
						var start = timeConverter(res2[4]*1000)
						var finish = timeConverter(res2[5]*1000)
						var cooldown = -time

						if(cooldown > 3600) cooldown = "Cooldown "+Math.floor(cooldown/60/60)+"h"
						else if(cooldown <=3600 && cooldown > 0) cooldown = "Cooldown "+Math.floor(cooldown/60) +"m"
						else  cooldown = "Cooldown over";
						
						
						
						
						var plan = Math.floor(parseFloat(res2[0])+1);
						
						if(plan < 4) cooldown = "withdraw anytime";
								$("#ex1content").append(`<li class="dh-item">
								
								<p class="dh-amount">
									<span class="dh-name sr-only">Amount: </span>
									<span>Plan ${plan}</span>
								</p>
								<p class="dh-amount">
									<span class="dh-name sr-only">Amount: </span>
									<span>Amount ${res2[2]/1e18}</span>
								</p>
								<p class="dh-amount">
									<span class="dh-name sr-only">Amount: </span>
									<span>Profit ${Math.floor(res2[3]/1e18*1000000)/1000000}</span> BNB
								</p>		
								<p class="dh-plan">
									<span class="dh-name sr-only">Plan: </span>
									<span>Start ${start}</span>
								</p>
								<p class="dh-plan">
									<span class="dh-name sr-only">Plan: </span>
									<span>Finish ${finish}</span>
								</p>
								<p class="dh-plan">
									<span class="dh-name sr-only">Plan: </span>
									<span>${cooldown}</span>
								</p>
							</li>`)
					})
					

				}
				})
					const value = $("#slider").val();
		var trxspenddoc = document.getElementById('stake-input')
contract.methods.getPercent(value-1).call().then(res=>{ 
			$("#totalinvestment").html(`${res}`);


		$("#cooldown").text("");
		$("#daily-roi").text(res/10);
		$("#daily-increase").text(" 1 ");
		$("#total-roi").text(Math.floor(res/10*14));
		$("#invest-days").text(" 14 ");
		$("#total-amount").text(Math.round(trxspenddoc.value*res/10*14) / 100);
        $("#withdrawal-value").text("Anytime for 14 days.");
	
})
				deposit=true;
			}
				
			
			contract.methods.getUserTotalDeposits(currentAddr).call().then(res=>{ 
			 	$("#my-staked").html(`${res/1e18} BNB`);	
				$("#my-staked-usd").html(`$ ${Math.floor(res/1e18*bnbusdt*1000)/1000} `);	
				
				if(res/1e18 >= 2.5)
				{
					$("#unlocklevel").html(` <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 1 - 5%</h5>
                            <p class="uyl-info">Activated</p>
                        </li>
                        <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 2 - 2.5%</h5>
                            <p class="uyl-info">Activated</p>
                        </li>
                        <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 3 - 1.5%</h5>
                            <p class="uyl-info">Activated</p>
                        </li>
                        <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 4 - 0.5%</h5>
                             <p class="uyl-info">Activated</p>
                        </li>
                        <li class="uyl-item">
                           <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 5 - 0.5%</h5>
                             <p class="uyl-info">Activated</p>
                        </li>`);	
				}
				else if(res/1e18 >= 1.5)
				{
					$("#unlocklevel").html(` <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 1 - 5%</h5>
                            <p class="uyl-info">Joined</p>
                        </li>
                        <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 2 - 2.5%</h5>
                            <p class="uyl-info">Joined</p>
                        </li>
                        <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 3 - 1.5%</h5>
                            <p class="uyl-info">Activated</p>
                        </li>
                        <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 4 - 0.5%</h5>
                             <p class="uyl-info">Activated</p>
                        </li>
                         <li class="uyl-item">
                            <img class="uyl-icon" src="img/icon-locked.svg" alt="locked icon">
                            <h5 class="uyl-title">Level 5 - 0.5%</h5>
                            <p class="uyl-info">min. deposit 2.5 BNB</p>
                        </li>`);	
				}else if(res/1e18 >= 0.5)
				{
					$("#unlocklevel").html(` <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 1 - 5%</h5>
                            <p class="uyl-info">Activated</p>
                        </li>
                        <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 2 - 2.5%</h5>
                            <p class="uyl-info">Activated</p>
                        </li>
                        <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 3 - 1.5%</h5>
                            <p class="uyl-info">Activated</p>
                        </li>
                       <li class="uyl-item">
                            <img class="uyl-icon" src="img/icon-locked.svg" alt="locked icon">
                            <h5 class="uyl-title">Level 4 - 0.5%</h5>
                            <p class="uyl-info">min. deposit 1.5 BNB</p>
                        </li>
                        <li class="uyl-item">
                            <img class="uyl-icon" src="img/icon-locked.svg" alt="locked icon">
                            <h5 class="uyl-title">Level 5 - 0.5%</h5>
                            <p class="uyl-info">min. deposit 2.5 BNB</p>
                        </li>`);	
				}
				else if(res/1e18 >= 0.2)
				{
					$("#unlocklevel").html(` <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 1 - 5%</h5>
                            <p class="uyl-info">Activated</p>
                        </li>
                        <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 2 - 2.5%</h5>
                            <p class="uyl-info">Activated</p>
                        </li>
                       <li class="uyl-item">
                            <img class="uyl-icon" src="img/icon-locked.svg" alt="locked icon">
                            <h5 class="uyl-title">Level 3 - 1.5%</h5>
                            <p class="uyl-info">min. deposit 0.5 BNB</p>
                        </li>
                        <li class="uyl-item">
                            <img class="uyl-icon" src="img/icon-locked.svg" alt="locked icon">
                            <h5 class="uyl-title">Level 4 - 0.5%</h5>
                            <p class="uyl-info">min. deposit 1.5 BNB</p>
                        </li>
                        <li class="uyl-item">
                            <img class="uyl-icon" src="img/icon-locked.svg" alt="locked icon">
                            <h5 class="uyl-title">Level 5 - 0.5%</h5>
                            <p class="uyl-info">min. deposit 2.5 BNB</p>
                        </li>`);	
				}
				else if(res/1e18 >= 0.05)
				{
					$("#unlocklevel").html(` <li class="uyl-item">
                            <svg aria-hidden="true" class="uyl-icon level-check" version="1.1" id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                y="0px" viewBox="0 0 71.4 52.1" style="enable-background:new 0 0 71.4 52.1;"
                                xml:space="preserve">
                                <path id="Icon_awesome-check" class="st0"
                                    d="M24.3,51.1L1,28.4C-0.3,27-0.4,24.9,1,23.5c0,0,0.1-0.1,0.1-0.1l5-4.9 c1.4-1.4,3.6-1.4,5.1,0l15.6,15.3L60.3,1c1.4-1.4,3.6-1.4,5.1,0l5,4.9c1.4,1.3,1.4,3.5,0.1,4.9c0,0-0.1,0.1-0.1,0.1L29.3,51.1 C27.9,52.4,25.7,52.4,24.3,51.1z" />
                            </svg>
                            <h5 class="uyl-title">Level 1 - 5%</h5>
                            <p class="uyl-info">Activated</p>
                        </li>
                        <li class="uyl-item">
                            <img class="uyl-icon" src="img/icon-locked.svg" alt="check icon">
                            <h5 class="uyl-title">Level 2 - 2.5%</h5>
                            <p class="uyl-info">min. deposit 0.2 BNB</p>
                        </li>
                        <li class="uyl-item">
                            <img class="uyl-icon" src="img/icon-locked.svg" alt="locked icon">
                            <h5 class="uyl-title">Level 3 - 1.5%</h5>
                            <p class="uyl-info">min. deposit 0.5 BNB</p>
                        </li>
                        <li class="uyl-item">
                            <img class="uyl-icon" src="img/icon-locked.svg" alt="locked icon">
                            <h5 class="uyl-title">Level 4 - 0.5%</h5>
                            <p class="uyl-info">min. deposit 1.5 BNB</p>
                        </li>
                        <li class="uyl-item">
                            <img class="uyl-icon" src="img/icon-locked.svg" alt="locked icon">
                            <h5 class="uyl-title">Level 5 - 0.5%</h5>
                            <p class="uyl-info">min. deposit 2.5 BNB</p>
                        </li>`);	
				}
					
             })	
			
			
			
			
			
			
			web3.eth.getBalance(currentAddr).then(res=>{ 
			$("#own-bnb").html(`${Math.floor(res/1e18*100000000)/100000000}  BNB`)
				$("#own-bnb-usd").html(`$ ${Math.floor(res/1e18*bnbusdt*1000)/1000}`)
			 })	
			
			
			}
		}
	
    }, 3000);
		




function stakeM() {

	if (contract) {
		var trxspenddoc = document.getElementById('stake-input')
		var plan = document.getElementById('slider')

			console.log("stake busd: " + web3.utils.toWei(trxspenddoc.value))
			contract.methods.invest(upline, plan.value-1)
				.send({
					value: web3.utils.toWei(trxspenddoc.value),
					from: currentAddr,
					gasPrice: gasPrice,
				})

	}

}

function withdraw () {

	if (contract) {
			contract.methods.withdraw ()
				.send({
					from: currentAddr,
					gasPrice: gasPrice,
				})

	}

}
