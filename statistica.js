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
