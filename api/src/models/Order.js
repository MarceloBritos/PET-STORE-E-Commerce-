
//modelo ORDEN/CARRITO

const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {

    sequelize.define('order', {
            // La orden solo puede tener 5 estados: 
            // -carrito (la orden es creada pero esta vacía)
            // -creada (ya se agregó algún producto)
            // -procesando (una vez que se clickea "Finalizar pedido" y se procede al pago)
            // -cancelada (el usuario canceló la compra. Se cierra la orden como está y se crea una nueva)
            // -completada (el usuario pagó la compra. Se cierra la orden como está y se crea una nueva)
        status:{  
            type: DataTypes.ENUM('cart', 'created', 'processing', 'cancelled', 'completed'),
            allowNull: false
        }
    });
};