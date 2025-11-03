const pool = require('../config/db');

const clienteModel = {


    selecionarTodos: async () => {
        const sql = 'SELECT * FROM clientes;';
        const [rows] = await pool.query(sql)
        return rows;
    },


    adicionarCliente: async (nome, cpf) => {
        const sql = 'INSERT INTO clientes (nomeCliente, cpfCliente) VALUES (?,?);';
        const values = [nome, cpf];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    },
    analisarCPF: async (analisarCPF) =>{
        const sql = 'SELECT * FROM clientes WHERE cpfCliente=?;';
        const values = [analisarCPF];
        const [rows] = await pool.query(sql, values);
        console.log(rows);
        return rows;
    }
    

}

module.exports = { clienteModel }