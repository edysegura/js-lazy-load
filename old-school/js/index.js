/* JavaScript Document
Autor: Edy Segura - edy@segura.pro.br
Descrição: Incluindo novos scripts
*/

var Index = {
	
	showContent: function(sMessage) {
		if(typeof sMessage == "string") {
		
			var oParagrafo = document.createElement("p");
			oParagrafo.innerHTML = sMessage;
			document.body.appendChild(oParagrafo);
		
		}
	}
	
};
