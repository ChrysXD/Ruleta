	var miRuleta = new Winwheel({
				'numSegments': 54,
				'outerRadius': 240,
				'innerRadius': 162,
				'strokeStyle': '#fff',
				'lineWidth' : 1,
				'segments': [
					{'fillStyle': '#555857', 'id': 3}, //3
					{'fillStyle': '#DB2828','id': 4}, //4
					{'fillStyle': '#555857','id': 5}, //5
					{'fillStyle': '#DB2828','id': 6}, //6
					{'fillStyle': '#555857','id': 7},//7
					{'fillStyle': '#DB2828','id': 8},//8
					{'fillStyle': '#555857','id': 9},//9
					{'fillStyle': '#45B6D6','id': 10},//10
					{'fillStyle': '#555857','id': 11},//11
					{'fillStyle': '#45B6D6','id': 12},//12
					{'fillStyle': '#555857','id': 13},//13
					{'fillStyle': '#DB2828','id': 14},//14
					{'fillStyle': '#555857','id': 15},//15
					{'fillStyle': '#DB2828','id': 16},//16
					{'fillStyle': '#555857','id': 17},//17
					{'fillStyle': '#DB2828','id': 18},//18
					{'fillStyle': '#555857','id': 19},//19
					{'fillStyle': '#45B6D6','id': 20},//20
					{'fillStyle': '#555857','id': 21},//21
					{'fillStyle': '#45B6D6','id': 22},//22
					{'fillStyle': '#555857','id': 23},//23
					{'fillStyle': '#DB2828','id': 24},//24
					{'fillStyle': '#555857','id': 25},//25
					{'fillStyle': '#DB2828','id': 26},//26
					{'fillStyle': '#555857','id': 27},//27
					{'fillStyle': '#DB2828','id': 28},//28
					{'fillStyle': '#555857','id': 29},//29
					{'fillStyle': '#DB2828','id': 30},//30
					{'fillStyle': '#555857','id': 31},//31
					{'fillStyle': '#DB2828','id': 32},//32
					{'fillStyle': '#555857','id': 33},//33
					{'fillStyle': '#45B6D6','id': 34},//34
					{'fillStyle': '#555857','id': 35},//35
					{'fillStyle': '#45B6D6','id': 36},//36
					{'fillStyle': '#555857','id': 37},//37
					{'fillStyle': '#DB2828','id': 38},//38
					{'fillStyle': '#555857','id': 39},//39
					{'fillStyle': '#DB2828','id': 40},//40
					{'fillStyle': '#555857','id': 41},//41
					{'fillStyle': '#DB2828','id': 42},//42
					{'fillStyle': '#555857','id': 43},//43
					{'fillStyle': '#45B6D6','id': 44},//44
					{'fillStyle': '#555857','id': 45},//45
					{'fillStyle': '#45B6D6','id': 46},//46
					{'fillStyle': '#555857','id': 47},//47
					{'fillStyle': '#DB2828','id': 48},//48
					{'fillStyle': '#555857','id': 49},//49
					{'fillStyle': '#DB2828','id': 50},//50
					{'fillStyle': '#555857','id': 51},//51
					{'fillStyle': '#DB2828','id': 52},//52
					{'fillStyle': '#555857','id': 53},//53
					{'fillStyle': '#45B6D6','id': 54},//54
					{'fillStyle': '#FFE149','id': 1}, /*1*/
					{'fillStyle': '#45B6D6','id': 2}, //2





				],
				'animation':{
					'type':'spinToStop',
					'callbackFinished' : 'Mensaje()',
					'duration': 10,					
					'callbackAfter': 'dibujarIndicador()'
				}
			});	


			function Mensaje(){
				var SegmentosSeleccionado = miRuleta.getIndicatedSegment();
				document.getElementById('conteo').innerHTML=("Casilla ganadora:" + SegmentosSeleccionado.id + "!");
				miRuleta.stopAnimation(false);
				miRuleta.rotationAngle = 0;
				dibujarIndicador();
			} 
				
			function girar(){    
				   var sonido =document.querySelector("#audio");
				   sonido.setAttribute("src","audio/girar.mp3");
				}

			dibujarIndicador();
			function dibujarIndicador(){
				var ctx = miRuleta.ctx;
				ctx.strokeStyle = 'black';
				ctx.fillStyle = 'white';
				ctx.lineWidth = 6;
				ctx.beginPath();
				ctx.moveTo(210,0);
				ctx.lineTo(260,0);
				ctx.lineTo(235,40);
				ctx.lineTo(211,0);
				ctx.stroke();
				ctx.fill();
			}

			
