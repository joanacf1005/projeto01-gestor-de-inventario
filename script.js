const inventario = [
 { id: 1, nome: "Teclado Mecânico RGB", preco: 85, categoria: ["Informática", "Periféricos"],emStock: true },
 { id: 2, nome: "Frigideira a Ar (Air Fryer)", preco: 110, categoria: ["Eletrodomésticos", "Cozinha"],emStock: true },
 { id: 3, nome: "Cadeira de Escritório Ergonómica", preco: 180, categoria: ["Escritório","Mobiliário"], emStock: false },
 { id: 4, nome: "Ecrã Curvo 27' 144Hz", preco: 250, categoria: ["Informática", "Ecrãs"], emStock: true },
 { id: 5, nome: "Máquina de Café de Cápsulas", preco: 75, categoria: ["Eletrodomésticos", "Cozinha"], emStock: true },
 { id: 6, nome: "Caderno Inteligente A5", preco: 30, categoria: ["Escritório", "Papelaria"], emStock: true },
 { id: 7, nome: "Trotinete Elétrica", preco: 450, categoria: ["Lazer", "Mobilidade"], emStock: false },
 { id: 8, nome: "Rato Sem Fios Vertical", preco: 55, categoria: ["Informática", "Periféricos"], emStock: true }
];

// filter para achar produtos em stock;

const produtosEmStock = inventario.filter(stockTrue => stockTrue.emStock === true);
console.log("Os produtos em stock são", produtosEmStock);

//filter para achar produtos em stock e preço < 100

const produtosEmStockeAbaixoDe100 = inventario.filter(stockTrue => stockTrue.emStock === true && stockTrue.preco < 100);
console.log("Os produtos em stock e com preço menor que 100 são", produtosEmStockeAbaixoDe100);

