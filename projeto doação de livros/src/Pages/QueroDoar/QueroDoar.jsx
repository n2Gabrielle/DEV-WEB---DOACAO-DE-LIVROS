import { useState } from 'react';
import S from './queroDoar.module.scss';
import livro from '../../assets/formImg.png';

export default function QueroDoar() {
    // Estado para armazenar os dados do formulário
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [autor, setAutor] = useState('');
    const [imagem, setImagem] = useState('');

    // Função para enviar os dados para o back-end
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevenir o comportamento padrão de envio do formulário

        const dadosLivro = {
            titulo,
            categoria,
            autor,
            imagem,
        };
        console.log("Dados do livro enviados:", dadosLivro);  // Log para mostrar os dados antes do envio

        try {
            // Enviar os dados usando fetch para a porta 8081
            const response = await fetch('http://localhost:8081/livros/doar', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Define o tipo de conteúdo como JSON
                },
                body: JSON.stringify(dadosLivro), // Dados do livro convertidos para JSON
            });

            if (response.ok) {
                alert('Livro doado com sucesso!');
            } else {
                alert('Erro ao doar o livro.');
            }
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
            alert('Erro de conexão com o servidor.');
        }
    };

    return (
        <section className={S.principal}>
            <section className={S.container}>
                <h2>Por favor, preencha o formulário com suas informações e as informações do Livro</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <img src={livro} alt="icone de um livro" />
                        <h3>Informações do livro</h3>
                    </div>
                    <input
                        type="text"
                        placeholder="Título"
                        value={titulo}
                        onChange={(e) => setTitulo(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        value={categoria}
                        onChange={(e) => setCategoria(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Autor"
                        value={autor}
                        onChange={(e) => setAutor(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Link da Imagem"
                        value={imagem}
                        onChange={(e) => setImagem(e.target.value)}
                    />
                    <input type="submit" value="Doar" />
                </form>
            </section>
        </section>
    );
}
