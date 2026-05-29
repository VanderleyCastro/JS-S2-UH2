// ==============================
// GESTIÓN DE DATOS CON OBJETOS, SETS Y MAPS
// Archivo: gestion_datos.js
// ==============================

// ==========================================
// TASK 1 - CREACIÓN DEL OBJETO DE PRODUCTOS
// ==========================================

const productos = [
  {
    id: 1,
    nombre: "Laptop",
    precio: 2500,
  },
  {
    id: 2,O
    nombre: "Mouse",
    precio: 80,
  },
  {
    id: 3,
    nombre: "Teclado",
    precio: 150,
  },
];

// ==========================================
// TASK 5 - VALIDACIÓN DE PRODUCTOS
// ==========================================

function validarProducto(producto) {
  return (
    producto.id &&
    typeof producto.nombre === "string" &&
    producto.nombre.trim() !== "" &&
    typeof producto.precio === "number" &&
    producto.precio > 0
  );
}

console.log("===== VALIDACIÓN DE PRODUCTOS =====");

productos.forEach((producto) => {
  if (validarProducto(producto)) {
    console.log(`Producto válido: ${producto.nombre}`);
  } else {
    console.log("Producto inválido:", producto);
  }
});

// ==========================================
// TASK 2 - USO DE SET
// ==========================================

console.log("\n===== USO DE SET =====");

// Lista con números repetidos
const numeros = new Set([1, 2, 2, 3, 4, 4, 5]);

// Mostrar contenido del Set
console.log("Set sin duplicados:", numeros);

// Agregar un número
numeros.add(10);
console.log("Después de agregar 10:", numeros);

// Verificar si existe un número
console.log("¿Existe el número 3?", numeros.has(3));

// Eliminar un número
numeros.delete(2);
console.log("Después de eliminar el 2:", numeros);

// Recorrer el Set con for...of
console.log("Recorriendo el Set:");

for (const numero of numeros) {
  console.log(numero);
}

// ==========================================
// TASK 3 - CREACIÓN DE MAP
// ==========================================

console.log("\n===== MAP DE CATEGORÍAS =====");

const categorias = new Map();

categorias.set("Tecnología", "Laptop");
categorias.set("Accesorios", "Mouse");
categorias.set("Periféricos", "Teclado");

// Mostrar el contenido del Map
console.log(categorias);

// ==========================================
// TASK 4 - ITERACIÓN DE ESTRUCTURAS
// ==========================================

console.log("\n===== RECORRER OBJETOS =====");

productos.forEach((producto) => {
  console.log(`\nProducto ${producto.id}:`);

  // for...in
  for (const propiedad in producto) {
    console.log(`${propiedad}: ${producto[propiedad]}`);
  }

  // Métodos de objeto
  console.log("Keys:", Object.keys(producto));
  console.log("Values:", Object.values(producto));
  console.log("Entries:", Object.entries(producto));
});

// Recorrer Map con forEach()
console.log("\n===== RECORRIENDO EL MAP =====");

categorias.forEach((producto, categoria) => {
  console.log(`Categoría: ${categoria} -> Producto: ${producto}`);
});

// ==========================================
// PRUEBAS FINALES
// ==========================================

console.log("\n===== PRUEBAS FINALES =====");

console.log("Lista completa de productos:");
console.log(productos);

console.log("Lista de productos únicos (Set):");
console.log(numeros);

console.log("Categorías y productos (Map):");
console.log(categorias);
