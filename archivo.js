const Tienda = (() => {
    let inventario = [
        { id: '0', stock: 2, nombre: 'camisa', precio: 10 },
        { id: '1', stock: 2, nombre: 'pantalon', precio: 15 },
        { id: '2', stock: 2, nombre: 'zapatos', precio: 70 }
    ];
    let carritoDecompras = [];

    function agregarProducto(){
        let agregarCamisa = document.querySelector('#agregarCamisa');
        agregarCamisa.addEventListener('click', function(){
            if(inventario[0].stock> 0){
                carritoDecompras[0]= [inventario[0].id,inventario[0].nombre,inventario[0].precio];
                alert(carritoDecompras)
                console.log(carritoDecompras)
                actualizarInventario(0)
            }
        })
        let agregarPantalon = document.querySelector('#agregarPantalon')
        agregarPantalon.addEventListener('click', function(){
            if(inventario[1].stock> 0){
                carritoDecompras[1]= [inventario[1].id,inventario[1].nombre,inventario[1].precio]
                alert(carritoDecompras)
                actualizarInventario(1)
                console.log(carritoDecompras)
            }
        })
        let agregarZapatos = document.querySelector('#agregarZapatos')
        agregarZapatos.addEventListener('click', function(){
            if(inventario[2].stock> 0){
                carritoDecompras[2]= [inventario[2].id,inventario[2].nombre,inventario[2].precio]
                alert(carritoDecompras)
                actualizarInventario(2)
                console.log(carritoDecompras)
            }
        })  
    }

    function realizarPago() {
        
    }

    function actualizarInventario(arreglo) {
        inventario[arreglo].stock-=1
        console.log(inventario)
        document.getElementById('areaCode').innerHTML = ""
        mostrarInventario()
    }
    
    function mostrarInventario(){
        let areaCode = document.getElementById("areaCode");
        areaCode.innerHTML += '<h1>Id stock nombre precio</h1> '
        inventario.forEach(function(v){
            areaCode.innerHTML += ` <h5>${v.id} --> stock: ${v.stock} -->${v.nombre} --> Precio: ${v.precio} </h5>` ;
        })
    }

    return {agregarProducto, realizarPago, mostrarInventario}
})();


const Indumentaria = (id,stock,nombre,precio) =>{
    this.id = id;
    this.stock = stock;
    this.nombre = nombre;
    this.precio = precio;
    return {}
};

let camisa = ()=>{
    let Camisa = Indumentaria();
    return Object.assign({},Camisa,{})
}
let pantalon = ()=>{
    let Pantalon = Indumentaria();
    return Object.assign({},Pantalon,{})
}
let zapatos = ()=>{
    let Zapatos = Indumentaria();
    return Object.assign({},Zapatos,{})
}

Tienda.mostrarInventario()
Tienda.agregarProducto()


 
