// NAVBAR
class MobileNavbar{
	constructor(mobileMenu, navList, navLinks){
		this.mobileMenu = document.querySelector(mobileMenu)
		this.navList = document.querySelector(navList)
		this.navLinks = document.querySelectorAll(navLinks)
		this.activeClass = "active"

		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(){
		this.navList.classList.toggle(this.activeClass)
	}

	addClickEvent(){
		this.mobileMenu.addEventListener("click", this.handleClick)
	}

	init(){
		if(this.mobileMenu){
			this.addClickEvent()
		}
		return this
	}
}

const mobileNavbar = new MobileNavbar(
	".btn-mobile",
	".nav",
	".nav .menu .item",
	".nav .menu .special-item"
)

mobileNavbar.init()

// ADICIONAR AO CARRINHO


sessionStorage.descricao = document.querySelector('h3.title-product').innerHTML
sessionStorage.valor = document.querySelector('p.price-product').innerHTML 

function add(){
	window.location = "cart.html"
}

var resumo = document.querySelector('p.descricao')
		resumo .innerHTML = '<p>Descrição do produto</p>' + sessionStorage.descricao
		'<p>Valor</p>' + sessionStorage.valor

