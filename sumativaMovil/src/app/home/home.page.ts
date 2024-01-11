import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  noticias=[
    {
      titulo:"Víctima narra cómo evitó secuestro en valle de Los Chillos",
      imagen:"https://www.elcomercio.com/wp-content/uploads/2023/06/secuestro-300x168.jpg",
      descripcion:"El hombre que fue víctima de un intento de secuestro en el valle de Los Chillos narró los momentos de temor que vivió, cuando personas armadas trataron de plagiarlo a él y a su familia en ese sector del suroriente de Quito."
    },
    {
      titulo:"Un niño de 13 años de EE.UU. se pasa Tetris por primera vez en la historia",
      descripcion:"Washington, 4 ene (EFE).- Un niño de 13 años de Oklahoma (Estados Unidos) es aparentemente la primera persona que logra vencer al videojuego Tetris desde su creación en 1984.",
      imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgelt2eDs2GvOURr3gqHenxCOzqCQRjhiX3w&usqp=CAU"
    },
    {
      titulo:"Guenther Steiner sale de Haas y Ayao Komatsu asume el rol de jefe de equipo",
      descripcion:"La temporada 2024 de Fórmula 1 está a la vuelta de la esquina y va a empezar con cambios en el seno de Haas. Gunther Steiner se despide de la escudería estadounidense y Ayao Komatsu asume el rol de jefe de equipo.",
      imagen:"https://soymotor.com/sites/default/files/styles/comp_695x389/public/2024-01/Haascambio_SoyMotor.jpg.webp?itok=yRcY4Q9Q"
    },
  ]
  constructor() {}

}
