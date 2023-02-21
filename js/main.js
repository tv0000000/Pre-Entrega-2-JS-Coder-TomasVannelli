// ***** PRE ENTREGA 2 JS CODER *****

// Clase Producto

class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
}


const producto1 = new Producto("Pan", 50, 40);
const producto2 = new Producto("Leche", 40, 30);
const producto3 = new Producto("Queso", 30, 20);
const producto4 = new Producto("Tomate", 20, 10);

const arrayProductos = [producto1, producto2, producto3, producto4];

console.log(arrayProductos);

// Opciones del menú - FUNCIONA OK
menu = () => {
    alert("Bienvenido al almacén Don Pepito");
    let opcion = parseInt(prompt("Ingrese una opción: 1) Consultar Productos en stock 2) Consultar un producto 3) Consultar precio de productos 4) Consultar el precio de los productos + IVA 5) Agregar producto 6) Eliminar producto 7) Modificar precio producto 8) Agregar Stock a producto 9) Eliminar stock de producto 10) Salir"));
    return opcion;
}
// opción 1 - Función para consultar Productos - FUNCIONA OK
let consularProductos = () => {
    arrayProductos.forEach(producto => {
        console.log(producto.nombre);
    })
}

// opción 2 Función para consultar un producto - FUNCIONA OK
let buscarProducto = () => {
    let productoEnc = prompt("Ingrese el nombre del producto a consultar:  ");
    let buscaProducto = arrayProductos.find(producto => producto.nombre === productoEnc);
    if (buscaProducto) {
        console.log(`Producto consultado: " ${JSON.stringify(buscaProducto)}`);
    }
    else { alert("Debes ingresar un producto dentro del Stock") }
}

// opción 3 Función para consultar precio de los Productos - FUNCIONA OK
function consularPrecios() {
    arrayProductos.forEach(producto => {
        console.log(`${producto.nombre} el precio es de $${producto.precio}`);
    })
}

// opción 4 Calcular precio de productos + IVA - FUNCIONA OK

let arrayProductosMasIva = arrayProductos.map(producto => {
    return {
        nombre: producto.nombre,
        precio: (producto.precio * 1.12).toFixed(2),
    }
})

// opción 5 Función para agregar un producto. FUNCIONA OK

agregarProducto = () => {
    let nombre = prompt("Ingrese el nombre del producto que desea agregar: ");
    let precio = parseInt(prompt("Ingrese precio del producto: "));
    let stock = parseInt(prompt("Ingrese la cantidad:"));

    if (nombre == "" || isNaN(precio) || isNaN(stock)) {
        alert("Por favor completa todos los datos para agregar un producto");
    } else {
        let producto = new Producto(nombre, precio, stock);
        arrayProductos.push(producto);
        console.log(arrayProductos);
    }
}

// opción  6 Función para eliminar un producto - FUNCIONA OK

eliminarProducto = () => {
    let eliminado = prompt("Ingrese el nombre del producto a eliminar:  ");
    let productoEliminado = arrayProductos.find(producto => producto.nombre === eliminado);
    //    nuevo
    if (productoEliminado) {
        let indice = arrayProductos.indexOf(productoEliminado);
        arrayProductos.splice(indice, 1);
        console.log(arrayProductos);
    } else {
        alert("Ingresa un producto dentro del Stock") //  no borro nada, porque productoEliminado no existe.
    }
}

// opción 7 Modificar precio producto - FUNCIONA OK.
modificacionProducto = () => {
    let productoMod = prompt("Ingrese el nombre del producto a modificar el precio:  ");
    let buscaProducto = arrayProductos.find(producto => producto.nombre === productoMod);
    let precio = parseInt(prompt("ingrese el nuevo precio del producto"));
    if (buscaProducto && precio >= 1) {
        let indice = arrayProductos.indexOf(buscaProducto);
        arrayProductos.splice(indice, 1);
        let productoNuevoP = new Producto(productoMod, precio, buscaProducto.stock);
        arrayProductos.push(productoNuevoP);
        console.log(arrayProductos);
    } else { alert("Debes ingresar un producto dentro del Stock y su nuevo precio") }
}

// opción 8 Sumar Stock - FUNCIONA OK
agregarStock = () => {
    let productoSumaStock = prompt("Ingrese el nombre del producto al que desea sumar stock:  ");
    let sumaStock = arrayProductos.find(producto => producto.nombre === productoSumaStock);
    let agregarStock = parseInt(prompt("ingrese la cantidad de stock que quiere sumar"));
    if (sumaStock && agregarStock > 0) {
        sumaStock.stock += agregarStock;
        console.log(arrayProductos);
    } else { (alert("Debes ingresar un producto dentro del Stock o el Stock que quieres agregar")) }
}

// opción 9 eliminar Stock FUNCIONA OK
eliminarStock = () => {
    let productoEliminaStock = prompt("Ingrese el nombre del producto al que desea eliminar stock:  ");
    let buscaProducto = arrayProductos.find(producto => producto.nombre === productoEliminaStock);
    let eliminaStock = parseInt(prompt("ingrese la cantidad de stock que quiere restar"));
    if (buscaProducto && eliminaStock <= buscaProducto.stock) {
        buscaProducto.stock -= eliminaStock;
        console.log(arrayProductos);
    } else { (alert("Debes ingresar un producto dentro del Stock o ingresaste una suma mayor al stock disponible")) }
}

// opción 10 Función para salir del programa: - FUNCIONA OK
salir = () => {
    alert("Gracias!");
}



// Ejecución
let opcion = menu();

switch (opcion) {
    case 1:
        consularProductos();
        break;
    case 2:
        buscarProducto();
        break;
    case 3:
        consularPrecios();
        break;
    case 4:
        // Consultar precios + IVA
        console.log("El precio de los productos más IVA es de: ")
        console.log(arrayProductosMasIva);
        break;
    case 5:
        agregarProducto();
        break;
    case 6:
        eliminarProducto();
        break;
    case 7:
        modificacionProducto();
        break;
    case 8:
        agregarStock();
        break;
    case 9:
        eliminarStock();
        break
    case 10:
        salir();
        break;

    default:
        alert("Opción incorrecta");
        break;
}
