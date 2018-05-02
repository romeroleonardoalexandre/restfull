const categories = deps => {
    return {
        all: () => {
            return new Promise((resolve, reject) => {
                const {connection, errorHandler} = deps
                    connection.query('SELECT * FROM categories', (error, results) => {
                        if (error) {
                            errorHandler(error, 'Falha ao listar as categorias', reject);
                            return false;
                        }
                           resolve({ categories: results });
                    })
                })
        },
        save: (name) => {
            return new Promise((resolve, reject) => {
                const {connection, errorHandler} = deps
                    connection.query('INSERT INTO categories (name) VALUES (?)', [name], (error, results) => {
                        if (error) {
                            errorHandler(error, 'Falha ao Inserir as categoria', reject);
                            return false;
                        }
                           resolve({ category: {id: results.insertId} });
                    })
                })
        },
        update: (id, name) => {
            return new Promise((resolve, reject) => {
                const {connection, errorHandler} = deps
                    connection.query('UPDATE categories SET name = ? WHERE id = ?', [name, id], (error, results) => {
                        if (error) {
                            errorHandler(error, 'Falha ao Atualizar as categoria ${name}', reject);
                            return false;
                        }
                           resolve({ category: {id: results.insertId} });
                    })
                })
        },
        del: (id) => {
            return new Promise((resolve, reject) => {
                const {connection, errorHandler} = deps
                    connection.query('DELETE FROM categories WHERE id = ?', [id], (error, results) => {
                        if (error) {
                            errorHandler(error, 'Falha ao Remover as categoria de id ${id}', reject);
                            return false;
                        }
                           resolve({ message: 'Categoria removida com sucesso' });
                    })
                })
        }
    }
}

module.export = categories
