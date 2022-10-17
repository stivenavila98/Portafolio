import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
	selector: 'app-home-works',
	templateUrl: './home-works.component.html',
	styleUrls: ['./home-works.component.css', '../../home.component.css']
})
export class HomeWorksComponent implements OnInit {
	@Input() translationLenguage:any = null;

	showModal = false;
	works = {
		"panel_administrativo_academias": {
			title: "Panel Administrativo para Academias",
			proprietor: "Juan José Calvo.",
			created_with: "Angular, Typescript, Nodejs, MySql, HTML5 y CSS3.",
			link: "",
			description: "Plataforma administrativa para el manejo y control de academias de estudio con una o más sedes y periodos, en el cual puedes llevar el registro de cursos y los distintos grupos de un mismo curso, el registro de estudiantes, opción de inscripción y de generar contrato de estudio, permite agregar personal en una variedad de cargos, posee restricciones de acceso dependiendo de cada cargo, permite la creación de boletines para los alumnos, control de asistencia para los distintos grupos de clases, control de biblioteca para los libros prestados a alumnos y profesores, control de pagos de personal, facturaciones de abonos de los estudiantes, control de pagos fijos y extras, resumen estadístico, panel de configuración, posee opción de búsqueda en cada una de las secciones, posee su propio asistente de configuración inicial, posee una sección de mensajería interna, entre otras cosas.",
			imgs: [{
				path: "/assets/home/works/academia_seccion1.jpg",
				alt: "academia_seccion1"
			},
			{
				path: "/assets/home/works/academia_seccion2.jpg",
				alt: "academia_seccion2"
			},
			{
				path: "/assets/home/works/academia_seccion3.jpg",
				alt: "academia_seccion3"
			},
			{
				path: "/assets/home/works/academia_seccion4.jpg",
				alt: "academia_seccion4"
			},
			{
				path: "/assets/home/works/academia_seccion5.jpg",
				alt: "academia_seccion5"
			},
			{
				path: "/assets/home/works/academia_seccion6.jpg",
				alt: "academia_seccion6"
			},
			{
				path: "/assets/home/works/academia_seccion7.jpg",
				alt: "academia_seccion7"
			},
			{
				path: "/assets/home/works/academia_seccion8.jpg",
				alt: "academia_seccion8"
			}]
		},
		"coepamm": {
			title: "Coepamm",
			proprietor: "Empresa Coepamm.",
			created_with: "Vuejs, Nuxtjs, PHP, MySql, HTML5, CSS3 y Javascript.",
			link: "",
			description: "Plataforma administrativa para academia marítima, cuya función principal es la de proveer información sobre los cursos que ofrecen, permite realizar el registro de estudiantes, la creación de cursos, pensum, asignación de estudiantes y del profesor a  un determinado curso y sección, permite registrar al personal administrativo y de profesorado, permite la inscripción de estudiantes, posee un control por parte de los docentes para calificar a los estudiantes, permite la creación de los certificados de los cursos para cada alumno, permite manejar los registros de varios periodos y sedes, posee su panel de configuración, permite realizar búsquedas de registros en cada una de las secciones, entre otras cosas.",
			imgs: [{
				path: "/assets/home/works/coepamm_seccion1.jpg",
				alt: "coepamm_seccion1"
			},
			{
				path: "/assets/home/works/coepamm_seccion2.jpg",
				alt: "coepamm_seccion2"
			},
			{
				path: "/assets/home/works/coepamm_seccion3.jpg",
				alt: "coepamm_seccion3"
			},
			{
				path: "/assets/home/works/coepamm_seccion4.jpg",
				alt: "coepamm_seccion4"
			},
			{
				path: "/assets/home/works/coepamm_seccion5.jpg",
				alt: "coepamm_seccion5"
			},
			{
				path: "/assets/home/works/coepamm_seccion6.jpg",
				alt: "coepamm_seccion6"
			},
			{
				path: "/assets/home/works/coepamm_seccion7.jpg",
				alt: "coepamm_seccion7"
			},
			{
				path: "/assets/home/works/coepamm_seccion8.jpg",
				alt: "coepamm_seccion8"
			}]
		},
		"magi": {
			title: "MAGI (Modulo Administrativo De Gestión De Interconexiones)",
			proprietor: "Universidad Privada Dr. Rafael Belloso Chacín.",
			created_with: "React, Nodejs, MySql, HTML5, CSS3 y Javascript.",
			link: "",
			description: "Plataforma administrativa de control de un grupo determinado de computadoras de una o varias áreas, las cuales pueden ser operadas de manera sencilla de forma remota y hacer uso de una serie de opciones útiles para el entorno de trabajo, algunas de esas opciones son las de permitir el encendido, apagado o reinicio de una o varias PCS o de un área completa, posee un modo en el que establece a un área de un grupo de PCS en modo reservación. Este modo activa una pantalla de bloqueo en las PCS de esa área con el nombre del equipo, para luego proceder a asignar a un estudiante a una PC disponible, la cual será reservada para un estudiante y podrá usar su cedula de identidad para desbloquear la PC, la cual le otorgará un tiempo determinado de uso y una vez finalizado el tiempo la PC se bloqueará y será asignada a otro estudiante en espera para el uso de una PC para investigar, posee la opción de enviar mensajes predeterminados o personalizados a una o varias PCS para informar a los estudiantes de avisos importantes, entre otras cosas.",
			imgs: [{
				path: "/assets/home/works/magi_seccion1.jpg",
				alt: "magi_seccion1"
			},
			{
				path: "/assets/home/works/magi_seccion2.jpg",
				alt: "magi_seccion2"
			},
			{
				path: "/assets/home/works/magi_seccion3.jpg",
				alt: "magi_seccion3"
			},
			{
				path: "/assets/home/works/magi_seccion4.jpg",
				alt: "magi_seccion4"
			}]
		},
		"meson_rebeca": {
			title: "Mesón Rebeca",
			proprietor: "Dueños del Restaurante Mesón Rebeca.",
			created_with: "WordPress, PHP, HTML5, CSS3 y Javascript.",
			link: "https://mesonrebeca.com/",
			description: "Sitio web de servicio de Restaurante y asador, en donde encontrarás una gran variedad de productos de temporada armonizados con el sabor de la cocina más tradicional y artesanal ubicado en la Carlota, España.",
			imgs: [{
				path: "/assets/home/works/meson_rebeca_fullweb.jpg",
				alt: "meson_rebeca_fullweb"
			}]
		},
		"iloveenglish": {
			title: "I Love English",
			proprietor: "Juan José Calvo.",
			created_with: "WordPress, PHP, HTML5, CSS3 y Javascript.",
			link: "https://iloveenglish.es/",
			description: "Sitio web de una academia de inglés, en la cual provee información sobre su academia, sobre los cursos que imparten, permite realizar un test de inglés automatizado y facilita el proceso de matriculación para un curso y horario en específico.",
			imgs: [{
				path: "/assets/home/works/iloveenglish_fullweb1.jpg",
				alt: "iloveenglish_fullweb1"
			},
			{
				path: "/assets/home/works/iloveenglish_fullweb2.jpg",
				alt: "iloveenglish_fullweb2"
			},
			{
				path: "/assets/home/works/iloveenglish_fullweb3.jpg",
				alt: "iloveenglish_fullweb3"
			}]
		},
		"webprofesionalonline": {
			title: "Web Profesional",
			proprietor: "Juan José Calvo.",
			created_with: "WordPress, PHP, HTML5, CSS3 y Javascript.",
			link: "https://webprofesionalonline.com/",
			description: "Sitio web dedicado a la venta de servicios de desarrollo web, en donde se ofrece diseño y creación de sitios web de distintas escalas ajustados a las necesidades y preferencias de los clientes.",
			imgs: [{
				path: "/assets/home/works/webprofesionalonline_fullweb.jpg",
				alt: "webprofesionalonline_fullweb"
			}]
		},
		"donuts": {
			title: "Donuts SA",
			proprietor: "De mi propiedad.",
			created_with: "HTML5, CSS3, Javascript, Jquery y Bootstrap 4.",
			link: "/proyectos/Donuts/index.html",
			description: "Sitio web de mi propiedad enfocado como diseño de ejemplo para una empresa que necesite patrocinar los productos de su negocio de venta de postres o productos de repostería, con animaciones 3D y un diseño colorido y alegre.",
			imgs: [{
				path: "/assets/home/works/donuts_fullweb.jpg",
				alt: "donuts_fullweb"
			}]
		},
		"one_page": {
			title: "One Page",
			proprietor: "De mi propiedad.",
			created_with: "HTML5, CSS3, Javascript, Jquery y Bootstrap 4.",
			link: "/proyectos/One Page/index.html",
			description: "Sitio web de mi propiedad enfocado como diseño de ejemplo para una empresa que necesite tener un espacio o lugar en el cual pueda mostrar información sobre su empresa o negocio, ofrecer sus servicios y tener los datos de contacto para clientes potenciales.",
			imgs: [{
				path: "/assets/home/works/one_page_fullweb.jpg",
				alt: "one_page_fullweb"
			}]
		},
		"ecoambiente": {
			title: "EcoAmbiente",
			proprietor: "De mi propiedad.",
			created_with: "HTML5, CSS3, Javascript, Jquery y Bootstrap 4.",
			link: "/proyectos/EcoAmbiente/index.html",
			description: "Sitio web de mi propiedad enfocado como diseño de ejemplo para una empresa que necesite tener un espacio o lugar en el cual pueda mostrar información sobre su empresa o negocio, ofrecer sus servicios y tener los datos de contacto para clientes potenciales.",
			imgs: [{
				path: "/assets/home/works/ecoambiente_fullweb1.jpg",
				alt: "ecoambiente_fullweb1"
			},
			{
				path: "/assets/home/works/ecoambiente_fullweb2.jpg",
				alt: "ecoambiente_fullweb2"
			},
			{
				path: "/assets/home/works/ecoambiente_fullweb3.jpg",
				alt: "ecoambiente_fullweb3"
			}]
		}
	}
	workSelected = null;

	constructor(public translate: TranslateService) {
		
	}

	ngOnInit(): void {
		
	}

	ngOnChanges() {
		if(this.translationLenguage != null) {
			for (let key in this.translationLenguage.portfolio.works) {
				this.works[key].title = this.translationLenguage.portfolio.works[key].title;
				this.works[key].proprietor = this.translationLenguage.portfolio.works[key].proprietor;
				this.works[key].description = this.translationLenguage.portfolio.works[key].description;
			}
		}
	}

	showWork(key) {
		if(!this.works[key]) return;
		this.workSelected = this.works[key];
		this.showModal = true;
	}
}
