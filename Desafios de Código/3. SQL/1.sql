SELECT DISTINCT
    c.nome AS cliente
FROM clientes c
    JOIN pedidos p ON c.id = p.id_cliente
WHERE
    p.data_pedido >= DATEADD (MONTH, -1, GETDATE ())