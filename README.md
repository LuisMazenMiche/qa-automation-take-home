Demo Divelement.io


Un pequeño resumen de los pasos tomados a tomar para llegar completar la tarea:

	1. npm install
	2. npm start
Instalar cypress
	3. npm install cypress --save-dev
	4. Instalar npx 
	5. npx cypress open
	6. Configurar las primeras pruebas e2e
	

Despues de terminar con el set up, empece creando una carpeta de page objects. Dentro de esta carperta
cree la mayor parte de logica para la aplicacion, esto con el fin de dejar mi documento de pruebas lo mas limpio posible.

dentro de la carpeta de PageObjects  se encuentra el documento cypressTest_Page.js en el cree las funciones necesarias
para las pruebas del demo.

En la cartpeta de e2e se encuentran los casos de prueba, son 4 en total para probar los puntos solicitados.

Dentro de ambos documentos se encuentran comentarios explicando las razones de cada prueba.

Al finalizar solo fue cuestion de crear un nuevo repositorio en github:


	1. git init
	2. git add README.md
	3. git add .
	4  git commit -am "the whole repo"
	5. git remote add origin https://github.com/LuisMazenMiche/qa-automation-take-home.git
	6. git push origin master
