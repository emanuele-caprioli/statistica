var dati = new Array();
var titStudio = ["No titoli","Licenza elem.","Licenza media","Diploma","Laurea"];

function caricaDati()
{
	var url = "dati.txt";
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() 
	{
		if (xmlhttp.readyState == 4)
    {
    	if (xmlhttp.status == 200) 
      {
    		dati = JSON.parse(xmlhttp.responseText);
    		visualizzaDati();
    	}
    	else 
      {
    		document.getElementById("messaggi").innerHTML = "Errore";
    	}
    }
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

function visualizzaDati()
{
  var ncol=0;
  for (key in dati)
    ncol++;
  var tit = document.getElementsByTagName("TITLE");
	var txt = tit[0].childNodes[0];
  var tab = document.getElementById("dati");
	tab.innerHTML="";
	var tabella = document.createElement("TABLE");
  
  var titolo = document.createElement("TR");
  var ele = document.createElement("TH");
  titolo.className="purple";
  ele.colSpan = ncol;
  ele.appendChild(txt);    
  titolo.appendChild(ele);
  tabella.appendChild(titolo);

  var intestazione = document.createElement("TR");
  for (var x in dati[0])
  {
  	txt = document.createTextNode(x);
    ele = document.createElement("TH");
	  ele.appendChild(txt);
    intestazione.appendChild(ele);
  }
  intestazione.className="purple";
  tabella.appendChild(intestazione);

  for (var i in dati)
	{
		var riga = document.createElement("TR");
    for (var x in dati[i])
    {
    	if (x=="Titolo")
     		txt = document.createTextNode(titStudio[dati[i][x]]);
		 	else
		 		txt = document.createTextNode(dati[i][x]);
		 	ele = document.createElement("TD");
      ele.appendChild(txt);
      riga.appendChild(ele);
    }
    tabella.appendChild(riga);
	}
	tab.appendChild(tabella);
}
var vis= false;
function contaSesso(){
  if(!vis){
    vis=!vis;
	var m=0;
	var f=0;
	for(var i in dati){
		for(var x in dati[i]){
			if(x == "Sesso"){
				if(dati[i][x] == "F"){
					f++;
				}
				else{
					m++;
				}
			}
		}
	}
	document.getElementById("dati2").innerHTML = " Femmine: "+ f + " Maschi: "+m;
  }
  else{
    document.getElementById("dati2").innerHTML="";
    vis=!vis;
  }
}

function contaTitoloStudio(){
	var nt = 0;
	var not = "No titolo: ";
	var le = 0;
	var lem = "Licenza elem: ";
	var lm = 0;
	var lmed = "Licenza media: ";
	var d = 0;
	var dip = "Diploma: ";
	var la = 0;
	var lau = "Laurea: ";
	for(var i in dati){
		for(var x in dati[i]){
			if(x == "Titolo"){
				switch(dati[i][x]){
					case 0:
						nt++;
						break;
					case 1:
						le++;
						break;
					case 2:
						lm++;
						break;
					case 3:
						d++;
						break;
					case 4:
						la++;
						break;
					default:
						break;
				}
			}
		}
	}
	document.getElementById("dati3").innerHTML = not + nt + " " + lem + le + " " + lmed + lm + " " + dip + d + " " + lau + la;
}